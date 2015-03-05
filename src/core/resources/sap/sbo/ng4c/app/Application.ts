/// <reference path="changename.ts" />
/// <reference path="appstorage.ts" />
/// <reference path="appctrl.ts" />
module sap.sbo.ng4c.app {
    'use strict';

    export interface AngularModule {
        name: string;
        mod: Function;
    }

    //import Header = sap.sbo.ng4c.header.Header;
    export class Application {
        //private static modules: AngularModule[] = [];
        //private static app: ng.IModule;

        public static main(): void {
            var app = angular.module('Application', ['ngRoute'])
                .service('storage', AppStorage)
                .controller('controller', AppCtrl)
                .directive('changeName', changeName)
                .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/', {
                    templateUrl: 'resources/sap/sbo/ng4c/app/Application.html',
                    controller: 'controller'
                })
                    .otherwise({
                    redirectTo: '/'
                });
                }]);

            var modules = [];

            modules.forEach((e) => {
                app.controller(e.name, e.mod);
            });
        }

        //public static registerModule(e: AngularModule): void {
        //    //Application.modules.push(mod);
        //    Application.app.controller(e.name, e.mod);
        //}
    }
    Application.main();
}