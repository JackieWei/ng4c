/// <reference path="baseinput.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function Input(): Object {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            templateUrl: 'resources/sap/sbo/ui/controls/Input.html',
            link: function ($scope, $element, $attrs, $controller) {
                console.log("Input Control Linked!");
            }
        };
    }

    export interface InputScope extends BaseInputScope {
    }

    export interface InputAttributes extends BaseInputAttributes {
    }

    export class Input extends BaseInput {

        private scope: InputScope;
        private attrs: InputAttributes;

        public constructor($scope: BaseInputScope, $element: JQuery, $attrs: BaseInputAttributes) {
            this.scope = <InputScope>this.$scope;
            this.attrs = <InputAttributes> $attrs;

            super($scope, $element, $attrs, "sap.sbo.ui.controls.Input");
        }

        protected buildScope() {
            super.buildScope();
        }
    }
}