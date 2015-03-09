module sap.cloud.core.util {
    export class NamingUtil {
        private static DOT_REG: RegExp = /\./gi;
        private static SLASH: string = '/';
        private static HYPHEN: string = '-';

        public static toCssName(packageName: string): string {
            return packageName.replace(NamingUtil.DOT_REG, NamingUtil.HYPHEN);
        }

        public static toPath(packageName: string): string {
            return packageName.replace(NamingUtil.DOT_REG, NamingUtil.SLASH);
        }

        public static toDirective(packageName: string): string {
            return packageName.replace(NamingUtil.DOT_REG, NamingUtil.HYPHEN);
        }
    }
}