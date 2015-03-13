/// <reference path="../basecontroller.ts" />
module sap.sbo.ng4c.launchpad {
    import BaseController = sap.sbo.ng4c.BaseController;

    export class Launchpad extends BaseController {
        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.Launchpad");
        }
    }
} 