﻿/// <reference path="../basecontroller.ts" />
module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;

    export class Header extends BaseController {
        public constructor($scope: IScope, $element: JQuery) {
            super($scope, $element, "sap.sbo.ng4c.header.Header");
        }
    }
} 