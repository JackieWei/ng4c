module sap.sbo.ng4c.header {
    export class End {
        public constructor($scope: any, $element: JQuery) {
            $scope.className = "sap-sbo-ng4c-header-End";
            console.log("Header End init");
        }
    }
    angular.module('Application').controller('sap.sbo.ng4c.header.End', End)
}