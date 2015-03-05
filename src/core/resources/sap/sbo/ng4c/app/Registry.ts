/// <reference path="../launchpad/dashboard.ts" />
/// <reference path="../header/end.ts" />
/// <reference path="../header/header.ts" />
/// <reference path="../header/center.ts" />
/// <reference path="../header/begin.ts" />
/// <reference path="../footer/footer.ts" />
/// <reference path="../aside/aside.ts" />
/// <reference path="../launchpad/launchpad.ts" />
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
            collection.push({ name: "sap.sbo.ng4c.launchpad.Dashboard", controller: sap.sbo.ng4c.launchpad.Dashboard });
            collection.push({ name: "sap.sbo.ng4c.launchpad.Launchpad", controller: sap.sbo.ng4c.launchpad.Launchpad });

            //header
            collection.push({ name: "sap.sbo.ng4c.header.Begin", controller: sap.sbo.ng4c.header.Begin });
            collection.push({ name: "sap.sbo.ng4c.header.End", controller: sap.sbo.ng4c.header.End });
            collection.push({ name: "sap.sbo.ng4c.header.Center", controller: sap.sbo.ng4c.header.Center });
            collection.push({ name: "sap.sbo.ng4c.header.Header", controller: sap.sbo.ng4c.header.Header });

            //footer
            collection.push({ name: "sap.sbo.ng4c.footer.Footer", controller: sap.sbo.ng4c.footer.Footer });

            //Aside
            collection.push({ name: "sap.sbo.ng4c.aside.Aside", controller: sap.sbo.ng4c.aside.Aside });

            /* Registry Ends */
            return collection;
        }
    }
} 