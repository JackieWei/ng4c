/// <reference path="../../app/router.ts" />
/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Router = sap.sbo.ng4c.app.Router;

    export interface ModulesProps extends Scope {
        menuItemClick: Function;
        _template: string;
    }

    export class Modules extends BaseController {
        public static $inject = ["router"];

        private scope: ModulesProps;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, router:Router) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.aside.Modules");
            this.scope = <ModulesProps>this.$scope;
            this.scope._template = this.scope.template;
            this.scope.menuItemClick = $.proxy(this.menuItemClick, this);
        }

        public menuItemClick(menuData:any): void {
            console.log(JSON.stringify(menuData));
        }
    }
}