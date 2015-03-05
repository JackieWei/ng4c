﻿/// <reference path="../basecontroller.ts" />
module sap.sbo.ng4c.launchpad {
    import BaseController = sap.sbo.ng4c.BaseController;

    export class Launchpad extends BaseController {
        public constructor($scope: IScope, $element: JQuery) {
            super($scope, $element, "sap.sbo.ng4c.launchpad.Launchpad");
        }
    }
} 