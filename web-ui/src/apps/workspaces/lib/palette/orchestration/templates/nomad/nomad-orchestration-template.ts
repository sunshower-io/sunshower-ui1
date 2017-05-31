import {
    DefaultElementFactory
} from "lib/designer/canvas/palette";
import {
    Canvas
} from "lib/designer/canvas/canvas";


import {
    Drawable,
    RenderableVertex as Vertex
} from 'lib/designer/model';


import {
    mxPerimeter,
    mxConstants
} from "mxgraph";
import {Role} from "lib/common/security/model/user";

export class NomadOrchestrationTemplateProviderElement extends Vertex {
    style: string = 'hal-hasli-orchestration-template-provider-style';
}

export class NomadOrchestrationTemplateProviderFactory extends DefaultElementFactory {
    rolesAllowed        : Role[] = [new Role('admin')];
    elementName         : string = 'Nomad';
    displayIcon         : string = 'assets/icons/hal/orchestration/providers/nomad-logo.svg';
    paletteIcon         : string = 'assets/icons/hal/orchestration/providers/nomad-logo.svg';




    initialize(canvas: Canvas, element: HTMLElement): void {
        super.initialize(canvas, element);
        this.createStyle(canvas);
    }
    /**
     *
     * @param x
     * @param y
     * @param event
     * @param canvas
     * @param target
     * @returns {SecurityGroupElement}
     */

    newElement(
        x: number,
        y: number,
        event: Event,
        canvas: Canvas,
        target: any
    ): Drawable {
        return new NomadOrchestrationTemplateProviderElement('Nomad', x, y, 124, 124);
    }


    protected createStyle(canvas:Canvas) : void {
        let style = {};
        style[mxConstants.STYLE_FONTCOLOR] = '#ff0000';
        style[mxConstants.STYLE_IMAGE] = this.displayIcon;
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
        style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
        canvas
            .getStylesheet()
            .putCellStyle(
                'compute-security-group-style',
                style
            );
    }
}