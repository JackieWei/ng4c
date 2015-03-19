/// <reference path="../ng4c/scope.ts" />
/// <reference path="../ng4c/basecontroller.ts" />
module sap.sbo.ui {

    import BaseController = sap.sbo.ng4c.BaseController;
    import Scope = sap.sbo.ng4c.Scope;

    export DirectiveConfig {
        restrict: string,
        priority: 0,
        replace: true,
        scope: true,
        transclude: true,
        templateUrl: 'resources/sap/sbo/ui/controls/Tree.html',
        compile: function ($element, $attrs, $transclude) {
            return {
                pre: function ($scope, $element, $attrs, $controller) {
                },
                post: function ($scope, $element, $attrs, $controller) {
                }

            }
        },
        link: function ($scope, $element, $attrs, $controller): void {
            console.log("Tree Control Linked!");
        }
    }

    export interface ControlScope extends Scope{
        value: string;
    }

    export interface ControlAttributes extends ng.IAttributes {
        value: string;
    }

    export class BaseControl extends BaseController{
        public constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes, $package: string) {
            super($scope, $element, $attrs, $package);
        }
    }
}