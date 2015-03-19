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

    export interface LabelScope extends BaseLabelScope {
    }

    export interface LabelAttributes extends BaseLabelAttributes {
    }

    export class Label extends BaseLabel {

        private scope: LabelScope;
        private attrs: LabelAttributes;

        public constructor($scope: BaseLabelScope, $element: JQuery, $attrs: BaseLabelAttributes) {
            this.scope = <LabelScope>this.$scope;
            this.attrs = <LabelAttributes> $attrs;

            super($scope, $element, $attrs, "sap.sbo.ui.controls.Label");
        }

        protected buildScope() {
            super.buildScope();
        }
    }
}