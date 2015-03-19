﻿module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function TreeDirective() {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            templateUrl: 'resources/sap/sbo/ui/controls/Tree.html',
            link: function ($scope, $element, $attrs, $controller) {
                console.log("Tree Control Linked!");
            }
        };
    }
}