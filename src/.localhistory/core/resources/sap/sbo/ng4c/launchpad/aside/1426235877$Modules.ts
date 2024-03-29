﻿/// <reference path="../../app/Router.ts" />
/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Router = sap.sbo.ng4c.app.Router;

    export interface ModulesProps extends Scope {
        menuItemClick: Function;
    }

    export class Modules extends BaseController {
        private scope: ModulesProps;
        private router: Router;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, router: Router) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.aside.Modules");
            this.scope = <ModulesProps>this.$scope;
            this.router = router;
            this.scope.menuItemClick = $.proxy(this.menuItemClick, this);
        }

        public menuItemClick(menuData: any): void {
            this.router.hashTo("list", menuData.action);
        }
    }
}