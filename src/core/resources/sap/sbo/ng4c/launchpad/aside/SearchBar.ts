﻿/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;

    export interface SearchBarProps extends Scope {
    }

    export class SearchBar extends BaseController {
        private scope: SearchBarProps;

        public constructor($scope: Scope, $element: JQuery) {
            super($scope, $element, "sap.sbo.ng4c.launchpad.aside.SearchBar");
            this.scope = <SearchBarProps>this.$scope;
        }
    }
}