﻿/// <reference path="../../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.dashboard.tiles {
    import BaseController = sap.sbo.ng4c.BaseController;

    export interface KpiProps extends Scope {
    }

    export class Kpi extends BaseController {
        private scope: KpiProps;

        public constructor($scope: Scope, $element: JQuery) {
            super($scope, $element, "sap.sbo.ng4c.launchpad.aside.Kpi");
            this.scope = <KpiProps>this.$scope;
        }
    }
}