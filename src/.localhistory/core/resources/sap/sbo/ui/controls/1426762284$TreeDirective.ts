module sap.sbo.ui.controls {
    export function TreeDirective() {
        return {
            restrict: "E",
            priority: 0,
            replace: true,
            scope: false,
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
        };
    }
}