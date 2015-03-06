/// <reference path="scope.ts" />
module sap.sbo.ng4c {
    export class BaseController {
        private static DOT_REG = /\./gi;
        private static HYPHEN = "-";
        private static SLASH = "/";
        private static DOT = ".";

        protected $scope: Scope;
        protected $element: JQuery;
        protected $package: string;

        protected klass: string;
        protected module: string;

        public constructor($scope: Scope, $element: JQuery, $package: string) {
            this.$scope = $scope;
            this.$element = $element;

            var lastIndex: number = $package.lastIndexOf(BaseController.DOT);
            var moduleStr = lastIndex < 0 ? "" : $package.slice(0, lastIndex);
            var klassName = lastIndex < 0 ? $package : $package.slice(lastIndex + 1);

            this.$package = $package;
            this.klass = klassName;
            this.module = moduleStr;

            this.registerTemplate($package);
            this.registerCssName($package);

            console.log(this.$package + " initialize!");
        }

        private translateFromPackageToSlashPath(packageStr: string): string {
            return packageStr.replace(BaseController.DOT_REG, BaseController.SLASH);
        }

        private translateFromPackageToCssClassName(packageStr: string): string {
            return packageStr.replace(BaseController.DOT_REG, BaseController.HYPHEN);
        }

        protected registerTemplate(templatePackage: string): void {
            this.$scope.template = "resources/" + this.translateFromPackageToSlashPath(templatePackage) + ".html";
        }

        protected registerCssName(cssName): void {
            this.$scope.className = this.translateFromPackageToCssClassName(cssName);
        }
    }
}