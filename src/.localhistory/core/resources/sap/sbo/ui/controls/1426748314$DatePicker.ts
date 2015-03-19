﻿/// <reference path="baseinput.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function DatePickerDirective(): Object {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            templateUrl: 'resources/sap/sbo/ui/controls/DatePicker.html',
            link: function ($scope, $element, $attrs, $controller) {
                console.log("DatePicker Control Linked!");
            }
        };
    }

    export interface DatePickerScope extends ControlScope {
        value: string;
    }

    export interface DatePickerAttributes extends ng.IAttributes {
        value: string;
    }

    export class DatePicker extends BaseInput {

        private scope: DatePickerScope;
        private attrs: DatePickerAttributes;

        public constructor($scope: BaseInputScope, $element: JQuery, $attrs: BaseInputAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ui.controls.DatePicker");

            this.scope = <DatePickerScope>this.$scope;
            this.attrs = <DatePickerAttributes> $attrs;

            this.buildScope();
        }

        protected buildScope() {
            this.scope.value = this.attrs.value;
        }
    }
}