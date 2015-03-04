module sap.sbo.ng4c.app {
    'use strict';
    export function changeName(): ng.IDirective {
        return {
            restrict: 'A',
            scope: false, // use controller scope
            link: ($scope: IAppCtrlScope, element: JQuery, attributes:Object) => {
                element.on('mouseenter', function () {
                    element.addClass('animate');
                });
                element.on('mouseleave', function () {
                    element.removeClass('animate');
                });
                element.on('click', function () {
                    var name = JSON.parse(JSON.stringify(prompt('Please enter your name:'))); // encode input to avoid escaping character
                    $scope.changeName(name);
                    $scope.$digest();
                });
            }
        }
    };
}