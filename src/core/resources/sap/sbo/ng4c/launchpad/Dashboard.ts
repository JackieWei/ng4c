module sap.sbo.ng4c.launchpad {
    export class Dashboard {
        public constructor($scope: any, $element: JQuery) {
            $scope.template = 'resources/sap/sbo/ng4c/launchpad/Dashboard.html';
            $scope.className = "sap-sbo-ng4c-launchpad-Dashboard";
            console.log("Launchpad init");
        }
    }
    angular.module('Application').controller('sap.sbo.ng4c.launchpad.Dashboard', Dashboard);
} 