module sap.sbo.ng4c.header {

    export interface Activity {
        name: string;
    }

    export interface HeaderScope {
        template: string;
        className: string;
        activities: Activity[];
    }

    export class Header {

        public constructor($scope: HeaderScope, $element: JQuery) {

            $scope.template = 'resources/sap/sbo/ng4c/header/Header.html';
            $scope.className = "sap-sbo-ng4c-header-Header";
            $scope.activities = this.getActivities();
            console.log("Header init");
        }

        private getActivities(): Activity[] {
            return [
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
        }

    }
    angular.module('Application').controller('sap.sbo.ng4c.header.Header', Header);
} 