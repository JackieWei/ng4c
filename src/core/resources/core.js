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
                        $scope.greeting = storage.get('name') !== '' ? 'Hello ' + storage.get('name') + ' !' : 'Hello you !';
                        $scope.changeName = function (name) {
                            storage.set('name', name);
                            $scope.greeting = 'Hello ' + name + ' !';
                        };
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
                function changeName() {
                    return {
                        restrict: 'A',
                        scope: false,
                        link: function ($scope, element, attributes) {
                            element.on('mouseenter', function () {
                                element.addClass('animate');
                            });
                            element.on('mouseleave', function () {
                                element.removeClass('animate');
                            });
                            element.on('click', function () {
                                var name = JSON.parse(JSON.stringify(prompt('Please enter your name:')));
                                $scope.changeName(name);
                                $scope.$digest();
                            });
                        }
                    };
                }
                app.changeName = changeName;
                ;
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
            var app;
            (function (app) {
                'use strict';
                var Application = (function () {
                    function Application() {
                    }
                    Application.main = function () {
                        angular.module('Application', ['ngRoute']).service('storage', app.AppStorage).controller('controller', app.AppCtrl).directive('changeName', app.changeName).config(['$routeProvider', function ($routeProvider) {
                            $routeProvider.when('/', {
                                templateUrl: 'resources/sap/sbo/ng4c/app/Application.html',
                                controller: 'controller'
                            }).otherwise({
                                redirectTo: '/'
                            });
                        }]);
                    };
                    return Application;
                })();
                Application.main();
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
            var BaseElement = (function () {
                function BaseElement($scope, $element) {
                    this._scope = $scope;
                    this._element = $element;
                }
                return BaseElement;
            })();
            ng4c.BaseElement = BaseElement;
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
            var BaseElement = sap.sbo.ng4c.BaseElement;
            var Aside = (function (_super) {
                __extends(Aside, _super);
                function Aside($scope, $element) {
                    _super.call(this, $scope, $element);
                }
                return Aside;
            })(BaseElement);
            ng4c.Aside = Aside;
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var BaseElement = sap.sbo.ng4c.BaseElement;
            var Dashboard = (function (_super) {
                __extends(Dashboard, _super);
                function Dashboard($scope, $element) {
                    _super.call(this, $scope, $element);
                }
                return Dashboard;
            })(BaseElement);
            ng4c.Dashboard = Dashboard;
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
                var Footer = (function () {
                    function Footer($scope, $element) {
                        $scope.template = 'resources/sap/sbo/ng4c/footer/Footer.html';
                        $scope.className = "sap-sbo-ng4c-footer-Footer";
                        console.log("Footer init");
                    }
                    return Footer;
                })();
                footer.Footer = Footer;
                angular.module('Application').controller('sap.sbo.ng4c.footer.Footer', Footer);
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
            var BaseElement = sap.sbo.ng4c.BaseElement;
            var Footer = (function (_super) {
                __extends(Footer, _super);
                function Footer($scope, $element) {
                    _super.call(this, $scope, $element);
                }
                return Footer;
            })(BaseElement);
            ng4c.Footer = Footer;
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
                var Begin = (function () {
                    function Begin($scope, $element) {
                        $scope.className = "sap-sbo-ng4c-header-Begin";
                        console.log("Header Begin init");
                    }
                    return Begin;
                })();
                header.Begin = Begin;
                angular.module('Application').controller('sap.sbo.ng4c.header.Begin', Begin);
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
                var Center = (function () {
                    function Center($scope, $element) {
                        $scope.className = "sap-sbo-ng4c-header-Center";
                        console.log("Header Center init");
                    }
                    return Center;
                })();
                header.Center = Center;
                angular.module('Application').controller('sap.sbo.ng4c.header.Center', Center);
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
                var End = (function () {
                    function End($scope, $element) {
                        $scope.className = "sap-sbo-ng4c-header-End";
                        console.log("Header End init");
                    }
                    return End;
                })();
                header.End = End;
                angular.module('Application').controller('sap.sbo.ng4c.header.End', End);
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
                var Header = (function () {
                    function Header($scope, $element) {
                        $scope.template = 'resources/sap/sbo/ng4c/header/Header.html';
                        $scope.className = "sap-sbo-ng4c-header-Header";
                        $scope.activities = [
                            { "name": "Wake up" },
                            { "name": "Brush teeth" },
                            { "name": "Shower" },
                            { "name": "Have breakfast" },
                            { "name": "Go to work" },
                            { "name": "Write a Nettuts article" },
                            { "name": "Go to the gym" },
                            { "name": "Meet friends" },
                            { "name": "Go to bed" }
                        ];
                        console.log("Header init");
                    }
                    return Header;
                })();
                header.Header = Header;
                angular.module('Application').controller('sap.sbo.ng4c.header.Header', Header);
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
            var launchpad;
            (function (launchpad) {
                var Dashboard = (function () {
                    function Dashboard($scope, $element) {
                        $scope.template = 'resources/sap/sbo/ng4c/launchpad/Dashboard.html';
                        $scope.className = "sap-sbo-ng4c-launchpad-Dashboard";
                        console.log("Launchpad init");
                    }
                    return Dashboard;
                })();
                launchpad.Dashboard = Dashboard;
                angular.module('Application').controller('sap.sbo.ng4c.launchpad.Dashboard', Dashboard);
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
                var Launchpad = (function () {
                    function Launchpad($scope, $element) {
                        $scope.className = "sap-sbo-ng4c-launchpad-Launchpad";
                        console.log("Launchpad init");
                    }
                    return Launchpad;
                })();
                launchpad.Launchpad = Launchpad;
                angular.module('Application').controller('sap.sbo.ng4c.launchpad.Launchpad', Launchpad);
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
            var BaseElement = sap.sbo.ng4c.BaseElement;
            var Launchpad = (function (_super) {
                __extends(Launchpad, _super);
                function Launchpad($scope, $element) {
                    _super.call(this, $scope, $element);
                }
                return Launchpad;
            })(BaseElement);
            ng4c.Launchpad = Launchpad;
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var menu;
            (function (menu) {
                var Menu = (function () {
                    function Menu($scope, $element) {
                        $scope.template = "resouces/sap/sbo/ng4c/menu/Menu.html";
                        $scope.className = "sap-sbo-ng4c-menu-Menu";
                        console.log("Menu init");
                    }
                    return Menu;
                })();
                menu.Menu = Menu;
                angular.module('Application').controller('sap.sbo.ng4c.menu.Menu', Menu);
            })(menu = ng4c.menu || (ng4c.menu = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
//# sourceMappingURL=core.js.map