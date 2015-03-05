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
                'use strict';
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
                var AppCtrl = (function () {
                    function AppCtrl($scope, storage) {
                        this.$scope = $scope;
                        this.storage = storage;
                        $scope.$on("showOrHideMenu", function (event, showOrHide) {
                            $scope.$broadcast("showOrHideMenuBroadcast", showOrHide);
                        });
                        console.log("Application Controller init.");
                    }
                    AppCtrl.$inject = [
                        '$scope',
                        'storage'
                    ];
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
                'use strict';
                var AppStorage = (function () {
                    function AppStorage() {
                    }
                    AppStorage.prototype.get = function (key) {
                        return JSON.parse(localStorage.getItem(key) || '""');
                    };
                    AppStorage.prototype.set = function (key, value) {
                        localStorage.setItem(key, JSON.stringify(value));
                    };
                    return AppStorage;
                })();
                app.AppStorage = AppStorage;
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
            var BaseController = (function () {
                function BaseController($scope, $element, $package) {
                    this.$scope = $scope;
                    this.$element = $element;
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
                BaseController.prototype.translateFromPackageToSlashPath = function (packageStr) {
                    return packageStr.replace(BaseController.DOT_REG, BaseController.SLASH);
                };
                BaseController.prototype.translateFromPackageToCssClassName = function (packageStr) {
                    return packageStr.replace(BaseController.DOT_REG, BaseController.HYPHEN);
                };
                BaseController.prototype.registerTemplate = function (templatePackage) {
                    this.$scope.template = "resources/" + this.translateFromPackageToSlashPath(templatePackage);
                };
                BaseController.prototype.registerCssName = function (cssName) {
                    this.$scope.className = this.translateFromPackageToCssClassName(cssName);
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
                var BaseController = sap.sbo.ng4c.BaseController;
                var Dashboard = (function (_super) {
                    __extends(Dashboard, _super);
                    function Dashboard($scope, $element) {
                        _super.call(this, $scope, $element, "sap.sbo.ng4c.launchpad.Dashboard");
                    }
                    return Dashboard;
                })(BaseController);
                launchpad.Dashboard = Dashboard;
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
                    function End($scope, $element) {
                        _super.call(this, $scope, $element, "sap.sbo.ng4c.header.End");
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
                    function Header($scope, $element) {
                        _super.call(this, $scope, $element, "sap.sbo.ng4c.header.Header");
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
                    function Center($scope, $element) {
                        _super.call(this, $scope, $element, "sap.sbo.ng4c.header.Center");
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
            var header;
            (function (header) {
                var BaseController = sap.sbo.ng4c.BaseController;
                var Begin = (function (_super) {
                    __extends(Begin, _super);
                    function Begin($scope, $element) {
                        _super.call(this, $scope, $element, "sap.sbo.ng4c.header.Begin");
                        $scope.showOrHideMenu = $.proxy(this.showOrHideMenu, this);
                    }
                    Begin.prototype.showOrHideMenu = function (name) {
                        this.showOrHide = !this.showOrHide;
                        this.$scope.$emit("showOrHideMenu", this.showOrHide);
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
                    function Footer($scope, $element) {
                        _super.call(this, $scope, $element, "sap.sbo.ng4c.footer.Footer");
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
            var aside;
            (function (aside) {
                var BaseController = sap.sbo.ng4c.BaseController;
                var Aside = (function (_super) {
                    __extends(Aside, _super);
                    function Aside($scope, $element) {
                        _super.call(this, $scope, $element, "sap.sbo.ng4c.aside.Aside");
                        $scope.$on("showOrHideMenuBroadcast", $.proxy(this.onShowOrHideMenuBroadcast, this));
                    }
                    Aside.prototype.onShowOrHideMenuBroadcast = function (event, showOrHide) {
                    };
                    return Aside;
                })(BaseController);
                aside.Aside = Aside;
            })(aside = ng4c.aside || (ng4c.aside = {}));
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
                    function Launchpad($scope, $element) {
                        _super.call(this, $scope, $element, "sap.sbo.ng4c.launchpad.Launchpad");
                    }
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
            var app;
            (function (app) {
                var Registry = (function () {
                    function Registry() {
                    }
                    Object.defineProperty(Registry, "controllers", {
                        get: function () {
                            var collection = [];
                            collection.push({ name: "sap.sbo.ng4c.launchpad.Dashboard", controller: sap.sbo.ng4c.launchpad.Dashboard });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.Launchpad", controller: sap.sbo.ng4c.launchpad.Launchpad });
                            collection.push({ name: "sap.sbo.ng4c.header.Begin", controller: sap.sbo.ng4c.header.Begin });
                            collection.push({ name: "sap.sbo.ng4c.header.End", controller: sap.sbo.ng4c.header.End });
                            collection.push({ name: "sap.sbo.ng4c.header.Center", controller: sap.sbo.ng4c.header.Center });
                            collection.push({ name: "sap.sbo.ng4c.header.Header", controller: sap.sbo.ng4c.header.Header });
                            collection.push({ name: "sap.sbo.ng4c.footer.Footer", controller: sap.sbo.ng4c.footer.Footer });
                            collection.push({ name: "sap.sbo.ng4c.aside.Aside", controller: sap.sbo.ng4c.aside.Aside });
                            return collection;
                        },
                        enumerable: true,
                        configurable: true
                    });
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
                        var app = angular.module('Application', ['ngRoute']).service('storage', _app.AppStorage).controller('AppCtrl', _app.AppCtrl).config(['$routeProvider', function ($routeProvider) {
                            $routeProvider.when('/', {
                                templateUrl: 'resources/sap/sbo/ng4c/app/Application.html',
                                controller: 'AppCtrl'
                            });
                            $routeProvider.otherwise({
                                redirectTo: '/'
                            });
                        }]);
                        var modules = _app.Registry.controllers;
                        modules.forEach(function (e) {
                            app.controller(e.name, e.controller);
                        });
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