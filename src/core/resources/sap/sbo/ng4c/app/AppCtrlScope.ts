module sap.sbo.ng4c.app {
    'use strict';

    export interface AppCtrlScope extends ng.IScope {
        greeting: string;
        changeName(name): void;
    }
}