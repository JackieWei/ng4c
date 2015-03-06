﻿/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;

    export interface MyMenuProps extends Scope {
    }

    export class MyMenu extends BaseController {
        private scope: MyMenuProps;

        public constructor($scope: Scope, $element: JQuery) {
            super($scope, $element, "sap.sbo.ng4c.launchpad.aside.MyMenu");
            this.scope = <MyMenuProps>this.$scope;
        }
    }
}