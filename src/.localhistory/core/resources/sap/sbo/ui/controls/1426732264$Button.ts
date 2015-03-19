/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function ButtonDirective() {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            templateUrl: 'resources/sap/sbo/ui/controls/Button.html',
            link: function ($scope, $element, $attrs, $controller) {
                console.log("link");
            }
        };
    } 

    export class Button extends BaseControl{

    }
}