var sap;
(function (sap) {
    var cloud;
    (function (cloud) {
        var fin;
        (function (fin) {
            var TemplateEngine = sap.cloud.core.TemplateEngine;
            var SalesOrder = (function () {
                function SalesOrder() {
                }
                SalesOrder.prototype.cancel = function () {
                    new TemplateEngine().render();
                };
                return SalesOrder;
            })();
            fin.SalesOrder = SalesOrder;
        })(fin = cloud.fin || (cloud.fin = {}));
    })(cloud = sap.cloud || (sap.cloud = {}));
})(sap || (sap = {}));
//# sourceMappingURL=fin.js.map