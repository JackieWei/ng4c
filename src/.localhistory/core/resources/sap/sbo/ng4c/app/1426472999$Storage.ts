/**
* Control all storage including local storage, memeory storage, backend storage - persistence
*/
module sap.sbo.ng4c.app {
    'use strict';

    export class Storage {
        public get(key: string, defaultValue?:string): string {
            return localStorage.getItem(key) || defaultValue;
        }
        public set(key: string, value: string): void {
            localStorage.setItem(key, value);
        }

        public getBoolean(key: string, defaultValue?: boolean): boolean {
            return this.get(key) === 1;
        }

        public setBoolean(key: string, defaultValue?: boolean): boolean {
            return (localStorage.getItem(key) || defaultValue) === 1;
        }
    }
}