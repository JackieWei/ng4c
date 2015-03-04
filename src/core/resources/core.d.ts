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
    function changeName(): ng.IDirective;
}
declare module sap.sbo.ng4c.app {
    class AppStorage {
        get(key: string): string;
        set(key: string, value: any): void;
    }
}
declare module sap.sbo.ng4c.app {
}
declare module sap.sbo.ng4c {
    class BaseElement {
        protected _scope: Object;
        protected _element: JQuery;
        constructor($scope: Object, $element: JQuery);
    }
}
declare module sap.sbo.ng4c {
    import BaseElement = sap.sbo.ng4c.BaseElement;
    class Aside extends BaseElement {
        constructor($scope: Object, $element: JQuery);
    }
}
declare module sap.sbo.ng4c {
    import BaseElement = sap.sbo.ng4c.BaseElement;
    class Dashboard extends BaseElement {
        constructor($scope: Object, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.footer {
    class Footer {
        constructor($scope: any, $element: JQuery);
    }
}
declare module sap.sbo.ng4c {
    import BaseElement = sap.sbo.ng4c.BaseElement;
    class Footer extends BaseElement {
        constructor($scope: Object, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.header {
    class Begin {
        constructor($scope: any, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.header {
    class Center {
        constructor($scope: any, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.header {
    class End {
        constructor($scope: any, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.header {
    class Header {
        constructor($scope: any, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.launchpad {
    class Dashboard {
        constructor($scope: any, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.launchpad {
    class Launchpad {
        constructor($scope: any, $element: JQuery);
    }
}
declare module sap.sbo.ng4c {
    import BaseElement = sap.sbo.ng4c.BaseElement;
    class Launchpad extends BaseElement {
        constructor($scope: Object, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.menu {
    class Menu {
        constructor($scope: any, $element: JQuery);
    }
}
