/// <reference path="../basecontroller.ts" />
module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;
    export class Center extends BaseController{
        public constructor($scope: Scope, $element: JQuery) {
            super($scope, $element, "sap.sbo.ng4c.header.Center");
        }
    }
}