var sap;
(function (sap) {
    var cloud;
    (function (cloud) {
        var core;
        (function (core) {
            var util;
            (function (util) {
                var NamingUtil = (function () {
                    function NamingUtil() {
                    }
                    NamingUtil.toCssName = function (packageName) {
                        return packageName.replace(NamingUtil.DOT_REG, NamingUtil.HYPHEN);
                    };
                    NamingUtil.toPath = function (packageName) {
                        return packageName.replace(NamingUtil.DOT_REG, NamingUtil.SLASH);
                    };
                    NamingUtil.toDirective = function (packageName) {
                        var names = packageName.split(NamingUtil.DOT);
                        for (var i = 1, total = names.length; i < total; i++) {
                            names[i] = NamingUtil.uppercaseFirstChar(names[i]);
                        }
                        return names.join(NamingUtil.EMPTY);
                    };
                    NamingUtil.uppercaseFirstChar = function (str) {
                        return str.charAt(0).toUpperCase() + str.slice(1);
                    };
                    NamingUtil.DOT_REG = /\./gi;
                    NamingUtil.SLASH = '/';
                    NamingUtil.DOT = '.';
                    NamingUtil.HYPHEN = '-';
                    NamingUtil.EMPTY = '';
                    return NamingUtil;
                })();
                util.NamingUtil = NamingUtil;
            })(util = core.util || (core.util = {}));
        })(core = cloud.core || (cloud.core = {}));
    })(cloud = sap.cloud || (sap.cloud = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var cloud;
    (function (cloud) {
        var logging;
        (function (logging) {
            var SimpleLogger = (function () {
                function SimpleLogger(name) {
                    this.name = name;
                }
                SimpleLogger.prototype.info = function (msg) {
                    console.log("[INFO] " + this.name + " --> " + msg);
                };
                return SimpleLogger;
            })();
            logging.SimpleLogger = SimpleLogger;
        })(logging = cloud.logging || (cloud.logging = {}));
    })(cloud = sap.cloud || (sap.cloud = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var cloud;
    (function (cloud) {
        var logging;
        (function (logging) {
            var LogManager = (function () {
                function LogManager() {
                }
                LogManager.getLogger = function (name) {
                    return new logging.SimpleLogger(name.name);
                };
                return LogManager;
            })();
            logging.LogManager = LogManager;
        })(logging = cloud.logging || (cloud.logging = {}));
    })(cloud = sap.cloud || (sap.cloud = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var cloud;
    (function (cloud) {
        var core;
        (function (core) {
            var LogManager = sap.cloud.logging.LogManager;
            var TemplateEngine = (function () {
                function TemplateEngine() {
                }
                TemplateEngine.prototype.render = function () {
                    TemplateEngine.log.info("render()");
                };
                TemplateEngine.prototype.dummy = function () {
                    return 123;
                };
                TemplateEngine.prototype.process = function (num) {
                    return null;
                };
                TemplateEngine.log = LogManager.getLogger(TemplateEngine);
                return TemplateEngine;
            })();
            core.TemplateEngine = TemplateEngine;
        })(core = cloud.core || (cloud.core = {}));
    })(cloud = sap.cloud || (sap.cloud = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                var config;
                (function (config) {
                    var UIConfig = (function () {
                        function UIConfig() {
                            this.menuFullWidth = 20;
                            this.menuLightWidth = 5;
                            this.tileBasicWidth = 15;
                            this.tileBasicHeight = 12;
                        }
                        return UIConfig;
                    })();
                    config.UIConfig = UIConfig;
                })(config = app.config || (app.config = {}));
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                var UIConfig = sap.sbo.ng4c.app.config.UIConfig;
                var Config = (function () {
                    function Config() {
                        this.ui = new UIConfig();
                    }
                    return Config;
                })();
                app.Config = Config;
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                var AppCtrl = (function () {
                    function AppCtrl($scope) {
                        $scope.$on("showOrHideMenu", function (event, showOrHide) {
                            $scope.$broadcast("showOrHideMenuBroadcast", showOrHide);
                        });
                    }
                    return AppCtrl;
                })();
                app.AppCtrl = AppCtrl;
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                var ListCtrl = (function () {
                    function ListCtrl($scope, $route) {
                        console.log($route.current.params.bo_abbr);
                        this.scope = $scope;
                        this.scope.action = $route.current.params.bo_abbr;
                    }
                    return ListCtrl;
                })();
                app.ListCtrl = ListCtrl;
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                'use strict';
                var EventRoute = (function () {
                    function EventRoute($scope, $element) {
                        $scope.$on("showOrHideMenu", function (event, showOrHide) {
                            $scope.$broadcast("showOrHideMenuBroadcast", showOrHide);
                        });
                    }
                    return EventRoute;
                })();
                app.EventRoute = EventRoute;
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var NamingUtil = sap.cloud.core.util.NamingUtil;
            var BaseController = (function () {
                function BaseController($scope, $element, $attrs, $package) {
                    this.$scope = $scope;
                    this.$element = $element;
                    this.$attrs = $attrs;
                    var lastIndex = $package.lastIndexOf(BaseController.DOT);
                    var moduleStr = lastIndex < 0 ? "" : $package.slice(0, lastIndex);
                    var klassName = lastIndex < 0 ? $package : $package.slice(lastIndex + 1);
                    this.$package = $package;
                    this.klass = klassName;
                    this.module = moduleStr;
                    this.registerTemplate($package);
                    this.registerCssName($package);
                    console.log(this.$package + " initialize!");
                }
                BaseController.prototype.registerTemplate = function (templatePackage) {
                    this.$scope.template = "resources/" + NamingUtil.toPath(templatePackage) + ".html";
                };
                BaseController.prototype.registerCssName = function (packageName) {
                    this.$scope.className = NamingUtil.toCssName(packageName);
                };
                BaseController.DOT_REG = /\./gi;
                BaseController.HYPHEN = "-";
                BaseController.SLASH = "/";
                BaseController.DOT = ".";
                return BaseController;
            })();
            ng4c.BaseController = BaseController;
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var dashboard;
                (function (dashboard) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var Tile = (function (_super) {
                        __extends(Tile, _super);
                        function Tile($scope, $element, $attrs, config) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.dashboard.Tile");
                            this.scope = this.$scope;
                            this.config = config;
                            this.scope.rawData = this.scope.data;
                            var size = this.scope.rawData.Size.split(Tile.SPLIT);
                            this.scope.sizeW = parseInt(size[0], 10);
                            this.scope.sizeH = parseInt(size[1], 10);
                            this.scope.width = this.scope.sizeW * this.config.ui.tileBasicWidth;
                            this.scope.height = this.scope.sizeH * this.config.ui.tileBasicHeight;
                            this.scope.innerTemplate = 'resources/sap/sbo/ng4c/launchpad/dashboard/tiles/KPI.html';
                        }
                        Tile.SPLIT = 'x';
                        return Tile;
                    })(BaseController);
                    dashboard.Tile = Tile;
                })(dashboard = launchpad.dashboard || (launchpad.dashboard = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var header;
            (function (header) {
                var BaseController = sap.sbo.ng4c.BaseController;
                var End = (function (_super) {
                    __extends(End, _super);
                    function End($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.header.End");
                    }
                    return End;
                })(BaseController);
                header.End = End;
            })(header = ng4c.header || (ng4c.header = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var header;
            (function (header) {
                var BaseController = sap.sbo.ng4c.BaseController;
                var Header = (function (_super) {
                    __extends(Header, _super);
                    function Header($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.header.Header");
                    }
                    return Header;
                })(BaseController);
                header.Header = Header;
            })(header = ng4c.header || (ng4c.header = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var header;
            (function (header) {
                var BaseController = sap.sbo.ng4c.BaseController;
                var Center = (function (_super) {
                    __extends(Center, _super);
                    function Center($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.header.Center");
                    }
                    return Center;
                })(BaseController);
                header.Center = Center;
            })(header = ng4c.header || (ng4c.header = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                var DetailCtrl = (function () {
                    function DetailCtrl($scope, $route) {
                        console.log($route.current.params.bo_abbr + "-" + $route.current.params.bo_idx);
                        this.scope = $scope;
                        this.scope.action = $route.current.params.bo_abbr;
                        this.scope.idx = $route.current.params.bo_idx;
                    }
                    return DetailCtrl;
                })();
                app.DetailCtrl = DetailCtrl;
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                'use strict';
                var Storage = (function () {
                    function Storage() {
                    }
                    Storage.prototype.get = function (key, defaultValue) {
                        return localStorage.getItem(key) || defaultValue;
                    };
                    Storage.prototype.set = function (key, value) {
                        localStorage.setItem(key, value);
                    };
                    Storage.prototype.getBoolean = function (key, defaultValue) {
                        return this.get(key, defaultValue ? Storage.VAL_TRUE : Storage.VAL_FLASH) === Storage.VAL_TRUE;
                    };
                    Storage.prototype.setBoolean = function (key, value) {
                        return this.set(key, value ? Storage.VAL_TRUE : Storage.VAL_FLASH);
                    };
                    Storage.VAL_TRUE = '1';
                    Storage.VAL_FLASH = '0';
                    return Storage;
                })();
                app.Storage = Storage;
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var header;
            (function (header) {
                var BaseController = sap.sbo.ng4c.BaseController;
                var Begin = (function (_super) {
                    __extends(Begin, _super);
                    function Begin($scope, $element, $attrs, storage) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.header.Begin");
                        this.scope = $scope;
                        this.storage = storage;
                        this.scope.showOrHideLogo = !this.storage.getBoolean("showOrHideMenu", true);
                        this.scope.showOrHideMenu = $.proxy(this.showOrHideMenu, this);
                    }
                    Begin.prototype.showOrHideMenu = function (name) {
                        this.scope.showOrHideLogo = !this.scope.showOrHideLogo;
                        this.$scope.$emit("showOrHideMenu", this.scope.showOrHideLogo);
                    };
                    return Begin;
                })(BaseController);
                header.Begin = Begin;
            })(header = ng4c.header || (ng4c.header = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var footer;
            (function (footer) {
                var BaseController = sap.sbo.ng4c.BaseController;
                var Footer = (function (_super) {
                    __extends(Footer, _super);
                    function Footer($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.footer.Footer");
                    }
                    return Footer;
                })(BaseController);
                footer.Footer = Footer;
            })(footer = ng4c.footer || (ng4c.footer = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var aside;
                (function (aside) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var AsideProps = (function () {
                        function AsideProps() {
                        }
                        AsideProps.HIDE_WIDTH = 50;
                        AsideProps.SHOW_WIDTH = 205;
                        return AsideProps;
                    })();
                    aside.AsideProps = AsideProps;
                    var Aside = (function (_super) {
                        __extends(Aside, _super);
                        function Aside($scope, $element, $attrs, storage) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.aside.Aside");
                            $scope.$on("showOrHideMenuBroadcast", $.proxy(this.onShowOrHideMenuBroadcast, this));
                            this.scope = this.$scope;
                            this.storage = storage;
                            this.scope.liteMode = this.storage.getBoolean("showOrHideMenu", true);
                            this.scope.width = this.scope.liteMode ? AsideProps.HIDE_WIDTH : AsideProps.SHOW_WIDTH;
                        }
                        Aside.prototype.onShowOrHideMenuBroadcast = function (event, showOrHide) {
                            if (showOrHide) {
                                this.scope.width = AsideProps.SHOW_WIDTH;
                            }
                            else {
                                this.scope.width = AsideProps.HIDE_WIDTH;
                            }
                            this.scope.liteMode = !showOrHide;
                            this.storage.setBoolean("showOrHideMenu", this.scope.liteMode);
                        };
                        return Aside;
                    })(BaseController);
                    aside.Aside = Aside;
                })(aside = launchpad.aside || (launchpad.aside = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var aside;
                (function (aside) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var LightAccess = (function (_super) {
                        __extends(LightAccess, _super);
                        function LightAccess($scope, $element, $attrs) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.aside.LightAccess");
                            this.scope = this.$scope;
                        }
                        return LightAccess;
                    })(BaseController);
                    aside.LightAccess = LightAccess;
                })(aside = launchpad.aside || (launchpad.aside = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var BaseController = sap.sbo.ng4c.BaseController;
            var BaseControl = (function (_super) {
                __extends(BaseControl, _super);
                function BaseControl($scope, $element, $attrs, $package) {
                    _super.call(this, $scope, $element, $attrs, $package);
                }
                BaseControl.makeDirective = function (directive) {
                    return $.extend(BaseControl.DIRECTIVE, directive);
                };
                BaseControl.DIRECTIVE = {
                    restrict: "E",
                    priority: 0,
                    replace: true,
                    scope: true,
                    transclude: true,
                    templateUrl: '',
                    compile: function ($element, $attrs, $transclude) {
                        return {
                            pre: function ($scope, $element, $attrs, $controller) {
                                console.log("Control Pre");
                            },
                            post: function ($scope, $element, $attrs, $controller) {
                                console.log("Control Post");
                            }
                        };
                    },
                    link: function ($scope, $element, $attrs, $controller) {
                        console.log("Control Linked!");
                    }
                };
                return BaseControl;
            })(BaseController);
            ui.BaseControl = BaseControl;
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                var TreeNode = (function (_super) {
                    __extends(TreeNode, _super);
                    function TreeNode($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.TreeNode");
                        this.scope = this.$scope;
                        this.parent = this.scope.$parent;
                        this.buildScope();
                    }
                    TreeNode.prototype.buildScope = function () {
                        this.scope.name = this.scope.data.name;
                        this.scope.expand = false;
                        this.scope.nodes = this.scope.data.nodes ? this.scope.data.nodes : [];
                        this.scope.isFolder = this.scope.nodes.length > 0;
                        this.scope.logoClickHandler = $.proxy(this.logoClickHandler, this);
                    };
                    TreeNode.prototype.logoClickHandler = function (e) {
                        if (this.scope.nodes.length <= 0) {
                            var parent = this.scope.$parent;
                            while (parent && parent.data.level > 0) {
                                parent = parent.$parent;
                            }
                            if (parent && parent.$parent && $.isFunction(parent.$parent.menuItemClick)) {
                                parent.$parent.menuItemClick(this.scope.data);
                            }
                        }
                        else {
                            this.scope.expand = !this.scope.expand;
                        }
                    };
                    return TreeNode;
                })(BaseControl);
                controls.TreeNode = TreeNode;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                var Router = (function () {
                    function Router() {
                    }
                    Router.prototype.hashTo = function (fragments) {
                        var hash = [Router.HASH];
                        for (var i = 0, total = fragments.length; i < total; i++) {
                            hash.push(fragments[i]);
                        }
                        location.hash = hash.join(Router.SLASH);
                    };
                    Router.prototype.hashToList = function (boAbbr) {
                        this.hashTo([Router.LIST, boAbbr]);
                    };
                    Router.prototype.hashToDetail = function (boAbbr, boIdx) {
                        this.hashTo([Router.DETAIL, boAbbr, boIdx]);
                    };
                    Router.prototype.hashToDashboard = function () {
                        location.hash = Router.HASH + Router.SLASH;
                    };
                    Router.HASH = '#';
                    Router.SLASH = '/';
                    Router.EMPTY = '';
                    Router.DOT = '.';
                    Router.LIST = 'list';
                    Router.DETAIL = 'detail';
                    return Router;
                })();
                app.Router = Router;
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var aside;
                (function (aside) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var Modules = (function (_super) {
                        __extends(Modules, _super);
                        function Modules($scope, $element, $attrs, router) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.aside.Modules");
                            this.scope = this.$scope;
                            this.router = router;
                            this.scope.menuItemClick = $.proxy(this.menuItemClick, this);
                        }
                        Modules.prototype.menuItemClick = function (menuData) {
                            if (menuData.showListview) {
                                this.router.hashToList(menuData.action);
                            }
                            else {
                                this.router.hashToDetail(menuData.action, '0');
                            }
                        };
                        return Modules;
                    })(BaseController);
                    aside.Modules = Modules;
                })(aside = launchpad.aside || (launchpad.aside = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var aside;
                (function (aside) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var Menu = (function (_super) {
                        __extends(Menu, _super);
                        function Menu($scope, $element, $attrs) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.aside.Menu");
                            this.scope = this.$scope;
                        }
                        return Menu;
                    })(BaseController);
                    aside.Menu = Menu;
                })(aside = launchpad.aside || (launchpad.aside = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var BaseController = sap.sbo.ng4c.BaseController;
                var Launchpad = (function (_super) {
                    __extends(Launchpad, _super);
                    function Launchpad($scope, $element, $attrs, config, storage) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.Launchpad");
                        this.scope = this.$scope;
                        this.config = config;
                        this.storage = storage;
                        var showOrHide = this.storage.getBoolean("showOrHideMenu", true);
                        this.scope.asideWidth = !showOrHide ? this.config.ui.menuFullWidth : this.config.ui.menuLightWidth;
                        this.scope.$on("showOrHideMenuBroadcast", $.proxy(this.onShowOrHideMenuBroadcast, this));
                    }
                    Launchpad.prototype.onShowOrHideMenuBroadcast = function (event, showOrHide) {
                        if (showOrHide) {
                            this.scope.asideWidth = this.config.ui.menuFullWidth;
                        }
                        else {
                            this.scope.asideWidth = this.config.ui.menuLightWidth;
                        }
                    };
                    return Launchpad;
                })(BaseController);
                launchpad.Launchpad = Launchpad;
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var dashboard;
                (function (dashboard) {
                    var tiles;
                    (function (tiles) {
                        var BaseController = sap.sbo.ng4c.BaseController;
                        var Kpi = (function (_super) {
                            __extends(Kpi, _super);
                            function Kpi($scope, $element, $attrs) {
                                _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.dashboard.tiles.Kpi");
                                this.scope = this.$scope;
                                this.scope.rawData = this.scope.data;
                            }
                            return Kpi;
                        })(BaseController);
                        tiles.Kpi = Kpi;
                    })(tiles = dashboard.tiles || (dashboard.tiles = {}));
                })(dashboard = launchpad.dashboard || (launchpad.dashboard = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var aside;
                (function (aside) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var SearchBar = (function (_super) {
                        __extends(SearchBar, _super);
                        function SearchBar($scope, $element, $attrs) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.aside.SearchBar");
                            this.scope = this.$scope;
                        }
                        return SearchBar;
                    })(BaseController);
                    aside.SearchBar = SearchBar;
                })(aside = launchpad.aside || (launchpad.aside = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var aside;
                (function (aside) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var Tab = (function (_super) {
                        __extends(Tab, _super);
                        function Tab($scope, $element, $attrs) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.aside.Tab");
                            this.scope = this.$scope;
                            this.scope.currentIndex = 0;
                            this.scope.showTab = $.proxy(this.showTab, this);
                        }
                        Tab.prototype.showTab = function (index) {
                            if (index === this.scope.currentIndex)
                                return;
                            this.scope.currentIndex = index;
                        };
                        return Tab;
                    })(BaseController);
                    aside.Tab = Tab;
                })(aside = launchpad.aside || (launchpad.aside = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function TreeDirective() {
                    return BaseControl.makeDirective({
                        templateUrl: 'resources/sap/sbo/ui/controls/Tree.html'
                    });
                }
                controls.TreeDirective = TreeDirective;
                var Tree = (function (_super) {
                    __extends(Tree, _super);
                    function Tree($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.Tree");
                        this.scope = this.$scope;
                        this.attrs = $attrs;
                        this.buildScope();
                    }
                    Tree.prototype.buildScope = function () {
                        this.scope.nodes = [];
                        $.ajax(this.attrs.ngMenuurl, {
                            async: true,
                            dataType: "JSON"
                        }).done($.proxy(this.onMenuDataReady, this));
                    };
                    Tree.prototype.onMenuDataReady = function (data) {
                        var menuData = data.menu;
                        for (var i = 0, total = menuData.length; i < total; i++) {
                            this.scope.nodes.push(this.buildNode(menuData[i]));
                        }
                        this.scope.$applyAsync();
                    };
                    Tree.prototype.buildNode = function (data, parent) {
                        if (parent === void 0) { parent = null; }
                        var node = {
                            id: data.id,
                            level: parent ? parent.level + 1 : 0,
                            show: parent ? 'block' : 'none',
                            logo: '',
                            name: data.name,
                            create: data.create,
                            showListview: data.showListview,
                            action: data.action,
                            nodes: null
                        };
                        if (data.nodes && data.nodes.length > 0) {
                            node.nodes = [];
                            for (var i = 0, total = data.nodes.length; i < total; i++) {
                                node.nodes.push(this.buildNode(data.nodes[i], node));
                            }
                        }
                        return node;
                    };
                    return Tree;
                })(BaseControl);
                controls.Tree = Tree;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var dashboard;
                (function (dashboard) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var Dashboard = (function (_super) {
                        __extends(Dashboard, _super);
                        function Dashboard($scope, $element, $attrs) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.dashboard.Dashboard");
                            this.scope = this.$scope;
                            this.buildScope();
                        }
                        Dashboard.prototype.buildScope = function () {
                            $.ajax('resources/sap/sbo/ng4c/launchpad/dashboard/Pages.json', {
                                async: true,
                                success: $.proxy(this.onTilesLoaded, this)
                            });
                        };
                        Dashboard.prototype.onTilesLoaded = function (data) {
                            this.scope.tiles = data[0].Tiles;
                            this.scope.$applyAsync();
                        };
                        return Dashboard;
                    })(BaseController);
                    dashboard.Dashboard = Dashboard;
                })(dashboard = launchpad.dashboard || (launchpad.dashboard = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                var BodyCtrl = (function () {
                    function BodyCtrl($scope) {
                        $scope.$on("showOrHideMenu", function (event, showOrHide) {
                            $scope.$broadcast("showOrHideMenuBroadcast", showOrHide);
                        });
                    }
                    return BodyCtrl;
                })();
                app.BodyCtrl = BodyCtrl;
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                var Backend = (function () {
                    function Backend() {
                    }
                    return Backend;
                })();
                app.Backend = Backend;
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var list;
                (function (list) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var List = (function (_super) {
                        __extends(List, _super);
                        function List($scope, $element, $attrs, router) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.list.List");
                            this.scope = $scope;
                            this.router = router;
                            this.scope.backToDashboard = $.proxy(this.backToDashboard, this);
                            this.scope.naviToDetail = $.proxy(this.naviToDetail, this);
                        }
                        List.prototype.backToDashboard = function () {
                            this.router.hashToDashboard();
                        };
                        List.prototype.naviToDetail = function () {
                            this.router.hashToDetail(this.scope.action, '1');
                        };
                        return List;
                    })(BaseController);
                    list.List = List;
                })(list = launchpad.list || (launchpad.list = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var aside;
                (function (aside) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var MyMenu = (function (_super) {
                        __extends(MyMenu, _super);
                        function MyMenu($scope, $element, $attrs) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.aside.MyMenu");
                            this.scope = this.$scope;
                        }
                        return MyMenu;
                    })(BaseController);
                    aside.MyMenu = MyMenu;
                })(aside = launchpad.aside || (launchpad.aside = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var detail;
                (function (detail) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var Detail = (function (_super) {
                        __extends(Detail, _super);
                        function Detail($scope, $element, $attrs) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.detail.Detail");
                            this.scope = this.$scope;
                        }
                        return Detail;
                    })(BaseController);
                    detail.Detail = Detail;
                })(detail = launchpad.detail || (launchpad.detail = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function ButtonDirective() {
                    return BaseControl.makeDirective({
                        templateUrl: 'resources/sap/sbo/ui/controls/Button.html'
                    });
                }
                controls.ButtonDirective = ButtonDirective;
                var Button = (function (_super) {
                    __extends(Button, _super);
                    function Button($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.Button");
                        this.scope = this.$scope;
                        this.attrs = $attrs;
                        this.buildScope();
                    }
                    Button.prototype.buildScope = function () {
                        this.scope.icon = this.getIconContent(this.attrs.icon);
                    };
                    Button.prototype.getIconContent = function (icon) {
                        return '';
                    };
                    return Button;
                })(BaseControl);
                controls.Button = Button;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function DatePickerDirective() {
                    return BaseControl.makeDirective({
                        templateUrl: 'resources/sap/sbo/ui/controls/DatePicker.html'
                    });
                }
                controls.DatePickerDirective = DatePickerDirective;
                var DatePicker = (function (_super) {
                    __extends(DatePicker, _super);
                    function DatePicker($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.DatePicker");
                        this.scope = this.$scope;
                        this.attrs = $attrs;
                        this.buildScope();
                    }
                    DatePicker.prototype.buildScope = function () {
                        this.scope.value = this.attrs.ngValue;
                    };
                    return DatePicker;
                })(BaseControl);
                controls.DatePicker = DatePicker;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function DecimalInputDirective() {
                    return BaseControl.makeDirective({
                        templateUrl: 'resources/sap/sbo/ui/controls/DecimalInput.html'
                    });
                }
                controls.DecimalInputDirective = DecimalInputDirective;
                var DecimalInput = (function (_super) {
                    __extends(DecimalInput, _super);
                    function DecimalInput($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.DecimalInput");
                        this.scope = this.$scope;
                        this.attrs = $attrs;
                        this.buildScope();
                    }
                    DecimalInput.prototype.buildScope = function () {
                        this.scope.value = this.attrs.ngValue;
                    };
                    return DecimalInput;
                })(BaseControl);
                controls.DecimalInput = DecimalInput;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function InputDirective() {
                    return BaseControl.makeDirective({
                        templateUrl: 'resources/sap/sbo/ui/controls/Input.html'
                    });
                }
                controls.InputDirective = InputDirective;
                var Input = (function (_super) {
                    __extends(Input, _super);
                    function Input($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.Input");
                        this.scope = this.$scope;
                        this.attrs = $attrs;
                        this.buildScope();
                    }
                    Input.prototype.buildScope = function () {
                        this.scope.value = this.attrs.ngValue;
                    };
                    return Input;
                })(BaseControl);
                controls.Input = Input;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function LabelDirective() {
                    return {
                        restrict: "E",
                        priority: 0,
                        replace: true,
                        scope: true,
                        transclude: true,
                        templateUrl: 'resources/sap/sbo/ui/controls/Label.html',
                        compile: function ($element, $attrs, $transclude) {
                            return {
                                pre: function ($scope, $element, $attrs, $controller) {
                                    console.log("Control Pre");
                                },
                                post: function ($scope, $element, $attrs, $controller) {
                                    console.log("Control Post");
                                }
                            };
                        },
                        link: function ($scope, $element, $attrs, $controller) {
                            console.log("Control Linked!");
                        }
                    };
                }
                controls.LabelDirective = LabelDirective;
                var Label = (function (_super) {
                    __extends(Label, _super);
                    function Label($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.Label");
                        this.scope = this.$scope;
                        this.attrs = this.$attrs;
                        this.buildScope();
                    }
                    Label.prototype.buildScope = function () {
                        this.scope.text = this.attrs.ngText;
                    };
                    return Label;
                })(BaseControl);
                controls.Label = Label;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function LinkedInputDirective() {
                    return BaseControl.makeDirective({
                        templateUrl: 'resources/sap/sbo/ui/controls/LinkedInput.html'
                    });
                }
                controls.LinkedInputDirective = LinkedInputDirective;
                var LinkedInput = (function (_super) {
                    __extends(LinkedInput, _super);
                    function LinkedInput($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.LinkedInput");
                        this.scope = this.$scope;
                        this.attrs = $attrs;
                        this.buildScope();
                    }
                    LinkedInput.prototype.buildScope = function () {
                        this.scope.value = this.attrs.ngValue;
                    };
                    return LinkedInput;
                })(BaseControl);
                controls.LinkedInput = LinkedInput;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function NumberInputDirective() {
                    return BaseControl.makeDirective({
                        templateUrl: 'resources/sap/sbo/ui/controls/NumberInput.html'
                    });
                }
                controls.NumberInputDirective = NumberInputDirective;
                var NumberInput = (function (_super) {
                    __extends(NumberInput, _super);
                    function NumberInput($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.NumberInput");
                        this.scope = this.$scope;
                        this.attrs = $attrs;
                        this.buildScope();
                    }
                    NumberInput.prototype.buildScope = function () {
                        this.scope.value = this.attrs.ngValue;
                    };
                    return NumberInput;
                })(BaseControl);
                controls.NumberInput = NumberInput;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function SelectDirective() {
                    return BaseControl.makeDirective({
                        templateUrl: 'resources/sap/sbo/ui/controls/Select.html'
                    });
                }
                controls.SelectDirective = SelectDirective;
                var Select = (function (_super) {
                    __extends(Select, _super);
                    function Select($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.Select");
                        this.scope = this.$scope;
                        this.attrs = $attrs;
                        this.buildScope();
                    }
                    Select.prototype.buildScope = function () {
                        this.scope.value = this.attrs.ngValue;
                    };
                    return Select;
                })(BaseControl);
                controls.Select = Select;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function TextAreaDirective() {
                    return BaseControl.makeDirective({
                        templateUrl: 'resources/sap/sbo/ui/controls/TextArea.html'
                    });
                }
                controls.TextAreaDirective = TextAreaDirective;
                var TextArea = (function (_super) {
                    __extends(TextArea, _super);
                    function TextArea($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.TextArea");
                        this.scope = this.$scope;
                        this.attrs = $attrs;
                        this.buildScope();
                    }
                    TextArea.prototype.buildScope = function () {
                        this.scope.value = this.attrs.ngValue;
                    };
                    return TextArea;
                })(BaseControl);
                controls.TextArea = TextArea;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                var Registry = (function () {
                    function Registry() {
                    }
                    Object.defineProperty(Registry, "constants", {
                        get: function () {
                            if (Registry._constants.length > 0)
                                return Registry._constants;
                            var constants = Registry._constants;
                            constants.push({ name: "config", constant: new sap.sbo.ng4c.app.Config() });
                            return constants;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Registry, "servies", {
                        get: function () {
                            if (Registry._services.length > 0)
                                return Registry._services;
                            var services = Registry._services;
                            services.push({ name: "storage", service: sap.sbo.ng4c.app.Storage });
                            services.push({ name: "router", service: sap.sbo.ng4c.app.Router });
                            services.push({ name: "backend", service: sap.sbo.ng4c.app.Backend });
                            return services;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Registry, "controllers", {
                        get: function () {
                            if (Registry._controllers.length > 0)
                                return Registry._controllers;
                            var collection = Registry._controllers;
                            collection.push({ name: "sap.sbo.ng4c.app.BodyCtrl", controller: sap.sbo.ng4c.app.BodyCtrl });
                            collection.push({ name: "sap.sbo.ng4c.app.AppCtrl", controller: sap.sbo.ng4c.app.AppCtrl });
                            collection.push({ name: "sap.sbo.ng4c.app.ListCtrl", controller: sap.sbo.ng4c.app.ListCtrl });
                            collection.push({ name: "sap.sbo.ng4c.app.DetailCtrl", controller: sap.sbo.ng4c.app.DetailCtrl });
                            collection.push({ name: "sap.sbo.ng4c.app.EventRoute", controller: sap.sbo.ng4c.app.EventRoute });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.Launchpad", controller: sap.sbo.ng4c.launchpad.Launchpad });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.dashboard.Dashboard", controller: sap.sbo.ng4c.launchpad.dashboard.Dashboard });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.dashboard.Tile", controller: sap.sbo.ng4c.launchpad.dashboard.Tile });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.dashboard.tiles.Kpi", controller: sap.sbo.ng4c.launchpad.dashboard.tiles.Kpi });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.Aside", controller: sap.sbo.ng4c.launchpad.aside.Aside });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.LightAccess", controller: sap.sbo.ng4c.launchpad.aside.LightAccess });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.Menu", controller: sap.sbo.ng4c.launchpad.aside.Menu });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.Modules", controller: sap.sbo.ng4c.launchpad.aside.Modules });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.MyMenu", controller: sap.sbo.ng4c.launchpad.aside.MyMenu });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.Tab", controller: sap.sbo.ng4c.launchpad.aside.Tab });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.SearchBar", controller: sap.sbo.ng4c.launchpad.aside.SearchBar });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.list.List", controller: sap.sbo.ng4c.launchpad.list.List });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.detail.Detail", controller: sap.sbo.ng4c.launchpad.detail.Detail });
                            collection.push({ name: "sap.sbo.ng4c.header.Begin", controller: sap.sbo.ng4c.header.Begin });
                            collection.push({ name: "sap.sbo.ng4c.header.End", controller: sap.sbo.ng4c.header.End });
                            collection.push({ name: "sap.sbo.ng4c.header.Center", controller: sap.sbo.ng4c.header.Center });
                            collection.push({ name: "sap.sbo.ng4c.header.Header", controller: sap.sbo.ng4c.header.Header });
                            collection.push({ name: "sap.sbo.ng4c.footer.Footer", controller: sap.sbo.ng4c.footer.Footer });
                            collection.push({ name: "sap.sbo.ui.controls.Tree", controller: sap.sbo.ui.controls.Tree });
                            collection.push({ name: "sap.sbo.ui.controls.TreeNode", controller: sap.sbo.ui.controls.TreeNode });
                            collection.push({ name: "sap.sbo.ui.controls.Button", controller: sap.sbo.ui.controls.Button });
                            collection.push({ name: "sap.sbo.ui.controls.DatePicker", controller: sap.sbo.ui.controls.DatePicker });
                            collection.push({ name: "sap.sbo.ui.controls.DecimalInput", controller: sap.sbo.ui.controls.DecimalInput });
                            collection.push({ name: "sap.sbo.ui.controls.Input", controller: sap.sbo.ui.controls.Input });
                            collection.push({ name: "sap.sbo.ui.controls.Label", controller: sap.sbo.ui.controls.Label });
                            collection.push({ name: "sap.sbo.ui.controls.LinkedInput", controller: sap.sbo.ui.controls.LinkedInput });
                            collection.push({ name: "sap.sbo.ui.controls.NumberInput", controller: sap.sbo.ui.controls.NumberInput });
                            collection.push({ name: "sap.sbo.ui.controls.Select", controller: sap.sbo.ui.controls.Select });
                            collection.push({ name: "sap.sbo.ui.controls.TextArea", controller: sap.sbo.ui.controls.TextArea });
                            return collection;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Registry, "controls", {
                        get: function () {
                            if (Registry._controls.length > 0)
                                return Registry._controls;
                            var collection = [];
                            collection.push({ name: "ng4cTree", directive: sap.sbo.ui.controls.TreeDirective });
                            collection.push({ name: "ng4cButton", directive: sap.sbo.ui.controls.ButtonDirective });
                            collection.push({ name: "ng4cDatePicker", directive: sap.sbo.ui.controls.DatePickerDirective });
                            collection.push({ name: "ng4cDecimalInput", directive: sap.sbo.ui.controls.DecimalInputDirective });
                            collection.push({ name: "ng4cInput", directive: sap.sbo.ui.controls.InputDirective });
                            collection.push({ name: "ng4cLabel", directive: sap.sbo.ui.controls.LabelDirective });
                            collection.push({ name: "ng4cLinkedInput", directive: sap.sbo.ui.controls.LinkedInputDirective });
                            collection.push({ name: "ng4cNumberInput", directive: sap.sbo.ui.controls.NumberInputDirective });
                            collection.push({ name: "ng4cSelect", directive: sap.sbo.ui.controls.SelectDirective });
                            collection.push({ name: "ng4cTextArea", directive: sap.sbo.ui.controls.TextAreaDirective });
                            return collection;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Registry._controllers = [];
                    Registry._controls = [];
                    Registry._services = [];
                    Registry._constants = [];
                    return Registry;
                })();
                app.Registry = Registry;
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (_app) {
                'use strict';
                var Application = (function () {
                    function Application() {
                    }
                    Application.main = function () {
                        var app = angular.module('Application', ['ngRoute']);
                        var modules = _app.Registry.controllers;
                        var controls = _app.Registry.controls;
                        var services = _app.Registry.servies;
                        var constants = _app.Registry.constants;
                        modules.forEach(function (e) {
                            app.controller(e.name, e.controller);
                        });
                        controls.forEach(function (e) {
                            app.directive(e.name, e.directive);
                        });
                        services.forEach(function (e) {
                            app.service(e.name, e.service);
                        });
                        constants.forEach(function (e) {
                            app.constant(e.name, e.constant);
                        });
                        app.config(['$routeProvider', function ($routeProvider) {
                            $routeProvider.when('/', {
                                templateUrl: 'resources/sap/sbo/ng4c/app/Dashboard.html',
                                controller: 'sap.sbo.ng4c.app.AppCtrl'
                            });
                            $routeProvider.when('/list/:bo_abbr', {
                                templateUrl: 'resources/sap/sbo/ng4c/app/List.html',
                                controller: 'sap.sbo.ng4c.app.ListCtrl'
                            });
                            $routeProvider.when('/detail/:bo_abbr/:bo_idx', {
                                templateUrl: 'resources/sap/sbo/ng4c/app/Detail.html',
                                controller: 'sap.sbo.ng4c.app.DetailCtrl'
                            });
                            $routeProvider.otherwise({
                                redirectTo: '/'
                            });
                        }]);
                    };
                    return Application;
                })();
                _app.Application = Application;
                Application.main();
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
//# sourceMappingURL=core.js.map