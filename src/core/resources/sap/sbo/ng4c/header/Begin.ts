﻿/// <reference path="../basecontroller.ts" />
module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;

    export interface BeginScope extends Scope {
        showOrHideMenu: Function;
        showOrHideLogo: boolean;
    }

    export class Begin extends BaseController {
        private scope: BeginScope;
        public constructor($scope: Scope, $element: JQuery) {
            super($scope, $element, "sap.sbo.ng4c.header.Begin");
            this.scope = <BeginScope>$scope;
            this.scope.showOrHideMenu = $.proxy(this.showOrHideMenu, this);
        }

        private showOrHideMenu(name):void {
            this.scope.showOrHideLogo = !this.scope.showOrHideLogo;
            this.$scope.$emit("showOrHideMenu", this.scope.showOrHideLogo);
        }
    }
}