import {Banner} from 'common/banner/banner';
import {Home} from "./home";
import {inject} from 'aurelia-framework';

@inject(Home)
export class HomeDefault {


    constructor(private home:Home) {
    }

    attached() : void {
        Banner.setToggling(false);
        Banner.open();
        this.home.pad = true;
        this.home.root = true;
    }

    activate(): void {
        // console.log("activate")
        // Banner.setToggling(false);
        // Banner.open();
        // this.home.pad = true;
        // this.home.root = true;
    }

    deactivate() : void {
        Banner.setToggling(true);
        Banner.close();
        this.home.root = false;
        this.home.pad = false;
    }

}