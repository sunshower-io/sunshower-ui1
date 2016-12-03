import {
    Router,
    RouterConfiguration
} from "aurelia-router";

import {bindable} from 'aurelia-framework';
interface Component {
    name: string;
    icon: string;
    active?: boolean;
}

export class Right {

    @bindable
    private active:Component;

    @bindable
    components: Component[];

    constructor() {
        this.configure([{
            name: 'palette',
            icon: 'large grey file outline icon',
            active:true,
        },{
            name: 'properties',
            icon: 'large grey folder outline icon'
        }]);
        this.active = this.components[0];
    }

    setActive(active:Component) {
        if(this.active) {
            this.active.active = false;
        }
        this.active = active;
        this.active.active = true;
    }

    attached() {
    }

    configure(components:Component[]) {
        this.components = [];
        for(let component in components) {
            console.log("COMP", component);
            this.components[component] = components[component];
        }
    }


}