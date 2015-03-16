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
        private static DOT;
        private static HYPHEN;
        private static EMPTY;
        static toCssName(packageName: string): string;
        static toPath(packageName: string): string;
        static toDirective(packageName: string): string;
        static uppercaseFirstChar(str: string): string;
    }
}
declare module sap.sbo.ng4c.app {
    class AppCtrl {
        constructor($scope: EventRouteScope);
    }
}
declare module sap.sbo.ng4c.app.config {
    class UIConfig {
        menuFullWidth: number;
        menuLightWidth: number;
        tileBasicWidth: number;
        tileBasicHeight: number;
    }
}
declare module sap.sbo.ng4c.app {
    import UIConfig = sap.sbo.ng4c.app.config.UIConfig;
    class Config {
        ui: UIConfig;
        constructor();
    }
}
declare module sap.sbo.ng4c.app {
    interface ListScope extends ng.IScope {
        action: string;
    }
    class ListCtrl {
        private scope;
        constructor($scope: ng.IScope, $route: ng.route.IRouteService);
    }
}
declare module sap.sbo.ng4c.app {
    interface EventRouteScope extends ng.IScope {
        greeting: string;
        changeName(name: any): void;
    }
    class EventRoute {
        constructor($scope: EventRouteScope, $element: JQuery);
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
        data: any;
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
        protected $attrs: ng.IAttributes;
        protected $package: string;
        protected klass: string;
        protected module: string;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, $package: string);
        protected registerTemplate(templatePackage: string): void;
        protected registerCssName(packageName: any): void;
    }
}
declare module sap.sbo.ng4c.launchpad.dashboard {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Config = sap.sbo.ng4c.app.Config;
    interface TileScope extends Scope {
        rawData: TileData;
        sizeW: number;
        sizeH: number;
        innerTemplate: string;
    }
    class Tile extends BaseController {
        private static SPLIT;
        private scope;
        private config;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, config: Config);
    }
}
declare module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;
    class End extends BaseController {
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes);
    }
}
declare module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;
    class Header extends BaseController {
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes);
    }
}
declare module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;
    class Center extends BaseController {
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes);
    }
}
declare module sap.sbo.ng4c.app {
    interface DetailScope extends ng.IScope {
        action: string;
        idx: string;
    }
    class DetailCtrl {
        private scope;
        constructor($scope: ng.IScope, $route: ng.route.IRouteService);
    }
}
declare module sap.sbo.ng4c.app {
    class Storage {
        private static VAL_TRUE;
        private static VAL_FLASH;
        get(key: string, defaultValue?: string): string;
        set(key: string, value: string): void;
        getBoolean(key: string, defaultValue?: boolean): boolean;
        setBoolean(key: string, value: boolean): void;
    }
}
declare module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Storage = sap.sbo.ng4c.app.Storage;
    interface BeginScope extends Scope {
        showOrHideMenu: Function;
        showOrHideLogo: boolean;
    }
    class Begin extends BaseController {
        private scope;
        private storage;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, storage: Storage);
        private showOrHideMenu(name);
    }
}
declare module sap.sbo.ng4c.footer {
    import BaseController = sap.sbo.ng4c.BaseController;
    class Footer extends BaseController {
        constructor($scope: any, $element: JQuery, $attrs: ng.IAttributes);
    }
}
declare module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Storage = sap.sbo.ng4c.app.Storage;
    interface IAsideScope extends Scope {
        liteMode: boolean;
    }
    class AsideProps {
        static HIDE_WIDTH: number;
        static SHOW_WIDTH: number;
    }
    class Aside extends BaseController {
        private scope;
        private storage;
        constructor($scope: IAsideScope, $element: JQuery, $attrs: ng.IAttributes, storage: Storage);
        private onShowOrHideMenuBroadcast(event, showOrHide);
    }
}
declare module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface LightAccessProps extends Scope {
    }
    class LightAccess extends BaseController {
        private scope;
        constructor($scope: LightAccessProps, $element: JQuery, $attrs: ng.IAttributes);
    }
}
declare module sap.sbo.ng4c.app {
    class Router {
        private static SLASH;
        private static EMPTY;
        private static DOT;
        private static LIST;
        private static DETAIL;
        constructor();
        hashTo(fragments: string[]): void;
        hashToList(boAbbr: string): void;
        hashToDetail(boAbbr: string, boIdx: string): void;
    }
}
declare module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Router = sap.sbo.ng4c.app.Router;
    interface ModulesProps extends Scope {
        menuItemClick: Function;
    }
    class Modules extends BaseController {
        private scope;
        private router;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, router: Router);
        menuItemClick(menuData: any): void;
    }
}
declare module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface MenuScope extends Scope {
    }
    class Menu extends BaseController {
        private scope;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes);
    }
}
declare module sap.sbo.ng4c.launchpad {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Config = sap.sbo.ng4c.app.Config;
    import Storage = sap.sbo.ng4c.app.Storage;
    interface LaunchpadScope extends Scope {
        asideWidth: number;
    }
    class Launchpad extends BaseController {
        private scope;
        private config;
        private storage;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, config: Config, storage: Storage);
        onShowOrHideMenuBroadcast(event: ng.IAngularEvent, showOrHide: boolean): void;
    }
}
declare module sap.sbo.ng4c.launchpad.dashboard.tiles {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface KpiProps extends Scope {
        rawData: TileData;
    }
    class Kpi extends BaseController {
        private scope;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes);
    }
}
declare module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface SearchBarProps extends Scope {
    }
    class SearchBar extends BaseController {
        private scope;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes);
    }
}
declare module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface TabProps extends Scope {
        currentIndex: number;
        showTab: Function;
    }
    class Tab extends BaseController {
        private scope;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes);
        showTab(index: number): void;
    }
}
declare module sap.sbo.ui.controls {
    function TreeDirective(): {
        restrict: string;
        replace: boolean;
        transclude: boolean;
        templateUrl: string;
        link: ($scope: any, $element: any, $attrs: any, $controller: any) => void;
    };
}
declare module sap.sbo.ui {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Scope = sap.sbo.ng4c.Scope;
    interface ControlScope extends Scope {
    }
    class BaseControl extends BaseController {
        constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes, $package: string);
    }
}
declare module sap.sbo.ui.controls {
    import BaseControl = sap.sbo.ui.BaseControl;
    interface TreeScope extends ControlScope {
        nodes: any[];
    }
    interface TreeAttributes extends ng.IAttributes {
        ngMenuurl: string;
        ngLeafclick: Function;
    }
    class Tree extends BaseControl {
        private scope;
        private attrs;
        constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes);
        private buildScope();
        private onMenuDataReady(data);
        private buildNode(data, parent?);
    }
}
declare module sap.sbo.ng4c.launchpad.dashboard {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface DashboardScope extends Scope {
        tiles: TileData[];
    }
    interface PageData {
        PageId: string;
        Name: string;
        Tiles: TileData[];
    }
    interface TileData {
        TileId: string;
        Index: string;
        Size: string;
        Type: string;
        WidgetEntry: string;
    }
    class Dashboard extends BaseController {
        private scope;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes);
        private buildScope();
        private onTilesLoaded(data);
    }
}
declare module sap.sbo.ui.controls {
    import BaseControl = sap.sbo.ui.BaseControl;
    interface TreeNodeScope extends ControlScope {
        name: string;
        isFolder: boolean;
        expand: boolean;
        nodes: any[];
        logoClickHandler: Function;
    }
    class TreeNode extends BaseControl {
        private scope;
        private parent;
        constructor($scope: TreeNodeScope, $element: JQuery, $attrs: ng.IAttributes);
        buildScope(): void;
        logoClickHandler(e: any): void;
    }
}
declare module sap.sbo.ng4c.app {
    class BodyCtrl {
        constructor($scope: ng.IScope);
    }
}
declare module sap.sbo.ng4c.app {
    class Backend {
    }
}
declare module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface MyMenuProps extends Scope {
    }
    class MyMenu extends BaseController {
        private scope;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes);
    }
}
declare module sap.sbo.ng4c.app {
    interface IController {
        name: string;
        controller: Function;
    }
    interface IControl {
        name: string;
        directive: ng.IDirectiveFactory;
    }
    interface IService {
        name: string;
        service: Function;
    }
    interface IConstant {
        name: string;
        constant: Object;
    }
    class Registry {
        private static _controllers;
        private static _controls;
        private static _services;
        private static _constants;
        static constants: IConstant[];
        static servies: IService[];
        static controllers: IController[];
        static controls: IControl[];
    }
}
declare module sap.sbo.ng4c.app {
    class Application {
        static main(): void;
    }
}
