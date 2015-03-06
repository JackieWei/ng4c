/// <reference path="appctrlscope.ts" />
module sap.sbo.ng4c.app {
    'use strict';

    export class AppCtrl{
        public static $inject = [
            '$scope',
            'storage'
        ];
        public constructor(private $scope: AppCtrlScope, private storage: AppStorage) {
            $scope.$on("showOrHideMenu", function (event:ng.IAngularEvent, showOrHide:boolean):void {
                $scope.$broadcast("showOrHideMenuBroadcast", showOrHide);
            });
            console.log("Application Controller init.");
        }
    }
}