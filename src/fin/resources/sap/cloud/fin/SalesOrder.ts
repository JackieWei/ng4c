module sap.cloud.fin {

    import TemplateEngine = sap.cloud.core.TemplateEngine;

    export class SalesOrder {
        public cancel(): void {
            new TemplateEngine().render(); 
        }
    }
}