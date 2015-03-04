module sap.sbo.ng4c.launchpad {
    export class Launchpad {
        public constructor($scope: any, $element: JQuery) {
            $scope.className = "sap-sbo-ng4c-launchpad-Launchpad";
            console.log("Launchpad init");
        }
    }
    angular.module('Application').controller('sap.sbo.ng4c.launchpad.Launchpad', Launchpad);
} 