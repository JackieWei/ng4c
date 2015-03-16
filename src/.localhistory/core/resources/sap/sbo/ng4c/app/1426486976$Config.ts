/// <reference path="config/uiconfig.ts" />
module sap.sbo.ng4c.app {

    import UIConfig = sap.sbo.ng4c.app.config.UIConfig;

    export class Config {
        public uiConfig: UIConfig;

        public constructor() {
            uiConfig = new UIConfig();
        }
    }
}