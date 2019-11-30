import {CatalogController} from "../controllers/CatalogController";


export class CatalogRoutes {

    public catalogController  = new CatalogController();
    public path:string = '/catalog';

    public routes(app): void {
        app.route(this.path)
            .get(this.catalogController.findAll)
            .post(this.catalogController.saveCatalog);

        app.route(this.path+'/testApi')
            .get(this.catalogController.testApi);


        app.route(this.path+'/getOne')
            .get(this.catalogController.findOne)

    }
}