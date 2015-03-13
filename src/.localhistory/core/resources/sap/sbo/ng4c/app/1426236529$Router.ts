module sap.sbo.ng4c.app {
    export class Router {
        private static SLASH: string = '/';
        private static EMPTY: string = '';
        private static DOT: string = '.';

        private static LIST: string = 'list';
        private static DETAIL: string = 'detail';

        public constructor() {
        }

        public hashTo(fragments:string[]) {
            var hash: string[] = ["#"];
            for (var i = 0, total = fragments.length; i < total; i++) {
                hash.push(fragments[i]);
            }
            return hash.join();
        }

        public hashToList(boAbbr:string) {
            this.hashTo([Router.LIST, boAbbr]);
        }

        public hashToDetail(boAbbr: string, boIdx:string) {
            this.hashTo([Router.DETAIL, boAbbr, boIdx]);
        }
    }
} 