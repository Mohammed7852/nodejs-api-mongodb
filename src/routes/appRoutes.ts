import {Request, Response} from "express";
import {ContactController} from "../controllers/crmController";
import {ContactsRouters} from "./contactsRouters";

export class AppRoutes {

    public contactController: ContactController = new ContactController();
    public contactsRouters: ContactsRouters = new ContactsRouters();

    private appRoutes(app):void{
        app.route('/')
            .get(this.contactController.getContacts);
    }

    public routes(app): void {
        this.appRoutes(app);
        this.contactsRouters.routes(app);
    }

}