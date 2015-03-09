/// <reference path="appstorage.ts" />
/// <reference path="registry.ts" />
/// <reference path="appctrl.ts" />
module sap.sbo.ng4c.app {
    'use strict';

    export class Application {

        public static main(): void {
            var app = angular.module('Application', ['ngRoute'])
                .service('storage', AppStorage)
                .controller('AppCtrl', AppCtrl)
                .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/', {
                    templateUrl: 'resources/sap/sbo/ng4c/app/Application.html',
                    controller: 'AppCtrl'
                    });
                $routeProvider.otherwise({
                    redirectTo: '/'
                });
            }]);

            var modules: IController[] = Registry.controllers;
            var controls

            modules.forEach((e) => {
                app.controller(e.name, e.controller);
            });

            modules.forEach((e) => {
                app.controller(e.name, e.controller);
            });
        }
    }
    Application.main();
}