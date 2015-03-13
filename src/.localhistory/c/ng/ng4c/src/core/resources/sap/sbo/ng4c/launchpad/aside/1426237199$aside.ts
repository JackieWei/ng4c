/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;

    export interface IAsideScope extends Scope {
        liteMode: boolean;
    }

    export class AsideProps {
        public static HIDE_WIDTH: number = 50;
        public static SHOW_WIDTH: number = 205;
    }

    export class Aside extends BaseController {
        private scope: IAsideScope;

        public constructor($scope: IAsideScope, $element: JQuery, $attrs: ng.IAttributes, storage:Storage) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.aside.Aside");
            $scope.$on("showOrHideMenuBroadcast", $.proxy(this.onShowOrHideMenuBroadcast, this));
            this.scope = <IAsideScope>this.$scope;
            this.scope.width = AsideProps.HIDE_WIDTH;
            this.scope.liteMode = true;
        }

        private onShowOrHideMenuBroadcast(event: ng.IAngularEvent, showOrHide: boolean) {
            if (showOrHide) {
                this.scope.width = AsideProps.SHOW_WIDTH;
            } else {
                this.scope.width = AsideProps.HIDE_WIDTH;
            }
            this.scope.liteMode = !showOrHide;
        }
    }
}