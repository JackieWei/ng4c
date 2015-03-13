/// <reference path="appctrl.ts" />
/// <reference path="listctrl.ts" />
/// <reference path="eventroute.ts" />
/// <reference path="../launchpad/dashboard/dashboard.ts" />
/// <reference path="../header/end.ts" />
/// <reference path="../header/header.ts" />
/// <reference path="../header/center.ts" />
/// <reference path="detailctrl.ts" />
/// <reference path="../header/begin.ts" />
/// <reference path="../footer/footer.ts" />
/// <reference path="../launchpad/aside/aside.ts" />
/// <reference path="../launchpad/aside/lightaccess.ts" />
/// <reference path="../launchpad/aside/modules.ts" />
/// <reference path="../launchpad/aside/menu.ts" />
/// <reference path="../launchpad/launchpad.ts" />
/// <reference path="../launchpad/dashboard/tiles/kpi.ts" />
/// <reference path="../launchpad/aside/searchbar.ts" />
/// <reference path="../../../cloud/core/util/namingutil.ts" />
/// <reference path="../launchpad/aside/tab.ts" />
/// <reference path="../../ui/controls/treedirective.ts" />
/// <reference path="../../ui/controls/tree.ts" />
/// <reference path="../../ui/controls/treenode.ts" />
/// <reference path="storageservice.ts" />
/// <reference path="backendservice.ts" />
/// <reference path="routerservice.ts" />
/// <reference path="../launchpad/aside/mymenu.ts" />
module sap.sbo.ng4c.app {

    import NamingUtil = sap.cloud.core.util.NamingUtil;

    export interface IController {
        name: string;
        controller: Function;
    }

    export interface IControl {
        name: string;
        directive: ng.IDirectiveFactory;
    }

    export interface IService {
        name: string;
        service: Function;
    }

    export class Registry {

        private static _controllers: IController[] = [];
        private static _controls: IControl[] = [];
        private static _services: IService[] = [];

        public static get servies(): IService[] {
            if (Registry._services.length > 0) return Registry._services;
            var services: IService[] = Registry._services;

            /* Registry begins */

            services.push({ name: "storage", service: sap.sbo.ng4c.app.Storage });
            services.push({ name: "router", service: sap.sbo.ng4c.app.Router });
            services.push({ name: "data", service: sap.sbo.ng4c.app.Backend });
            
            /* Registry ends */

            return services;
        }

        public static get controllers(): IController[] {
            if (Registry._controllers.length > 0) return Registry._controllers;

            var collection: IController[] = Registry._controllers;
            /* Registry begins */

            //system level
            collection.push({ name: "sap.sbo.ng4c.app.AppCtrl", controller: sap.sbo.ng4c.app.AppCtrl });
            collection.push({ name: "sap.sbo.ng4c.app.ListCtrl", controller: sap.sbo.ng4c.app.ListCtrl });
            collection.push({ name: "sap.sbo.ng4c.app.DetailCtrl", controller: sap.sbo.ng4c.app.DetailCtrl });
            collection.push({ name: "sap.sbo.ng4c.app.EventRoute", controller: sap.sbo.ng4c.app.EventRoute });

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

            //controls
            collection.push({ name: "sap.sbo.ui.controls.Tree", controller: sap.sbo.ui.controls.Tree });
            collection.push({ name: "sap.sbo.ui.controls.TreeNode", controller: sap.sbo.ui.controls.TreeNode });

            /* Registry Ends */
            return collection;
        }

        public static get controls(): IControl[] {
            if (Registry._controls.length > 0) return Registry._controls;

            var collection: IControl[] = [];
            /* Registry begins. Onlt register directive, no controller here. Controller in in controllers*/

            collection.push({ name: "ng4cTree", directive: sap.sbo.ui.controls.TreeDirective });

            /* Registry Ends */
            return collection;
        }
    }
} 