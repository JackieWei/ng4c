/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;

    export interface TabProps extends Scope {
    }

    export class Tab extends BaseController {
        private scope: TabProps;

        public constructor($scope: Scope, $element: JQuery) {
            super($scope, $element, "sap.sbo.ng4c.launchpad.aside.Tab");
            this.scope = <TabProps>this.$scope;
        }
    }
}