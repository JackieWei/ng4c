module sap.sbo.ng4c.app {

    export interface DetailScope extends ng.IScope {

    }

    export class DetailCtrl {

        private scope: DetailScope;

        public constructor($scope: ng.IScope, $route: ng.route.IRouteService) {
            console.log($route.current.params.bo_abbr + "-" + $route.current.params.bo_idx);

            this.scope = $scope;

        }
    }
} 