"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("../controllers/crmController");
const contactsRouters_1 = require("./contactsRouters");
const UserRoutes_1 = require("./UserRoutes");
class AppRoutes {
    constructor() {
        this.contactController = new crmController_1.ContactController();
        this.contactsRouters = new contactsRouters_1.ContactsRouters();
        this.userRoutes = new UserRoutes_1.UserRoutes();
    }
    appRoutes(app) {
        app.route('/')
            .get(this.contactController.getContacts);
    }
    routes(app) {
        this.appRoutes(app);
        this.contactsRouters.routes(app);
        this.userRoutes.routes(app);
    }
}
exports.AppRoutes = AppRoutes;
//# sourceMappingURL=AppRoutes.js.map