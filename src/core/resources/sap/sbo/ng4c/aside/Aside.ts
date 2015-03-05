/// <reference path="../basecontroller.ts" />
module sap.sbo.ng4c.aside {
    import BaseController = sap.sbo.ng4c.BaseController;

    export interface IAsideScope extends IScope {
        width: number;
    }

    export class Aside extends BaseController{
        public constructor($scope: IAsideScope, $element: JQuery) {
            super($scope, $element, "sap.sbo.ng4c.aside.Aside");
            $scope.$on("showOrHideMenuBroadcast", $.proxy(this.onShowOrHideMenuBroadcast, this));
            var scope: IAsideScope = <IAsideScope>this.$scope;
            scope.width = 50;
        }

        private onShowOrHideMenuBroadcast(event: ng.IAngularEvent, showOrHide: boolean) {
            var scope: IAsideScope = <IAsideScope>this.$scope;
            if (showOrHide) {
                scope.width = 300;
            } else {
                scope.width = 50;
            }
        }
    }
}