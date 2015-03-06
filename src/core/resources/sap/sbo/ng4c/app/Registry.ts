/// <reference path="../launchpad/dashboard/dashboard.ts" />
/// <reference path="../header/end.ts" />
/// <reference path="../header/header.ts" />
/// <reference path="../header/center.ts" />
/// <reference path="../header/begin.ts" />
/// <reference path="../footer/footer.ts" />
/// <reference path="../launchpad/aside/aside.ts" />
/// <reference path="../launchpad/aside/lightaccess.ts" />
/// <reference path="../launchpad/aside/modules.ts" />
/// <reference path="../launchpad/aside/menu.ts" />
/// <reference path="../launchpad/aside/moudulestree.ts" />
/// <reference path="../launchpad/launchpad.ts" />
/// <reference path="../launchpad/dashboard/tiles/kpi.ts" />
/// <reference path="../launchpad/aside/searchbar.ts" />
/// <reference path="../launchpad/aside/tab.ts" />
/// <reference path="../launchpad/aside/mymenu.ts" />
module sap.sbo.ng4c.app {
    export interface IController {
        name: string;
        controller: Function;
    }
    export class Registry {
        public static get controllers(): IController[] {
            var collection: IController[] = [];
            /* Registry begins */

            //launchpad
            collection.push({ name: "sap.sbo.ng4c.launchpad.Launchpad", controller: sap.sbo.ng4c.launchpad.Launchpad });
            //----dashboard
            collection.push({ name: "sap.sbo.ng4c.launchpad.dashboard.Dashboard", controller: sap.sbo.ng4c.launchpad.dashboard.Dashboard });
            //--------tiles
            collection.push({ name: "sap.sbo.ng4c.launchpad.dashboard.tiles.Kpi", controller: sap.sbo.ng4c.launchpad.dashboard.tiles.Kpi });
            //----aside
            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.Aside", controller: sap.sbo.ng4c.launchpad.aside.Aside });
            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.LightAccess", controller: sap.sbo.ng4c.launchpad.aside.LightAccess });
            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.Menu", controller: sap.sbo.ng4c.launchpad.aside.Menu });
            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.Modules", controller: sap.sbo.ng4c.launchpad.aside.Modules });
            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.ModulesTree", controller: sap.sbo.ng4c.launchpad.aside.ModulesTree });
            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.MyMenu", controller: sap.sbo.ng4c.launchpad.aside.MyMenu });
            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.Tab", controller: sap.sbo.ng4c.launchpad.aside.Tab });
            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.SearchBar", controller: sap.sbo.ng4c.launchpad.aside.SearchBar });

            //header
            collection.push({ name: "sap.sbo.ng4c.header.Begin", controller: sap.sbo.ng4c.header.Begin });
            collection.push({ name: "sap.sbo.ng4c.header.End", controller: sap.sbo.ng4c.header.End });
            collection.push({ name: "sap.sbo.ng4c.header.Center", controller: sap.sbo.ng4c.header.Center });
            collection.push({ name: "sap.sbo.ng4c.header.Header", controller: sap.sbo.ng4c.header.Header });

            //footer
            collection.push({ name: "sap.sbo.ng4c.footer.Footer", controller: sap.sbo.ng4c.footer.Footer });

            

            /* Registry Ends */
            return collection;
        }
    }
} 