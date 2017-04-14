
import {
    NavigationElement,
    RouterNavigationContext
} from "../navigator-element";
import {autoinject} from "aurelia-framework";
import {WorkspaceService} from "common/model/api/workspace/service";
import {bindable} from "aurelia-framework";
import * as _ from "lodash";

@autoinject
export class WorkspaceNavigator extends RouterNavigationContext {
    name            : string = 'frapper';


    hasChildren(): boolean {
        return true;
    }

    load(): Promise<boolean> {
        return Promise.resolve(true);
    }

    navigate(e: NavigationElement): void {

    }

}