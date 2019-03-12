import {ContactController} from "../controllers/crmController";


export class ContactsRouters {

    public contactController: ContactController = new ContactController();
    public path:string = '/contacts';

    public routes(app): void {
        // Contact
        app.route('/contact')
            .get(this.contactController.getContacts)

            .post(this.contactController.addNewContact);

        app.route('/contact/:contactId')

            .get(this.contactController.getContactWithID)

            .put(this.contactController.updateContact)

            .delete(this.contactController.deleteContact)

    }
}