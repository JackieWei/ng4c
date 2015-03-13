/// <reference path="../../app/router.ts" />
/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Router = sap.sbo.ng4c.app.Router;

    export interface TabProps extends Scope {
        currentIndex: number;
        showTab: Function;
        menuItemClick: Function;
        mymenuItemClick: Function;
    }

    export class Tab extends BaseController {
        private scope: TabProps;
        private router: Router;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, $router: Router) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.aside.Tab");
            this.scope = <TabProps>this.$scope;
            this.router = $router;
            this.scope.currentIndex = 0;
            this.scope.showTab = $.proxy(this.showTab, this);
            this.scope.menuItemClick = $.proxy(this.menuItemClick, this);
            this.scope.mymenuItemClick = $.proxy(this.mymenuItemClick, this);
        }

        public showTab(index: number) {
            if (index === this.scope.currentIndex) return;
            this.scope.currentIndex = index;
        }

        public menuItemClick(menuData: any): void {
            
        }

        public mymenuItemClick(menuData: any): void {
            console.log(JSON.stringify(menuData));
        }
    }
}