import {Point2D} from "lib/common/math";
import {Canvas} from 'lib/designer/canvas';
import {CanvasModel} from 'lib/designer/model';
import {CanvasSelector} from "./selector";
import {DeleteSelectionAction} from "../canvas/actions/delete-action";
import {UndoAction} from "../canvas/actions/undo-action";
import {RedoAction} from "../canvas/actions/redo-action";

export class Designer {


    private canvas : Canvas;

    constructor(
        private readonly container: HTMLElement,
        private readonly model: CanvasModel = new CanvasModel(),
        options?: DesignerOptions
    ) {
        let canvas = new Canvas(container, model),
            selector = new CanvasSelector(canvas, container);
        this.canvas = canvas;

        this.canvas.register({
            key: 'delete-selected',
            name: 'delete',
            values: ['delete']
        }, new DeleteSelectionAction());

        this.canvas.register({
            key: 'undo',
            name: 'undo',
            values: ['ctrl', 'z']
        }, new UndoAction());


        this.canvas.register({
            key: 'redo',
            name: 'redo',
            values: ['ctrl', 'y']
        }, new RedoAction());
    }

    activate() : void {
        this.canvas.activate();
    }

    deactivate() : void {
        this.canvas.deactivate();
    }







    undo() : void {
        this.canvas.undo();
    }

    redo() : void {
        this.canvas.redo();
    }

    getCanvas() : Canvas {
        return this.canvas;
    }

}


export class DesignerOptions {

    width                   ?: number;
    height                  ?: number;


    relativeLocation        ?: Point2D;
}