﻿/// <reference path="../baseinput.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function LinkedInputDirective(): Object {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            templateUrl: 'resources/sap/sbo/ui/controls/LinkedInput.html',
            link: function ($scope, $element, $attrs, $controller) {
                console.log("LinkedInput Control Linked!");
            }
        };
    }

    export interface LinkedInputScope extends BaseInputScope {
    }

    export interface LinkedInputAttributes extends BaseInputAttributes {
    }

    export class LinkedInput extends BaseInput {

        private scope: LinkedInputScope;
        private attrs: LinkedInputAttributes;

        public constructor($scope: BaseInputScope, $element: JQuery, $attrs: BaseInputAttributes) {
            this.scope = <LinkedInputScope>this.$scope;
            this.attrs = <LinkedInputAttributes> $attrs;

            super($scope, $element, $attrs, "sap.sbo.ui.controls.LinkedInput");
        }

        protected buildScope() {
            super.buildScope();
        }
    }
}