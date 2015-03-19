/// <reference path="../../app/router.ts" />
/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.list {

    import BaseController = sap.sbo.ng4c.BaseController;
    import Router = sap.sbo.ng4c.app.Router;

    export interface ListScope extends Scope {
        backToDashboard: Function;
    }

    export class List extends BaseController {

        private scope: ListScope;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, router:router) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.list.List");

            this.scope = <ListScope>$scope;

            this.scope.backToDashboard = $.proxy(this.backToDashboard, this);
        }

        public backToDashboard() {

        }
    }
} 