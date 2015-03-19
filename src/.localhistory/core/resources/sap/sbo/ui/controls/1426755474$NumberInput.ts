﻿/// <reference path="../baseinput.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function NumberInputDirective(): Object {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            templateUrl: 'resources/sap/sbo/ui/controls/NumberInput.html',
            link: function ($scope, $element, $attrs, $controller) {
                console.log("NumberInput Control Linked!");
            }
        };
    }

    export interface NumberInputScope extends ControlScope {
    }

    export interface NumberInputAttributes extends ControlAttributes {
    }

    export class NumberInput extends BaseControl {

        private scope: NumberInputScope;
        private attrs: NumberInputAttributes;

        public constructor($scope: BaseInputScope, $element: JQuery, $attrs: BaseInputAttributes) {
            this.scope = <NumberInputScope>this.$scope;
            this.attrs = <NumberInputAttributes> $attrs;

            super($scope, $element, $attrs, "sap.sbo.ui.controls.NumberInput");
        }

        protected buildScope() {
            super.buildScope();
        }
    }
}