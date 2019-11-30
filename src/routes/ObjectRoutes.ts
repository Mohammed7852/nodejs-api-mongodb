import {ObjectController} from "../controllers/ObjectController";


export class ObjectRoutes {

    public objectController : ObjectController = new ObjectController();
    public path:string = '/object';

    public routes(app): void {
        app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        app.route(this.path)
            .get(this.objectController.getObjects)
            .post(this.objectController.insertObject)
            .put(this.objectController.updateObject);

        app.route(this.path+'/insertArray')
            .post(this.objectController.insertArray);

        app.route(this.path+'/testApi')
            .get(this.objectController.testApi);

        app.route(this.path+'/count')
            .get(this.objectController.countObjects);


        app.route(this.path+'/:value')
            .post(this.objectController.testApi)
            .get(this.objectController.getObject);
    }
}