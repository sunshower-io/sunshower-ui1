import {
    Draftboard,
    DraftboardManager
} from 'elements/draftboard';

import {
    ObservedEvent,
    Listener
} from 'utils/observer'
import {bindable, inject} from 'aurelia-framework';

@inject(DraftboardManager)
export class LeftSidebar implements Listener {

    @bindable
    private draftboards: Draftboard[];

    constructor(
        private draftboardManager:DraftboardManager
    ) {
        draftboardManager
            .addEventListener('draftboard-changed', this);

    }

    attached() {
        this.draftboards =
            this.draftboardManager.list();
    }

    apply(event: ObservedEvent): void {
        this.draftboards =
            this.draftboardManager.list();
    }

}