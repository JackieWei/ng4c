/// <reference path="baseinput.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function SelectDirective(): Object {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            templateUrl: 'resources/sap/sbo/ui/controls/Select.html',
            link: function ($scope, $element, $attrs, $controller) {
                console.log("Select Control Linked!");
            }
        };
    }

    export interface SelectScope extends BaseInputScope {
    }

    export interface SelectAttributes extends BaseInputAttributes {
    }

    export class Select extends BaseInput {

        private scope: SelectScope;
        private attrs: SelectAttributes;

        public constructor($scope: BaseInputScope, $element: JQuery, $attrs: BaseInputAttributes) {
            this.scope = <SelectScope>this.$scope;
            this.attrs = <SelectAttributes> $attrs;

            super($scope, $element, $attrs, "sap.sbo.ui.controls.Select");
        }

        protected buildScope() {
            super.buildScope();
        }
    }
}