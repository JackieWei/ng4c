/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export interface LabelScope extends ControlScope {
        
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
            
        }

        public logoClickHandler(e): void {
            if (this.scope.nodes.length <= 0) {
                var parent: any = <any>this.scope.$parent;
                while (parent && parent.data.level > 0) {
                    parent = parent.$parent;
                }
                if (parent && parent.$parent && $.isFunction(parent.$parent.menuItemClick)) {
                    parent.$parent.menuItemClick(this.scope.data);
                }
            } else {
                this.scope.expand = !this.scope.expand;
            }
        }
    }
} 