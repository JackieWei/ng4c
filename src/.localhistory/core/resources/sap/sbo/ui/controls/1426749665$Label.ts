/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export interface LabelScope extends ControlScope {
        text: string;
    }

    export interface LabelAttributes extends ControlAttributes {
        text: string;
    }

    export class Label extends BaseControl {
        private scope: LabelScope;
        private parent: ControlScope;

        public constructor($scope: LabelScope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ui.controls.Label");
            this.scope = <LabelScope>this.$scope;
            this.parent = <ControlScope>this.scope.$parent;
            this.buildScope();
        }

        public buildScope(): void {
            this.scope.text = 
        }
    }
} 