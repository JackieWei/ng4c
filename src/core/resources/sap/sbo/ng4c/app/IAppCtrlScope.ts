module sap.sbo.ng4c.app {
    'use strict';

    export interface IAppCtrlScope extends ng.IScope {
        greeting: string;
        changeName(name): void;
    }
}