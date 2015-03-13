module sap.sbo.ng4c.app {
    export class Router {
        public constructor() {
        }

        public hashTo(fragments:string[]) {
            var hash: string[] = ["#"];
            for (var i = 0, total = fragments.length; i < total; i++) {
                hash.push('/' + fragments[i]);
            }
        }

        public hashToList(boAbbr:string) {
            this.hashTo(["list", boAbbr]);
        }

        public hashToDetail(boAbbr: string, boIdx:string) {
            this.hashTo(["list", boAbbr, boIdx]);
        }
    }
} 