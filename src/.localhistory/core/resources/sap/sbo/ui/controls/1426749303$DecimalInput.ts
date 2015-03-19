/// <reference path="baseinput.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function DecimalInputDirective(): Object {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            templateUrl: 'resources/sap/sbo/ui/controls/DecimalInput.html',
            link: function ($scope, $element, $attrs, $controller) {
                console.log("DecimalInput Control Linked!");
            }
        };
    }

    export interface DecimalInputScope extends BaseInputScope {
    }

    export interface DecimalInputAttributes extends BaseInputAttributes {
    }

    export class DecimalInput extends BaseInput {

        private scope: DecimalInputScope;
        private attrs: DecimalInputAttributes;

        public constructor($scope: BaseInputScope, $element: JQuery, $attrs: BaseInputAttributes) {
            this.scope = <DecimalInputScope>this.$scope;
            this.attrs = <DecimalInputAttributes> $attrs;

            super($scope, $element, $attrs, "sap.sbo.ui.controls.DecimalInput");
        }

        protected buildScope() {
            super.buildScope();
        }
    }
}