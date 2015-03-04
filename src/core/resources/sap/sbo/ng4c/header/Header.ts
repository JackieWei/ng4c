module sap.sbo.ng4c.header {
    export class Header {
        public constructor($scope: any, $element: JQuery) {
            $scope.template = 'resources/sap/sbo/ng4c/header/Header.html';
            $scope.className = "sap-sbo-ng4c-header-Header";
            $scope.activities = [
                { "name": "Wake up" },
                { "name": "Brush teeth" },
                { "name": "Shower" },
                { "name": "Have breakfast" },
                { "name": "Go to work" },
                { "name": "Write a Nettuts article" },
                { "name": "Go to the gym" },
                { "name": "Meet friends" },
                { "name": "Go to bed" }
            ];
            console.log("Header init");
        }
    }
    angular.module('Application').controller('sap.sbo.ng4c.header.Header', Header);
} 