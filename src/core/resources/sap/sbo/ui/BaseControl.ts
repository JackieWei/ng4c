/// <reference path="../ng4c/scope.ts" />
/// <reference path="../ng4c/basecontroller.ts" />
module sap.sbo.ui {

    import BaseController = sap.sbo.ng4c.BaseController;
    import Scope = sap.sbo.ng4c.Scope;

    export interface ControlScope extends Scope{
    }

    export class BaseControl extends BaseController{
        public constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes, $package: string) {
            super($scope, $element, $attrs, $package);
        }
    }
}