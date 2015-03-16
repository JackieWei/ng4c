﻿/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.dashboard {
    import BaseController = sap.sbo.ng4c.BaseController;
    import AsideProps = sap.sbo.ng4c.launchpad.aside.AsideProps;

    export interface TileScope extends Scope {
        rawData: TileData;
    }

    export class Tile extends BaseController {

        private scope: TileScope;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.dashboard.Tile");

            this.scope = <TileScope>this.$scope;

            this.scope.rawData = this.scope.data;
        }
    }
} 