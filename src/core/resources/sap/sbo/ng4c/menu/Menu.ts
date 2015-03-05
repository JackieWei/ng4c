module sap.sbo.ng4c.menu {
    export class Menu {
        public constructor($scope: any, $element: JQuery) {
            $scope.template = "resources/sap/sbo/ng4c/menu/Menu.html";
            $scope.className = "sap-sbo-ng4c-menu-Menu";
            console.log("Menu init");
        }
    }
    angular.module('Application').controller('sap.sbo.ng4c.menu.Menu', Menu);
}