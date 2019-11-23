import {ObjectController} from "../controllers/ObjectController";


export class ObjectRoutes {

    public objectController : ObjectController = new ObjectController();
    public path:string = '/object';

    public routes(app): void {
        app.route(this.path)
            .get(this.objectController.getObjects)
            .post(this.objectController.insertObject)
            .put(this.objectController.updateObject);

        app.route(this.path+'/insertArray')
            .post(this.objectController.insertArray);

        app.route(this.path+'/:value')
            .get(this.objectController.getObject);
    }
}