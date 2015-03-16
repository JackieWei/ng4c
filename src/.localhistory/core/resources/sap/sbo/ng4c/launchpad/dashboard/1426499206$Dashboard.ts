/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.dashboard {
    import BaseController = sap.sbo.ng4c.BaseController;
    import AsideProps = sap.sbo.ng4c.launchpad.aside.AsideProps;

    export interface DashboardScope extends Scope {
        tiles: TileData[];
    }

    export interface TileData {
        index: number;
    }

    export class Dashboard extends BaseController {

        private scope: DashboardScope;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.dashboard.Dashboard");

            this.scope = <DashboardScope>this.$scope;

            this.scope.tiles = [];
        }

        private buildScope():void {
            $.ajax('', {
                async: true,
                success: $.proxy(this.onTilesLoaded, this)
            });
        }

        private onTilesLoaded(data: any): void {

        }
    }
} 