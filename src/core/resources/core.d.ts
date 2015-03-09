/// <reference path="../../thirdparty/resources/thirdparty.d/tsd.d.ts" />
declare module sap.cloud.logging {
    interface Logger {
        info(msg: string): void;
    }
}
declare module sap.cloud.logging {
    class SimpleLogger implements Logger {
        private name;
        constructor(name: string);
        info(msg: string): void;
    }
}
declare module sap.cloud.logging {
    class LogManager {
        static getLogger(name: Function): Logger;
    }
}
declare module sap.cloud.core {
    class TemplateEngine {
        private static log;
        render(): void;
        dummy(): number;
        process<T>(num: T): T;
    }
}
declare module sap.cloud.core.util {
    class NamingUtil {
        private static DOT_REG;
        private static SLASH;
        private static HYPHEN;
        static toCssName(packageName: string): string;
        static toPath(packageName: string): string;
        static toDirective(packageName: string): string;
    }
}
declare module sap.sbo.ng4c.app {
    interface AppCtrlScope extends ng.IScope {
        greeting: string;
        changeName(name: any): void;
    }
}
declare module sap.sbo.ng4c.app {
    class AppCtrl {
        private $scope;
        private storage;
        static $inject: string[];
        constructor($scope: AppCtrlScope, storage: AppStorage);
    }
}
declare module sap.sbo.ng4c.app {
    class AppStorage {
        get(key: string): string;
        set(key: string, value: any): void;
    }
}
declare module sap.sbo.ng4c {
    interface Scope extends ng.IScope {
        template: string;
        className: string;
        width: number;
        height: number;
        left: number;
        top: number;
    }
}
declare module sap.sbo.ng4c {
    class BaseController {
        private static DOT_REG;
        private static HYPHEN;
        private static SLASH;
        private static DOT;
        protected $scope: Scope;
        protected $element: JQuery;
        protected $package: string;
        protected klass: string;
        protected module: string;
        constructor($scope: Scope, $element: JQuery, $package: string);
        protected registerTemplate(templatePackage: string): void;
        protected registerCssName(packageName: any): void;
    }
}
declare module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface IAsideScope extends Scope {
    }
    class AsideProps {
        static HIDE_WIDTH: number;
        static SHOW_WIDTH: number;
    }
    class Aside extends BaseController {
        private scope;
        constructor($scope: IAsideScope, $element: JQuery);
        private onShowOrHideMenuBroadcast(event, showOrHide);
    }
}
declare module sap.sbo.ng4c.launchpad.dashboard {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface IDashboardScope extends Scope {
    }
    class Dashboard extends BaseController {
        private scope;
        constructor($scope: Scope, $element: JQuery);
        private onShowOrHideMenuBroadcast(event, showOrHide);
    }
}
declare module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;
    class End extends BaseController {
        constructor($scope: Scope, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;
    class Header extends BaseController {
        constructor($scope: Scope, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;
    class Center extends BaseController {
        constructor($scope: Scope, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface BeginScope extends Scope {
        showOrHideMenu: Function;
        showOrHideLogo: boolean;
    }
    class Begin extends BaseController {
        private scope;
        constructor($scope: Scope, $element: JQuery);
        private showOrHideMenu(name);
    }
}
declare module sap.sbo.ng4c.footer {
    import BaseController = sap.sbo.ng4c.BaseController;
    class Footer extends BaseController {
        constructor($scope: any, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface LightAccessProps extends Scope {
    }
    class LightAccess extends BaseController {
        private scope;
        constructor($scope: LightAccessProps, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface ModulesProps extends Scope {
    }
    class Modules extends BaseController {
        private scope;
        constructor($scope: Scope, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface MenuScope extends Scope {
    }
    class Menu extends BaseController {
        private scope;
        constructor($scope: Scope, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface ModulesTreeProps extends Scope {
        delete: Function;
        add: Function;
        tree: Object[];
    }
    class ModulesTree extends BaseController {
        private scope;
        private myMeny;
        private modules;
        constructor($scope: Scope, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.launchpad {
    import BaseController = sap.sbo.ng4c.BaseController;
    class Launchpad extends BaseController {
        constructor($scope: Scope, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.launchpad.dashboard.tiles {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface KpiProps extends Scope {
    }
    class Kpi extends BaseController {
        private scope;
        constructor($scope: Scope, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface SearchBarProps extends Scope {
    }
    class SearchBar extends BaseController {
        private scope;
        constructor($scope: Scope, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface TabProps extends Scope {
    }
    class Tab extends BaseController {
        private scope;
        constructor($scope: Scope, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface MyMenuProps extends Scope {
    }
    class MyMenu extends BaseController {
        private scope;
        constructor($scope: Scope, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.app {
    interface IController {
        name: string;
        controller: Function;
    }
    interface IControl {
        controllerName: string;
        controller: Function;
        directiveName: string;
        directive: Function;
    }
    class Registry {
        private static _controllers;
        private static _controls;
        static controllers: IController[];
        private static makeControl(packageStr, controller, directive);
        static controls: IControl[];
    }
}
declare module sap.sbo.ng4c.app {
    class Application {
        static main(): void;
    }
}
declare module sap.sbo.ui.controls {
    class TreeDirective {
    }
    class Tree {
    }
}
