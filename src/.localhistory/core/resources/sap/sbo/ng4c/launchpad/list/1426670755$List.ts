/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.list {

    import BaseController = sap.sbo.ng4c.BaseController;

    export interface ListScope extends Scope {

    }

    export class List extends BaseController {
        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.list.List");
        }
    }
} 