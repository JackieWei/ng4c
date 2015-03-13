/**
* Control all storage including local storage, memeory storage, backend storage - persistence
*/
module sap.sbo.ng4c.app {
    'use strict';

    export class Storage {
        public get(key: string, defaultValue?:string): string {
            return JSON.parse(localStorage.getItem(key) || '""');
        }
        public set(key: string, value: any): void {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }
}