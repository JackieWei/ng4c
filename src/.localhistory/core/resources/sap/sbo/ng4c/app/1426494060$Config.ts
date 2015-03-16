/// <reference path="config/uiconfig.ts" />
module sap.sbo.ng4c.app {

    import UIConfig = sap.sbo.ng4c.app.config.UIConfig;

    export interface Config {
        public static ui: UIConfig = new UIConfig();
    }
}