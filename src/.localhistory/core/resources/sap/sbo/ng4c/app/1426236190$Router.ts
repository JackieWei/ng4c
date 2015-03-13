module sap.sbo.ng4c.app {
    export class Router {
        public constructor() {
        }

        public hashTo(fragments:string[]) {

        }

        public hashToList(boAbbr:string) {
            this.hashTo(["list", boAbbr]);
        }

        public hashToDetail(boAbbr: string, boIdx:string) {
            this.hashTo(["list", boAbbr, boIdx]);
        }
    }
} 