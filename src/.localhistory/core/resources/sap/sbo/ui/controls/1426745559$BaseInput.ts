﻿/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export interface BaseInputScope extends ControlScope {
        value: string;
    }

    export interface BaseInputAttributes extends ng.IAttributes {
        value: string;
    }

    export class BaseInput extends BaseControl {

        private scope: BaseInputScope;
        private attrs: BaseInputAttributes;

        public constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes, packageStr:string) {
            super($scope, $element, $attrs, packageStr);

            this.scope = <BaseInputScope>this.$scope;
            this.attrs = <BaseInputAttributes> $attrs;

            this.buildScope();
        }

        protected buildScope() {
            this.scope.value = this.attrs.value;
        }
    }
}