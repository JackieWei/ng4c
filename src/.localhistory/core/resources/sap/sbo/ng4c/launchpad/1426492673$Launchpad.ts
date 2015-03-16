/// <reference path="../basecontroller.ts" />
module sap.sbo.ng4c.launchpad {
    import BaseController = sap.sbo.ng4c.BaseController;

    export interface LaunchpadScope extends Scope {
        asideWidth: number;
    }

    export class Launchpad extends BaseController {

        private scope: LaunchpadScope;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.Launchpad");

            this.scope = <LaunchpadScope>this.$scope;

            this.scope.asideWidth = 50;
        }
    }
} 