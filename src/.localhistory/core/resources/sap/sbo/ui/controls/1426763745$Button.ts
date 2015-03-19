/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function ButtonDirective(): Object {
        return BaseControl.makeDirective({
            templateUrl: 'resources/sap/sbo/ui/controls/Button.html'
        });
    }

    export interface ButtonScope extends ControlScope {
        text: string;
        icon: string;
        style: string;
        tabindex: string;//should be int, -1 or >=0
    }

    export interface ButtonAttributes extends ng.IAttributes {
        text: string;
        icon: string;
        type: string;
        press: Function;
        tabindex: boolean;
    }

    export class Button extends BaseControl {

        private scope: ButtonScope;
        private attrs: ButtonAttributes;

        public constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ui.controls.Button");

            this.scope = <ButtonScope>this.$scope;
            this.attrs = <ButtonAttributes> $attrs;

            this.buildScope();
        }

        private buildScope() {
            this.scope.tabindex = this.attrs.tabindex ? '-1' : '';
            if (this.attrs.icon) {
                this.scope.text = this.attrs.ngIcon;
                this.scope.style = "font-family: 'SAP- icons'";
                this.scope.icon = '';
            } else {
                this.scope.text = '';
                this.scope.style = '';
                this.scope.icon = 'data-sap-ui-icon-content="' + this.getIconContent(this.attrs.icon) + '"';
            }
        }

        private getIconContent(icon: string): string {
            return '';
        }
    }
}