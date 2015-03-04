/// <reference path="../../../../../thirdparty/resources/thirdparty.d/tsd.d.ts" />
module sap.sbo.ng4c {
    export class BaseElement {
        protected _scope: Object;
        protected _element: JQuery;
        public constructor($scope: Object, $element: JQuery) {
            this._scope = $scope;
            this._element = $element;
        }
    }
}