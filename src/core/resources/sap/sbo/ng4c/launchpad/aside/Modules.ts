/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;

    export interface ModulesProps extends Scope {
    }

    export class Modules extends BaseController {
        private scope: ModulesProps;

        public constructor($scope: Scope, $element: JQuery) {
            super($scope, $element, "sap.sbo.ng4c.launchpad.aside.Modules");
            this.scope = <ModulesProps>this.$scope;
        }
    }
}