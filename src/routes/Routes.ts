import {Request, Response} from "express";
import {ContactController} from "../controllers/crmController";
import {ContactsRouters} from "./contactsRouters";

export class Routes {

    public contactController: ContactController = new ContactController();
    public contactsRouters: ContactsRouters = new ContactsRouters();

    private appRoutes(app):void{
        app.route('/')
            .get(this.contactController.getContacts);
        app.route('/test')
            .get((req: Request, res: Response) => {
                res.status(200).send(
                    'test !'
                )
            });
    }

    public routes(app): void {
        this.appRoutes(app);
        this.contactsRouters.routes(app);
    }

}