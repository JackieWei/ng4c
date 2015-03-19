 /// <reference path="baseinput.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function LabelDirective(): Object {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            templateUrl: 'resources/sap/sbo/ui/controls/Label.html',
            link: function ($scope, $element, $attrs, $controller) {
                console.log("Label Control Linked!");
            }
        };
    }

    export interface LabelScope extends BaseInputScope {
    }

    export interface LabelAttributes extends BaseInputAttributes {
    }

    export class Label extends BaseInput {

        private scope: LabelScope;
        private attrs: LabelAttributes;

        public constructor($scope: BaseInput, $element: JQuery, $attrs: BaseInputAttributes) {
            this.scope = <LabelScope>this.$scope;
            this.attrs = <LabelAttributes> $attrs;

            super($scope, $element, $attrs, "sap.sbo.ui.controls.Label");
        }

        protected buildScope() {
            super.buildScope();
        }
    }
}