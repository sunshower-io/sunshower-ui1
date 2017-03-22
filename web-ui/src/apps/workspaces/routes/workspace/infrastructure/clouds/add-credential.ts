import {
    bindable,
    inject,
    NewInstance
} from "aurelia-framework";
import {Provider} from "common/model/api/hal/api";
import {CredentialSecret} from "common/model/security/credentials";
import {HttpClient} from "aurelia-fetch-client";
import {
    ValidationController,
    ValidationRules
} from 'aurelia-validation';
import {BootstrapFormRenderer} from 'common/resources/custom-components/bootstrap-form-renderer';
import {NavigationInstruction} from "aurelia-router";

import {Workspace} from "apps/workspaces/routes/workspace/index";
@inject(Workspace, HttpClient, NewInstance.of(ValidationController))
export class AddCredential {


    @bindable
    private visible: boolean;

    @bindable
    private credential          :CredentialSecret;

    @bindable
    private loading             : boolean;

    private providerId          : string;

    private credentials         : CredentialSecret[];

    private filterHolder        : HTMLElement;
    private credentialSearch    : HTMLElement;
    private credentialFilter    : HTMLElement;
    private credentialHolder    : HTMLElement;


    @bindable
    private addingCredential    : boolean;

    constructor(
        private parent: Workspace,
        private client:HttpClient,
        private controller:ValidationController
    ) {
        this.controller.addRenderer(new BootstrapFormRenderer());

    }


    activate(id: string, p:any, u:NavigationInstruction) {
        this.providerId = u.params.id;
    }

    open() : void {
        this.credential = new CredentialSecret;
        this.setupValidation();
        this.refresh();
        this.setupSearch();
    }


    setupValidation() : void {
        ValidationRules.customRule(
            'atleastthreechars',
            (value, obj) => value === null || value === undefined || value.length > 2,
            `\${$displayName} must be at least three characters.`
        );
        let validationRules = ValidationRules
            .ensure((c:CredentialSecret) => c.name).required().satisfiesRule('atleastthreechars')
            .ensure((c:CredentialSecret) => c.credential).required().satisfiesRule('atleastthreechars')
            .ensure((c:CredentialSecret) => c.secret).required().satisfiesRule('atleastthreechars')
            .rules;
        this.controller.addObject(this.credential, validationRules);
    }

    setupSearch() : void {
        $(this.filterHolder).on('change', 'input', () => {
            let credentials = $(this.credentialHolder).find('.credential'),
                searchTerm = $(this.credentialSearch).val().toLowerCase(),
                filterTerm = $(this.credentialFilter).val();
            if (searchTerm == '' && filterTerm == '') {
                credentials.removeClass('inactive');
            }
            else {
                for (let i = 0; i < credentials.length; i++) {
                    let thisItem = $(credentials[i]);
                    if (thisItem.attr('data-name').toLowerCase().indexOf(searchTerm) >= 0 && thisItem.attr('data-type').indexOf(filterTerm) >= 0) {
                        thisItem.removeClass('inactive');
                    } else {
                        thisItem.addClass('inactive');
                    }
                }
            }
        });

    }

    attached() : void {
        this.open();
    }


    close() : void {
        this.parent.router.navigateBack();
    }

    addCredential() : void {
        this.addingCredential = true;
    }

    saveCredential() : void {
        this.controller.validate().then(result => {
            if (result.valid) {
                this.client.fetch(`providers/${this.providerId}/credential`, {
                    method: 'post',
                    body: JSON.stringify(this.credential)
                }).then(t => {
                    this.addingCredential = false;
                    this.refresh();
                    this.controller.reset();
                    this.credential = new CredentialSecret;
                });
            } else {
            }
        });
    }

    removeCredential(credential:CredentialSecret) : void {
        this.client.fetch(`providers/${this.providerId}/credential/${credential.id}`, {
            method: 'delete'
        }).then(t => this.refresh());
    }

    refresh() : void {
        this.loading = true;
        this.client.fetch(`providers/${this.providerId}/credentials`)
            .then(r => r.json() as any)
            .then(r => {
                this.credentials = r;
                this.loading = false;
            });
    }


}