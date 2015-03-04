/// <reference path="iappctrlscope.ts" />
module sap.sbo.ng4c.app {
    'use strict';

    export class AppCtrl {
        public static $inject = [
            '$scope',
            'storage'
        ];
        public constructor(private $scope: IAppCtrlScope, private storage: AppStorage) {
            $scope.greeting = storage.get('name') !== '' ? 'Hello ' + storage.get('name') + ' !' : 'Hello you !';
            $scope.changeName = (name) => {
                storage.set('name', name);
                $scope.greeting = 'Hello ' + name + ' !';
            }
            console.log("Application Controller init.");
        }
    }
}