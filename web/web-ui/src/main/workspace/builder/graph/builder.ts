import {
    mxCell,
    mxUtils,
    mxGraph,
    mxGraphModel,
    mxRubberband,
    mxConstants,
    mxRectangle,
    mxConnectionHandler
} from "mxgraph";

import {ConnectionHandler} from './connection-handler';
import {TaskManager, Task} from "task/tasks";
import {Grid} from "../grid";
import {MenuHoverListener} from "../listeners/hover-listener";
import {mxGraphHandler} from "mxgraph";
import {Layer} from "mxgraph";
import {mxGeometry} from "mxgraph";

mxConstants.HANDLE_FILLCOLOR = '#239AE8';
mxConstants.HANDLE_STROKECOLOR = '#239AE8';
mxConstants.VERTEX_SELECTION_COLOR = '#0000FF';

mxRubberband.defaultOpacity = 1;


export class Builder extends mxGraph {

    private grid: Grid;

    constructor(public container: HTMLElement,
                public taskManager: TaskManager) {
        super(container, new mxGraphModel());
        new mxRubberband(this);
        this.setPanning(true)
        this.setConnectable(true);
        this.foldingEnabled = false;
        this.setHtmlLabels(true);
        this.gridSize = 40;
        this.grid = new Grid(this);
        this.grid.draw();
        this.addMouseListener(new MenuHoverListener(this));
        this.recursiveResize = true;
        mxGraphHandler.prototype.guidesEnabled = true;
    }

    public addNode(node:Node): void {



    }


    createConnectionHandler(): mxConnectionHandler {
        return new ConnectionHandler(this);
    }

    redraw(): void {
        this.grid.draw();
    }


    convertValueToString(cell: mxCell): string {
        if (mxUtils.isNode(cell.value)) {
            return cell.getAttribute('label');
        }
        return super.convertValueToString(cell);
    }


    selectCellForEvent(cell: mxCell) {
        if (cell.getAttribute('constituent') === '1') {
            let delegate = this.model.getParent(cell);
            super.selectCellForEvent(delegate);
        } else {
            super.selectCellForEvent(cell);
        }
    }

    resizeChildCells(cell:Layer, geometry:mxGeometry) {
        let geo = this.model.getGeometry(cell),
            dx = geometry.width / geo.width,
            dy = geometry.height / geo.height,
            childCount = this.model.getChildCount(cell);

        for (let i = 0; i < childCount; i++) {
            let child = this.model.getChildAt(cell, i);
            if(child.getAttribute('rresize') !== '0') {
                this.scaleCell(
                    this.model.getChildAt(cell, i),
                    dx,
                    dy,
                    true
                );
            }
        }
    }

    /**
     *
     * @param cell
     * @returns {any}
     */


    getPreferredSizeForCell(cell: Layer): mxRectangle {
        alert("Cool");
        if(cell.getAttribute('rresize') === '0') {
            return cell.geometry;
        } else {
            return super.getPreferredSizeForCell(cell);
        }
    }

    removeCells(cells: mxCell[]) {
        return super.removeCells(cells);
    }
}