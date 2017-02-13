
import {DialogService} from 'aurelia-dialog';
import {EditorContext, EditorOperations} from "common/lib/canvas";
import {CanvasAction} from "common/lib/canvas/actions";
import {GroupItemsAsDialog} from "./dialogs/group-items-as-dialog";
import {CloudElementFactory} from "apps/workspaces/model/components/cloud";

export class CreateCloudMenuItem extends CanvasAction {

    constructor(private dialogService: DialogService) {
        super(
            'Create Cloud',
            'csg',
            'assets/sui/themes/hasli/assets/images/icons/provider/generic/cloud.svg'
        );
        this.setProperty('palette', '1');
        this.setProperty('canvas-menu', '1');
    }

    apply(editor: EditorContext): void {
        EditorOperations.set(editor, 'layer-type', 'Cloud');
        EditorOperations.set(editor, 'element-factory', new CloudElementFactory());
        this.dialogService.open({
            model: editor,
            viewModel: GroupItemsAsDialog
        }).then((result) => {
            if (!result.wasCancelled) {

            } else {

            }
        });
    }

}
