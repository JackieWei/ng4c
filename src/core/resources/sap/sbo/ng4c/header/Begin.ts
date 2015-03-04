module sap.sbo.ng4c.header {
    export class Begin {
        public constructor($scope: any, $element: JQuery) {
            $scope.className = "sap-sbo-ng4c-header-Begin";
            console.log("Header Begin init");
        }
    }
    angular.module('Application').controller('sap.sbo.ng4c.header.Begin', Begin)
}