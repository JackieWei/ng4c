module sap.sbo.ng4c.footer {
    export class Footer {
        public constructor($scope: any, $element: JQuery) {
            $scope.template = 'resources/sap/sbo/ng4c/footer/Footer.html';
            $scope.className = "sap-sbo-ng4c-footer-Footer";
            console.log("Footer init");
        }
    }
    angular.module('Application').controller('sap.sbo.ng4c.footer.Footer', Footer);
} 