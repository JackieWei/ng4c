/// <reference path="../basecontrol.ts" />
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

    export interface DecimalInputScope extends ControlScope {
    }

    export interface DecimalInputAttributes extends ControlAttributes {
    }

    export class DecimalInput extends BaseControl {

        private scope: DecimalInputScope;
        private attrs: DecimalInputAttributes;

        public constructor($scope: BaseInputScope, $element: JQuery, $attrs: ControlAttributes) {
            this.scope = <DecimalInputScope>this.$scope;
            this.attrs = <DecimalInputAttributes> $attrs;

            super($scope, $element, $attrs, "sap.sbo.ui.controls.DecimalInput");
        }

        protected buildScope() {
            super.buildScope();
        }
    }
}