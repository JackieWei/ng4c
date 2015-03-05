/// <reference path="../basecontroller.ts" />
module sap.sbo.ng4c.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    export class Aside extends BaseController{
        public constructor($scope: IScope, $element: JQuery) {
            super($scope, $element, "sap.sbo.ng4c.aside.Aside");
            $scope.$on("showOrHideMenuBroadcast", $.proxy(this.onShowOrHideMenuBroadcast, this));
        }

        private onShowOrHideMenuBroadcast(event: ng.IAngularEvent, showOrHide: boolean) {
            
        }
    }
}