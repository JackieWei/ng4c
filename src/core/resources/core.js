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
                        return packageName.replace(NamingUtil.DOT_REG, NamingUtil.HYPHEN);
                    };
                    NamingUtil.DOT_REG = /\./gi;
                    NamingUtil.SLASH = '/';
                    NamingUtil.HYPHEN = '-';
                    return NamingUtil;
                })();
                util.NamingUtil = NamingUtil;
            })(util = core.util || (core.util = {}));
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
            var NamingUtil = sap.cloud.core.util.NamingUtil;
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
                        function Aside($scope, $element) {
                            _super.call(this, $scope, $element, "sap.sbo.ng4c.launchpad.aside.Aside");
                            $scope.$on("showOrHideMenuBroadcast", $.proxy(this.onShowOrHideMenuBroadcast, this));
                            this.scope = this.$scope;
                            this.scope.width = AsideProps.HIDE_WIDTH;
                        }
                        Aside.prototype.onShowOrHideMenuBroadcast = function (event, showOrHide) {
                            if (showOrHide) {
                                this.scope.width = AsideProps.SHOW_WIDTH;
                            }
                            else {
                                this.scope.width = AsideProps.HIDE_WIDTH;
                            }
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
                var dashboard;
                (function (dashboard) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var AsideProps = sap.sbo.ng4c.launchpad.aside.AsideProps;
                    var Dashboard = (function (_super) {
                        __extends(Dashboard, _super);
                        function Dashboard($scope, $element) {
                            _super.call(this, $scope, $element, "sap.sbo.ng4c.launchpad.dashboard.Dashboard");
                            $scope.$on("showOrHideMenuBroadcast", $.proxy(this.onShowOrHideMenuBroadcast, this));
                            this.scope = this.$scope;
                            this.scope.left = AsideProps.HIDE_WIDTH;
                        }
                        Dashboard.prototype.onShowOrHideMenuBroadcast = function (event, showOrHide) {
                            if (showOrHide) {
                                this.scope.left = AsideProps.SHOW_WIDTH;
                            }
                            else {
                                this.scope.left = AsideProps.HIDE_WIDTH;
                            }
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
                        this.scope = $scope;
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
            var launchpad;
            (function (launchpad) {
                var aside;
                (function (aside) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var LightAccess = (function (_super) {
                        __extends(LightAccess, _super);
                        function LightAccess($scope, $element) {
                            _super.call(this, $scope, $element, "sap.sbo.ng4c.launchpad.aside.LightAccess");
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
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var aside;
                (function (aside) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var Modules = (function (_super) {
                        __extends(Modules, _super);
                        function Modules($scope, $element) {
                            _super.call(this, $scope, $element, "sap.sbo.ng4c.launchpad.aside.Modules");
                            this.scope = this.$scope;
                        }
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
                        function Menu($scope, $element) {
                            _super.call(this, $scope, $element, "sap.sbo.ng4c.launchpad.aside.Menu");
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
                var aside;
                (function (aside) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var ModulesTree = (function (_super) {
                        __extends(ModulesTree, _super);
                        function ModulesTree($scope, $element) {
                            _super.call(this, $scope, $element, "sap.sbo.ng4c.launchpad.aside.ModulesTree");
                            this.myMeny = '{"menu":[{"id":"5EF1BDEA-C353-49ED-AE53-BCED8796A4D3","name":"Administration","create":true,"showListview":false,"nodes":[{"id":"e8e0d201-d81a-4a15-ae5a-2306e2068692","name":"Exchange Rates and Indexes","action":"ORTT","create":true,"showListview":true},{"id":"e108d886-27f3-4322-99b8-78c30bf90bea","name":"System Initialization","create":true,"showListview":false,"nodes":[{"id":"5b71de07-1f33-4d60-9bc4-b1ef9c24c725","name":"Company Details","action":"OADM","create":true,"showListview":false},{"id":"b6be252c-76d4-464c-9547-cc691d8075be","name":"Posting Periods","action":"OFPR","create":true,"showListview":true},{"id":"34183008-9484-41f8-b17f-058319650ecd","name":"Opening Balances","create":true,"showListview":false,"nodes":[{"id":"0ba274d2-69b1-4eb8-a0cd-4f602c23cd5f","name":"G/L Account Opening Balance","action":"OSES","create":true,"showListview":true},{"id":"5049a82b-e6d5-435e-8796-eac3cb55052f","name":"Business Partners Opening Balance","action":"OSES","create":true,"showListview":true}]}]},{"id":"cd7a2ff2-7b40-428e-a56a-8ddda528be51","name":"Setup","create":true,"showListview":false,"nodes":[{"id":"e40117fc-d325-4456-930c-23eb941432fc","name":"General","create":true,"showListview":false,"nodes":[{"id":"F416490A-9E85-484C-9123-329E2CCFAE3D","name":"Users","action":"OUSR","create":true,"showListview":true},{"id":"483485e3-ab42-4565-bd8b-357de188c215","name":"User Defaults","action":"OUDG","create":true,"showListview":true},{"id":"5117789B-C1C6-4DF7-9C68-E5F3FB915D76","name":"Period Indicators","action":"OPID","create":true,"showListview":true}]},{"id":"893f128c-5cbb-4b3e-9bd2-e5d991317d45","name":"Financials","create":true,"showListview":false,"nodes":[{"id":"56EED8A6-BCC7-4AAE-8257-CAAA8A474B00","name":"Currencies","action":"OCRN","create":true,"showListview":true},{"id":"92F0106A-8749-4A6F-BB98-E1BA7A73E456","name":"Projects","action":"OPRJ","create":true,"showListview":true},{"id":"a6ac2e13-98a6-412a-ad61-6851638503ef","name":"Cash Flow Line Items","action":"OCFW","create":true,"showListview":true},{"id":"B5934854-1966-4774-8625-334E1EED72B2","name":"Tax","create":true,"showListview":false,"nodes":[{"id":"a26bb3aa-6980-4fb3-8d9c-8e823154f52b","name":"Goods Shipment","action":"OGSP","create":true,"showListview":true},{"id":"88767e93-6591-4150-a9a0-fb709997696c","name":"Triangular Deal","action":"OIND","create":true,"showListview":true},{"id":"41e4fd53-c7b1-44b4-b499-bdb107cb77d7","name":"Service Supply","action":"OSSP","create":true,"showListview":true},{"id":"BC2200A1-0AEB-4B2F-876C-C20024BB0D0E","name":"Withholding Tax","action":"OWHT","create":true,"showListview":true},{"id":"55C3CD4E-7E6F-49B2-B3ED-5D9824B75B76","name":"Tax Groups","action":"OVTG","create":true,"showListview":true},{"id":"FDAE779A-5277-4230-AA42-41385069D3B0","name":"Tax Declartion Boxes","action":"OBOX","create":true,"showListview":true},{"id":"131F388C-82CB-41A4-B89C-2D8E42B769B3","name":"Tax Code Determination","action":"OTCX","create":true,"showListview":true}]},{"id":"27322e7d-d118-4a05-9dc9-53b99b18029f","name":"Indicators","action":"OIDC","create":true,"showListview":true},{"id":"0611fd80-579f-4468-b4e0-78cb6ead2a3c","name":"Transaction Codes","action":"OTRC","create":true,"showListview":true}]},{"id":"bfcce838-8e78-4150-a89b-3c060d32089f","name":"Business Partners","create":true,"showListview":false,"nodes":[{"id":"C59FCF46-A9C7-4152-AC79-5B5747E3DD29","name":"Business Partners Group","action":"OCRG","create":true,"showListview":true},{"id":"26f49f2c-2dc6-4bf3-a93a-cf4584d01e75","name":"Payment Terms","action":"OCTG","create":true,"showListview":true}]},{"id":"894b8483-4bf6-462b-b611-173f622ce46f","name":"Banking","create":true,"showListview":false,"nodes":[{"id":"1d857b87-fe1f-47a9-86ab-0f886d63a8e0","name":"Banks","action":"ODSC","create":true,"showListview":true},{"id":"2f8efa9b-a12c-4ac5-90e6-753aa3c006c6","name":"House Bank Accounts","action":"ODSC","create":true,"showListview":true}]},{"id":"a8099906-d1d0-4654-90f1-766e7f9a0f45","name":"Inventory","create":true,"showListview":false,"nodes":[{"id":"3865b7fa-6ad6-4291-aa98-2bd211c1c77a","name":"Warewhouse","action":"OWHS","create":true,"showListview":true}]}]},{"id":"a9f13206-888a-4f5d-ad7f-638d9c29a3f2","name":"Data Import/Export","create":true,"showListview":false,"nodes":[{"id":"41aeb441-00e9-45c4-9201-efcdf15c0d67","name":"Data Import","create":true,"showListview":false,"nodes":[{"id":"6bd8ed61-9169-4ed6-8b18-e88372727b38","name":"Import from Excel","action":"OSES","create":true,"showListview":true}]}]},{"id":"d2f8c6cc-999f-4812-8a07-423459430722","name":"Alerts Management","action":"OSES","create":true,"showListview":true}]},{"id":"94AF201E-A805-4CFA-8840-D09362866D4C","name":"Financials","create":true,"showListview":false,"nodes":[{"id":"C0B4DACF-A17F-4201-B88D-03CFA5402FAE","name":"Chart of Accounts","action":"OACT","create":true,"showListview":true},{"id":"6B81D6EE-99F8-4248-922D-7B691B3266BA","name":"Journal Entry","action":"OJDT","create":true,"showListview":true},{"id":"1F0773FB-4413-4371-9B1A-3251409E7717","name":"Journal Vouchers","action":"OBTD","create":true,"showListview":true},{"id":"74C12446-AE6B-4643-A015-78423A5A9467","name":"Posting Templates","action":"OTRT","create":true,"showListview":true},{"id":"491c2161-30df-4012-ab34-4aeb19f9abdd","name":"Recurring Postings","action":"ORCR","create":true,"showListview":true},{"id":"7f708511-0a2c-48a6-8618-ce84e82f593e","name":"Reverse Transactions","action":"OSES","create":true,"showListview":true},{"id":"8a4429fe-22dd-4eae-9019-77f33665630a","name":"Document Printing","action":"OSES","create":true,"showListview":true},{"id":"81ec0149-01cc-4ef3-ae45-6324035e33f8","name":"Internal Reconciliations","create":true,"showListview":false,"nodes":[{"id":"9b16b515-742c-40fc-a201-583dfb3d1eff","name":"Manage Previous Reconciliations","action":"OITR","create":true,"showListview":true}]}]},{"id":"327A888F-FC47-4E53-8568-03EFC542147B","name":"Sales - A/R","create":true,"showListview":false,"nodes":[{"id":"fd0214fa-488c-4163-899e-bfdd6edb3641","name":"Sales Quotation","action":"OQUT","create":true,"showListview":true},{"id":"D69DADFA-6A5F-437F-88CC-A9889EB9BEA9","name":"Sales Order","action":"ORDR","create":true,"showListview":true},{"id":"c5e8c808-2cd7-46ef-bf6b-0dc3bf9b4413","name":"A/R Invoice","action":"OINV","create":true,"showListview":true},{"id":"2df68476-b316-4f28-9527-c8cb3f7ab2d5","name":"A/R Credit Memo","action":"ORIN","create":true,"showListview":true}]},{"id":"2CFFC7F5-A894-4C8A-A05D-9FB3ABD4DFA8","name":"Purchasing - A/P","create":true,"showListview":false,"nodes":[{"id":"c8ce3303-b321-4125-a4b1-0adf8464e168","name":"A/P Invoice","action":"OPCH","create":true,"showListview":true},{"id":"4dfea40f-4032-40d4-8819-67fbb991748c","name":"A/P Credit Memo","action":"ORPC","create":true,"showListview":true}]},{"id":"6E3D6B4A-44B6-407A-AC8A-C7A33BFCD30F","name":"Business Partners","create":true,"showListview":false,"nodes":[{"id":"073B8584-19E0-40CB-9DFE-60E43F3CB5F3","name":"Business Partners Master Data","action":"OCRD","create":true,"showListview":true}]},{"id":"3EE5F9EE-950A-4040-92F2-97F452DE7D83","name":"Banking","create":true,"showListview":false,"nodes":[{"id":"5b2f3a5e-0320-4eb6-9d3b-c17854eaefb3","name":"Incoming Payment","create":true,"showListview":false,"nodes":[{"id":"48285b81-0e1a-4ab9-8df1-2f6cb798bbe3","name":"Incoming Payments","action":"ORCT","create":true,"showListview":true},{"id":"f4688c08-33c1-40b7-a073-85c4cbbceda5","name":"Check Register","action":"OCHH","create":true,"showListview":true},{"id":"cf75f511-2973-4ed3-9929-d8d9056f0715","name":"Credit Card Management","action":"OCRH","create":true,"showListview":true}]},{"id":"cca66a63-9f3b-4feb-b517-e3192da6a1a2","name":"Deposit","create":true,"showListview":false,"nodes":[{"id":"463eb36c-70d1-4089-82a0-abd1e5b5fa20","name":"Deposit","action":"ODPS","create":true,"showListview":true}]},{"id":"551b3f1d-a1e0-4b82-a5e0-0fc24a2dce0f","name":"Outgoing Payments","create":true,"showListview":false,"nodes":[{"id":"5e68ed97-3459-4173-b718-72da0e04d03b","name":"Outgoing Payment","action":"OVPM","create":true,"showListview":true},{"id":"4cde815d-2d2c-47d0-a0bb-b817ca31d61e","name":"Check for Payment","action":"OCHO","create":true,"showListview":true}]}]},{"id":"AE4A7E77-405D-4D9F-9130-6F3D60A46842","name":"Inventory","create":true,"showListview":false,"nodes":[{"id":"4D91DB6D-9B8E-4A04-BFDC-DC9F345C6DC5","name":"Item Master Data","action":"OITM","create":true,"showListview":true}]},{"id":"7AAA5EAA-802C-4D45-958E-9DFA73A7309C","name":"Reports","create":true,"showListview":false,"nodes":[]}]}';
                            this.modules = '{"menu":[{"id":"5EF1BDEA-C353-49ED-AE53-BCED8796A4D3","name":"Administration","create":true,"showListview":false,"nodes":[{"id":"e8e0d201-d81a-4a15-ae5a-2306e2068692","name":"Exchange Rates and Indexes","action":"ORTT","create":true,"showListview":true},{"id":"e108d886-27f3-4322-99b8-78c30bf90bea","name":"System Initialization","create":true,"showListview":false,"nodes":[{"id":"5b71de07-1f33-4d60-9bc4-b1ef9c24c725","name":"Company Details","action":"OADM","create":true,"showListview":false},{"id":"b6be252c-76d4-464c-9547-cc691d8075be","name":"Posting Periods","action":"OFPR","create":true,"showListview":true},{"id":"34183008-9484-41f8-b17f-058319650ecd","name":"Opening Balances","create":true,"showListview":false,"nodes":[{"id":"0ba274d2-69b1-4eb8-a0cd-4f602c23cd5f","name":"G/L Account Opening Balance","action":"OSES","create":true,"showListview":true},{"id":"5049a82b-e6d5-435e-8796-eac3cb55052f","name":"Business Partners Opening Balance","action":"OSES","create":true,"showListview":true}]}]},{"id":"cd7a2ff2-7b40-428e-a56a-8ddda528be51","name":"Setup","create":true,"showListview":false,"nodes":[{"id":"e40117fc-d325-4456-930c-23eb941432fc","name":"General","create":true,"showListview":false,"nodes":[{"id":"F416490A-9E85-484C-9123-329E2CCFAE3D","name":"Users","action":"OUSR","create":true,"showListview":true},{"id":"483485e3-ab42-4565-bd8b-357de188c215","name":"User Defaults","action":"OUDG","create":true,"showListview":true},{"id":"5117789B-C1C6-4DF7-9C68-E5F3FB915D76","name":"Period Indicators","action":"OPID","create":true,"showListview":true}]},{"id":"893f128c-5cbb-4b3e-9bd2-e5d991317d45","name":"Financials","create":true,"showListview":false,"nodes":[{"id":"56EED8A6-BCC7-4AAE-8257-CAAA8A474B00","name":"Currencies","action":"OCRN","create":true,"showListview":true},{"id":"92F0106A-8749-4A6F-BB98-E1BA7A73E456","name":"Projects","action":"OPRJ","create":true,"showListview":true},{"id":"a6ac2e13-98a6-412a-ad61-6851638503ef","name":"Cash Flow Line Items","action":"OCFW","create":true,"showListview":true},{"id":"B5934854-1966-4774-8625-334E1EED72B2","name":"Tax","create":true,"showListview":false,"nodes":[{"id":"a26bb3aa-6980-4fb3-8d9c-8e823154f52b","name":"Goods Shipment","action":"OGSP","create":true,"showListview":true},{"id":"88767e93-6591-4150-a9a0-fb709997696c","name":"Triangular Deal","action":"OIND","create":true,"showListview":true},{"id":"41e4fd53-c7b1-44b4-b499-bdb107cb77d7","name":"Service Supply","action":"OSSP","create":true,"showListview":true},{"id":"BC2200A1-0AEB-4B2F-876C-C20024BB0D0E","name":"Withholding Tax","action":"OWHT","create":true,"showListview":true},{"id":"55C3CD4E-7E6F-49B2-B3ED-5D9824B75B76","name":"Tax Groups","action":"OVTG","create":true,"showListview":true},{"id":"FDAE779A-5277-4230-AA42-41385069D3B0","name":"Tax Declartion Boxes","action":"OBOX","create":true,"showListview":true},{"id":"131F388C-82CB-41A4-B89C-2D8E42B769B3","name":"Tax Code Determination","action":"OTCX","create":true,"showListview":true}]},{"id":"27322e7d-d118-4a05-9dc9-53b99b18029f","name":"Indicators","action":"OIDC","create":true,"showListview":true},{"id":"0611fd80-579f-4468-b4e0-78cb6ead2a3c","name":"Transaction Codes","action":"OTRC","create":true,"showListview":true}]},{"id":"bfcce838-8e78-4150-a89b-3c060d32089f","name":"Business Partners","create":true,"showListview":false,"nodes":[{"id":"C59FCF46-A9C7-4152-AC79-5B5747E3DD29","name":"Business Partners Group","action":"OCRG","create":true,"showListview":true},{"id":"26f49f2c-2dc6-4bf3-a93a-cf4584d01e75","name":"Payment Terms","action":"OCTG","create":true,"showListview":true}]},{"id":"894b8483-4bf6-462b-b611-173f622ce46f","name":"Banking","create":true,"showListview":false,"nodes":[{"id":"1d857b87-fe1f-47a9-86ab-0f886d63a8e0","name":"Banks","action":"ODSC","create":true,"showListview":true},{"id":"2f8efa9b-a12c-4ac5-90e6-753aa3c006c6","name":"House Bank Accounts","action":"ODSC","create":true,"showListview":true}]},{"id":"a8099906-d1d0-4654-90f1-766e7f9a0f45","name":"Inventory","create":true,"showListview":false,"nodes":[{"id":"3865b7fa-6ad6-4291-aa98-2bd211c1c77a","name":"Warewhouse","action":"OWHS","create":true,"showListview":true}]}]},{"id":"a9f13206-888a-4f5d-ad7f-638d9c29a3f2","name":"Data Import/Export","create":true,"showListview":false,"nodes":[{"id":"41aeb441-00e9-45c4-9201-efcdf15c0d67","name":"Data Import","create":true,"showListview":false,"nodes":[{"id":"6bd8ed61-9169-4ed6-8b18-e88372727b38","name":"Import from Excel","action":"OSES","create":true,"showListview":true}]}]},{"id":"d2f8c6cc-999f-4812-8a07-423459430722","name":"Alerts Management","action":"OSES","create":true,"showListview":true}]},{"id":"94AF201E-A805-4CFA-8840-D09362866D4C","name":"Financials","create":true,"showListview":false,"nodes":[{"id":"C0B4DACF-A17F-4201-B88D-03CFA5402FAE","name":"Chart of Accounts","action":"OACT","create":true,"showListview":true},{"id":"6B81D6EE-99F8-4248-922D-7B691B3266BA","name":"Journal Entry","action":"OJDT","create":true,"showListview":true},{"id":"1F0773FB-4413-4371-9B1A-3251409E7717","name":"Journal Vouchers","action":"OBTD","create":true,"showListview":true},{"id":"74C12446-AE6B-4643-A015-78423A5A9467","name":"Posting Templates","action":"OTRT","create":true,"showListview":true},{"id":"491c2161-30df-4012-ab34-4aeb19f9abdd","name":"Recurring Postings","action":"ORCR","create":true,"showListview":true},{"id":"7f708511-0a2c-48a6-8618-ce84e82f593e","name":"Reverse Transactions","action":"OSES","create":true,"showListview":true},{"id":"8a4429fe-22dd-4eae-9019-77f33665630a","name":"Document Printing","action":"OSES","create":true,"showListview":true},{"id":"81ec0149-01cc-4ef3-ae45-6324035e33f8","name":"Internal Reconciliations","create":true,"showListview":false,"nodes":[{"id":"9b16b515-742c-40fc-a201-583dfb3d1eff","name":"Manage Previous Reconciliations","action":"OITR","create":true,"showListview":true}]}]},{"id":"327A888F-FC47-4E53-8568-03EFC542147B","name":"Sales - A/R","create":true,"showListview":false,"nodes":[{"id":"fd0214fa-488c-4163-899e-bfdd6edb3641","name":"Sales Quotation","action":"OQUT","create":true,"showListview":true},{"id":"D69DADFA-6A5F-437F-88CC-A9889EB9BEA9","name":"Sales Order","action":"ORDR","create":true,"showListview":true},{"id":"c5e8c808-2cd7-46ef-bf6b-0dc3bf9b4413","name":"A/R Invoice","action":"OINV","create":true,"showListview":true},{"id":"2df68476-b316-4f28-9527-c8cb3f7ab2d5","name":"A/R Credit Memo","action":"ORIN","create":true,"showListview":true}]},{"id":"2CFFC7F5-A894-4C8A-A05D-9FB3ABD4DFA8","name":"Purchasing - A/P","create":true,"showListview":false,"nodes":[{"id":"c8ce3303-b321-4125-a4b1-0adf8464e168","name":"A/P Invoice","action":"OPCH","create":true,"showListview":true},{"id":"4dfea40f-4032-40d4-8819-67fbb991748c","name":"A/P Credit Memo","action":"ORPC","create":true,"showListview":true}]},{"id":"6E3D6B4A-44B6-407A-AC8A-C7A33BFCD30F","name":"Business Partners","create":true,"showListview":false,"nodes":[{"id":"073B8584-19E0-40CB-9DFE-60E43F3CB5F3","name":"Business Partners Master Data","action":"OCRD","create":true,"showListview":true}]},{"id":"3EE5F9EE-950A-4040-92F2-97F452DE7D83","name":"Banking","create":true,"showListview":false,"nodes":[{"id":"5b2f3a5e-0320-4eb6-9d3b-c17854eaefb3","name":"Incoming Payment","create":true,"showListview":false,"nodes":[{"id":"48285b81-0e1a-4ab9-8df1-2f6cb798bbe3","name":"Incoming Payments","action":"ORCT","create":true,"showListview":true},{"id":"f4688c08-33c1-40b7-a073-85c4cbbceda5","name":"Check Register","action":"OCHH","create":true,"showListview":true},{"id":"cf75f511-2973-4ed3-9929-d8d9056f0715","name":"Credit Card Management","action":"OCRH","create":true,"showListview":true}]},{"id":"cca66a63-9f3b-4feb-b517-e3192da6a1a2","name":"Deposit","create":true,"showListview":false,"nodes":[{"id":"463eb36c-70d1-4089-82a0-abd1e5b5fa20","name":"Deposit","action":"ODPS","create":true,"showListview":true}]},{"id":"551b3f1d-a1e0-4b82-a5e0-0fc24a2dce0f","name":"Outgoing Payments","create":true,"showListview":false,"nodes":[{"id":"5e68ed97-3459-4173-b718-72da0e04d03b","name":"Outgoing Payment","action":"OVPM","create":true,"showListview":true},{"id":"4cde815d-2d2c-47d0-a0bb-b817ca31d61e","name":"Check for Payment","action":"OCHO","create":true,"showListview":true}]}]},{"id":"AE4A7E77-405D-4D9F-9130-6F3D60A46842","name":"Inventory","create":true,"showListview":false,"nodes":[{"id":"4D91DB6D-9B8E-4A04-BFDC-DC9F345C6DC5","name":"Item Master Data","action":"OITM","create":true,"showListview":true}]},{"id":"7AAA5EAA-802C-4D45-958E-9DFA73A7309C","name":"Reports","create":true,"showListview":false,"nodes":[]}]}';
                            this.scope = this.$scope;
                            this.scope.delete = function (data) {
                                data.nodes = [];
                            };
                            this.scope.add = function (data) {
                                var post = data.nodes.length + 1;
                                var newName = data.name + '-' + post;
                                data.nodes.push({ name: newName, nodes: [] });
                            };
                            var modules = JSON.parse(this.modules);
                            this.scope.tree = modules.menu;
                        }
                        return ModulesTree;
                    })(BaseController);
                    aside.ModulesTree = ModulesTree;
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
            var launchpad;
            (function (launchpad) {
                var dashboard;
                (function (dashboard) {
                    var tiles;
                    (function (tiles) {
                        var BaseController = sap.sbo.ng4c.BaseController;
                        var Kpi = (function (_super) {
                            __extends(Kpi, _super);
                            function Kpi($scope, $element) {
                                _super.call(this, $scope, $element, "sap.sbo.ng4c.launchpad.aside.Kpi");
                                this.scope = this.$scope;
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
                        function SearchBar($scope, $element) {
                            _super.call(this, $scope, $element, "sap.sbo.ng4c.launchpad.aside.SearchBar");
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
                        function Tab($scope, $element) {
                            _super.call(this, $scope, $element, "sap.sbo.ng4c.launchpad.aside.Tab");
                            this.scope = this.$scope;
                        }
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
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var aside;
                (function (aside) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var MyMenu = (function (_super) {
                        __extends(MyMenu, _super);
                        function MyMenu($scope, $element) {
                            _super.call(this, $scope, $element, "sap.sbo.ng4c.launchpad.aside.MyMenu");
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
            var app;
            (function (app) {
                var NamingUtil = sap.cloud.core.util.NamingUtil;
                var Registry = (function () {
                    function Registry() {
                    }
                    Object.defineProperty(Registry, "controllers", {
                        get: function () {
                            if (Registry._controllers.length > 0)
                                return Registry._controllers;
                            var collection = Registry._controllers;
                            collection.push({ name: "sap.sbo.ng4c.launchpad.Launchpad", controller: sap.sbo.ng4c.launchpad.Launchpad });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.dashboard.Dashboard", controller: sap.sbo.ng4c.launchpad.dashboard.Dashboard });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.dashboard.tiles.Kpi", controller: sap.sbo.ng4c.launchpad.dashboard.tiles.Kpi });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.Aside", controller: sap.sbo.ng4c.launchpad.aside.Aside });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.LightAccess", controller: sap.sbo.ng4c.launchpad.aside.LightAccess });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.Menu", controller: sap.sbo.ng4c.launchpad.aside.Menu });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.Modules", controller: sap.sbo.ng4c.launchpad.aside.Modules });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.ModulesTree", controller: sap.sbo.ng4c.launchpad.aside.ModulesTree });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.MyMenu", controller: sap.sbo.ng4c.launchpad.aside.MyMenu });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.Tab", controller: sap.sbo.ng4c.launchpad.aside.Tab });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.SearchBar", controller: sap.sbo.ng4c.launchpad.aside.SearchBar });
                            collection.push({ name: "sap.sbo.ng4c.header.Begin", controller: sap.sbo.ng4c.header.Begin });
                            collection.push({ name: "sap.sbo.ng4c.header.End", controller: sap.sbo.ng4c.header.End });
                            collection.push({ name: "sap.sbo.ng4c.header.Center", controller: sap.sbo.ng4c.header.Center });
                            collection.push({ name: "sap.sbo.ng4c.header.Header", controller: sap.sbo.ng4c.header.Header });
                            collection.push({ name: "sap.sbo.ng4c.footer.Footer", controller: sap.sbo.ng4c.footer.Footer });
                            return collection;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Registry.makeControl = function (packageStr, controller, directive) {
                        var directiveName = NamingUtil.toDirective(packageStr);
                        return { controllerName: packageStr, controller: controller, directiveName: packageStr, directive: directive };
                    };
                    Object.defineProperty(Registry, "controls", {
                        get: function () {
                            if (Registry._controls.length > 0)
                                return Registry._controls;
                            var collection = [];
                            collection.push(Registry.makeControl("sap.sbo.ui.controls.Tree", sap.sbo.ui.controls.Tree, sap.sbo.ui.controls.TreeDirective));
                            return collection;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Registry._controllers = [];
                    Registry._controls = [];
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
                        var controls;
                        modules.forEach(function (e) {
                            app.controller(e.name, e.controller);
                        });
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
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var TreeDirective = (function () {
                    function TreeDirective() {
                    }
                    return TreeDirective;
                })();
                controls.TreeDirective = TreeDirective;
                var Tree = (function () {
                    function Tree() {
                    }
                    return Tree;
                })();
                controls.Tree = Tree;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
//# sourceMappingURL=core.js.map