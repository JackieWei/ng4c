/// <reference path="../basecontroller.ts" />
module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;

    export interface BeginScope extends IScope {
        showOrHideMenu: Function;
    }

    export class Begin extends BaseController {
        private showOrHide: boolean;
        public constructor($scope: BeginScope, $element: JQuery) {
            super($scope, $element, "sap.sbo.ng4c.header.Begin");
            $scope.showOrHideMenu = $.proxy(this.showOrHideMenu, this);
        }

        private showOrHideMenu(name):void {
            this.showOrHide = !this.showOrHide;
            this.$scope.$emit("showOrHideMenu", this.showOrHide);
        }
    }
}