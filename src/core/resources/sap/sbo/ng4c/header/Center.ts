module sap.sbo.ng4c.header {
    export class Center {
        public constructor($scope: any, $element: JQuery) {
            $scope.className = "sap-sbo-ng4c-header-Center";
            console.log("Header Center init");
        }
    }
    angular.module('Application').controller('sap.sbo.ng4c.header.Center', Center);
}