module sap.sbo.ng4c.app {
    export class ListCtrl {

        private scope: DetailScope;

        public constructor($scope: ng.IScope, $route: ng.route.IRouteService) {
            console.log($route.current.params.bo_abbr);

            this.scope = <DetailScope>$scope;

            this.scope.action = $route.current.params.bo_abbr;
            this.scope.idx = $route.current.params.bo_idx;
        }
    }
}  