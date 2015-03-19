/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export interface BaseInputScope extends ControlScope {
        value: string;
    }

    export interface BaseInputAttributes extends ng.IAttributes {
        value: string;
    }

    export class BaseInput extends BaseControl {


        public constructor($scope: BaseInputScope, $element: JQuery, $attrs: BaseInputAttributes, packageStr:string) {
            super($scope, $element, $attrs, packageStr);

            this.buildScope();
        }

        protected buildScope() {
            (<BaseInputScope>this.$scope).value = (<BaseInputAttributes> $attrs).value;
        }
    }
}