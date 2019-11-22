"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = require("../controllers/UserController");
class UserRoutes {
    constructor() {
        this.userController = new UserController_1.UserController();
        this.path = '/user';
    }
    routes(app) {
        app.route('/user')
            .get(this.userController.getUsers)
            .post(this.userController.addNewUser);
        app.route('/getUsers')
            .post(this.userController.getUsers);
        app.route('/user/:id')
            .get(this.userController.getUserById)
            .put(this.userController.updateUser)
            .delete(this.userController.deleteUser);
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=UserRoutes.js.map