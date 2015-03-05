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
declare module sap.sbo.ng4c.app {
    interface IAppCtrlScope extends ng.IScope {
        greeting: string;
        changeName(name: any): void;
    }
}
declare module sap.sbo.ng4c.app {
    class AppCtrl {
        private $scope;
        private storage;
        static $inject: string[];
        constructor($scope: IAppCtrlScope, storage: AppStorage);
    }
}
declare module sap.sbo.ng4c.app {
    class AppStorage {
        get(key: string): string;
        set(key: string, value: any): void;
    }
}
declare module sap.sbo.ng4c {
    interface IScope extends ng.IScope {
        template: string;
        className: string;
    }
}
declare module sap.sbo.ng4c {
    class BaseController {
        private static DOT_REG;
        private static HYPHEN;
        private static SLASH;
        private static DOT;
        protected $scope: IScope;
        protected $element: JQuery;
        protected $package: string;
        protected klass: string;
        protected module: string;
        constructor($scope: IScope, $element: JQuery, $package: string);
        private translateFromPackageToSlashPath(packageStr);
        private translateFromPackageToCssClassName(packageStr);
        protected registerTemplate(templatePackage: string): void;
        protected registerCssName(cssName: any): void;
    }
}
declare module sap.sbo.ng4c.launchpad {
    import BaseController = sap.sbo.ng4c.BaseController;
    class Dashboard extends BaseController {
        constructor($scope: IScope, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;
    class End extends BaseController {
        constructor($scope: IScope, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;
    class Header extends BaseController {
        constructor($scope: IScope, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;
    class Center extends BaseController {
        constructor($scope: IScope, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface BeginScope extends IScope {
        showOrHideMenu: Function;
    }
    class Begin extends BaseController {
        private showOrHide;
        constructor($scope: BeginScope, $element: JQuery);
        private showOrHideMenu(name);
    }
}
declare module sap.sbo.ng4c.footer {
    import BaseController = sap.sbo.ng4c.BaseController;
    class Footer extends BaseController {
        constructor($scope: any, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    class Aside extends BaseController {
        constructor($scope: IScope, $element: JQuery);
        private onShowOrHideMenuBroadcast(event, showOrHide);
    }
}
declare module sap.sbo.ng4c.launchpad {
    import BaseController = sap.sbo.ng4c.BaseController;
    class Launchpad extends BaseController {
        constructor($scope: IScope, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.app {
    interface IController {
        name: string;
        controller: Function;
    }
    class Registry {
        static controllers: IController[];
    }
}
declare module sap.sbo.ng4c.app {
    class Application {
        static main(): void;
    }
}
