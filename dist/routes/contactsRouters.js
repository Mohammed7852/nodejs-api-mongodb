"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("../controllers/crmController");
class ContactsRouters {
    constructor() {
        this.contactController = new crmController_1.ContactController();
        this.path = '/contacts';
    }
    routes(app) {
        app.route('/contact')
            .get(this.contactController.getContacts)
            .post(this.contactController.addNewContact);
        app.route('/getContacts')
            .post(this.contactController.findContactsByQuery);
        app.route('/contact/:contactId')
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact);
    }
}
exports.ContactsRouters = ContactsRouters;
//# sourceMappingURL=contactsRouters.js.map