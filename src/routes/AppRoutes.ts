import {ContactController} from "../controllers/crmController";
import {ContactsRouters} from "./contactsRouters";
import {UserRoutes} from "./UserRoutes";

export class AppRoutes {

    public contactController = new ContactController();
    public contactsRouters  = new ContactsRouters();
    public userRoutes = new UserRoutes();

    private appRoutes(app):void{
        app.route('/')
            .get(this.contactController.getContacts);
    }

    public routes(app): void {
        this.appRoutes(app);
        this.contactsRouters.routes(app);
        this.userRoutes.routes(app);
    }

}