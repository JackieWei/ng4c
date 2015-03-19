/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function TextAreaDirective(): Object {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            templateUrl: 'resources/sap/sbo/ui/controls/TextArea.html',
            link: function ($scope, $element, $attrs, $controller) {
                console.log("TextArea Control Linked!");
            }
        };
    }

    export interface TextAreaScope extends BaseInputScope {
    }

    export interface TextAreaAttributes extends BaseInputAttributes {
    }

    export class TextArea extends BaseInput {

        private scope: TextAreaScope;
        private attrs: TextAreaAttributes;

        public constructor($scope: BaseInputScope, $element: JQuery, $attrs: BaseInputAttributes) {
            this.scope = <TextAreaScope>this.$scope;
            this.attrs = <TextAreaAttributes> $attrs;

            super($scope, $element, $attrs, "sap.sbo.ui.controls.TextArea");
        }

        protected buildScope() {
            super.buildScope();
        }
    }
}