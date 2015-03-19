/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function BaseInputDirective(): Object {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            templateUrl: 'resources/sap/sbo/ui/controls/BaseInput.html',
            link: function ($scope, $element, $attrs, $controller) {
                console.log("BaseInput Control Linked!");
            }
        };
    }

    export interface BaseInputScope extends ControlScope {
        value: string;
    }

    export interface BaseInputAttributes extends ng.IAttributes {
        value: string;
    }

    export class BaseInput extends BaseControl {

        private scope: BaseInputScope;
        private attrs: BaseInputAttributes;

        public constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes, packageStr:String) {
            super($scope, $element, $attrs, "sap.sbo.ui.controls.BaseInput");

            this.scope = <BaseInputScope>this.$scope;
            this.attrs = <BaseInputAttributes> $attrs;

            this.buildScope();
        }

        protected buildScope() {
            this.scope.value = this.attrs.value;
        }
    }
}