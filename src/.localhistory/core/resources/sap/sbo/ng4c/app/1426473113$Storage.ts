﻿/**
* Control all storage including local storage, memeory storage, backend storage - persistence
*/
module sap.sbo.ng4c.app {
    'use strict';

    export class Storage {
        private static VAL_TRUE: string = '1';
        private static VAL_FLASH: string = '0';

        public get(key: string, defaultValue?: string): string {
            return localStorage.getItem(key) || defaultValue;
        }
        public set(key: string, value: string): void {
            localStorage.setItem(key, value);
        }

        public getBoolean(key: string, defaultValue?: boolean): boolean {
            return this.get(key, defaultValue ? '1' : '0') === '1';
        }

        public setBoolean(key: string, value: boolean): boolean {
            return this.set(key, value ? '1' : '0');
        }
    }
}