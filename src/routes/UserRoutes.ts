import {UserController} from "../controllers/UserController";


export class UserRoutes {

    public userController : UserController = new UserController();
    public path:string = '/user';

    public routes(app): void {
        app.route('/user')
            .get(this.userController.getUsers)
            .post(this.userController.addNewUser);

        app.route('/getUsers')
            .post(this.userController.getUsers);

        app.route('/user/:id')
            .get(this.userController.getUserById)
            .put(this.userController.updateUser)
            .delete(this.userController.deleteUser)
    }
}