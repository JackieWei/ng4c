module sap.sbo.ng4c.app {

    export interface DetailScope extends ng.IScope {

    }

    export class DetailCtrl {

        public constructor($scope: DetailScope, $route: ng.route.IRouteService) {
            console.log($route.current.params.bo_abbr + "-" + $route.current.params.bo_idx);

        }
    }
} 