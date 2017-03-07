import 'jquery'
import 'fetch';
import {Aurelia} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

import {
    HttpClient as BasicHttpClient
} from 'aurelia-http-client'

import {
    LocalStorage,
    createStorage
} from "common/lib/storage/local/local-storage";


import {
    AuthenticationContextHolder,
    User,
    AuthenticationContext
} from "common/model/security";


import {DialogConfiguration} from "aurelia-dialog";

import {Activity, Activities} from 'common/resources/custom-elements/nav-bar/activity-monitor-dropdown';

import {
    SemanticUIRenderer
} from "common/resources/custom-components/semantic-ui-renderer";
import {ChannelSet} from "common/lib/events";
import {FetchClientInterceptor} from
    "./common/resources/custom-components/fetch-client-errors";



export function param(name) {
    return decodeURIComponent((new RegExp(
            '[?|&]' +
            name +
            '=' +
            '([^&;]+?)(&|#|;|$)')
            .exec(location.search) ||
        [null, ''])[1].replace(/\+/g, '%20')) || null;
}

export function configure(aurelia: Aurelia) {
    console.log("Starting...");

    aurelia.use
        .standardConfiguration()
        .globalResources([
            'common/lib/widget/menu/menu',
            'common/resources/custom-elements/tree/tree',
            'common/resources/nested-application/nested-application'
        ])
        .plugin('aurelia-validation')
        .plugin('aurelia-animator-velocity')
        .plugin('aurelia-dialog', (config: DialogConfiguration) => {
            config.useRenderer(SemanticUIRenderer);
        }).developmentLogging();

    let container = aurelia.container,
        http = new HttpClient();
    http.configure(config => {
        config
            .useStandardConfiguration()
            .withBaseUrl('/hasli/api/v1/')
            .withDefaults({
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
    });


    let storage = createStorage(),
        tokenHolder = new AuthenticationContextHolder(http, storage);


    container.registerInstance(
        LocalStorage,
        createStorage()
    );

    http.fetch('initialize/active')
        .then(data => data.json() as any)
        .then(data => {
            if (!data.value) {
                container.registerInstance(HttpClient, http);
                aurelia.start().then(() => aurelia.setRoot('initialize/initialize'))
            } else {
                let token = storage.get('X-AUTH-TOKEN') || param('token');
                tokenHolder.validate(token).then(context => {
                    container.registerInstance(User, context.user);
                    container.registerInstance(AuthenticationContext, context);
                    http.defaults.headers['X-AUTH-TOKEN'] = token;
                    let authenticatedClient = new HttpClient(),
                        basicClient = new BasicHttpClient();



                    basicClient.configure(config => {
                            config.withBaseUrl('/hasli/api/v1/')
                                .withInterceptor(
                                    container.get(FetchClientInterceptor)
                                ).withHeader('X-AUTH-TOKEN', token);
                        }
                    );

                    authenticatedClient.configure(config => {
                        config
                            .useStandardConfiguration()
                            .withBaseUrl('/hasli/api/v1/')
                            .withDefaults({
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                    'X-AUTH-TOKEN': token
                                }
                            })
                            .withInterceptor(container.get(FetchClientInterceptor));
                    });

                    let channelSet = new ChannelSet(
                            `ws://${location.host}/hasli/api/events`,
                            encodeURIComponent(token)
                    );
                    tokenHolder.set(context, false);
                    container.registerInstance(HttpClient, authenticatedClient);
                    container.registerInstance(BasicHttpClient, basicClient);
                    container.registerInstance(ChannelSet, channelSet);
                    aurelia.start().then(() => aurelia.setRoot('app'));
                }).catch(a => {
                    container.registerInstance(HttpClient, http);
                    aurelia.start().then(() => aurelia.setRoot('apps/auth/auth'));
                });

            }
        });
}