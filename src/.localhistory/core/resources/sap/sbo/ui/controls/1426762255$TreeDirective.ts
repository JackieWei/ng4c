module sap.sbo.ui.controls {
    export function TreeDirective() {
        return {
            restrict: "E",
            priority: 0,
            replace: true,
            scope: false,
            transclude: true,
            templateUrl: 'resources/sap/sbo/ui/controls/Tree.html',
            compile: function (tElement, tAttrs, transclude) {
                return {
                    pre: function (scope, iElement, iAttrs, controller) {
                    },
                    post: function (scope, iElement, iAttrs, controller) {
                    }

                }
            },
            link: function ($scope, $element, $attrs, $controller): void {
                console.log("Tree Control Linked!");
            }
        };
    }
}