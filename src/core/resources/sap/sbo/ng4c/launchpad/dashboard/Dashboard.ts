/// <reference path="../aside/aside.ts" />
/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.dashboard {
    import BaseController = sap.sbo.ng4c.BaseController;
    import AsideProps = sap.sbo.ng4c.launchpad.aside.AsideProps;

    export interface IDashboardScope extends Scope {
    }

    export class Dashboard extends BaseController {

        private scope: IDashboardScope;

        public constructor($scope: Scope, $element: JQuery) {
            super($scope, $element, "sap.sbo.ng4c.launchpad.dashboard.Dashboard");

            $scope.$on("showOrHideMenuBroadcast", $.proxy(this.onShowOrHideMenuBroadcast, this));
            this.scope = <IDashboardScope>this.$scope;
            this.scope.left = AsideProps.HIDE_WIDTH;
        }

        private onShowOrHideMenuBroadcast(event: ng.IAngularEvent, showOrHide: boolean) {
            if (showOrHide) {
                this.scope.left = AsideProps.SHOW_WIDTH;
            } else {
                this.scope.left = AsideProps.HIDE_WIDTH;
            }
        }
    }
} 