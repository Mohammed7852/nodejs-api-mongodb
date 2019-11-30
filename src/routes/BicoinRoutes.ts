import {BitcoinController} from "../controllers/BitcoinController";


export class BicoinRoutes {

    public bitcoinController  = new BitcoinController();
    public path:string = '/address';

    public routes(app): void {
        app.route(this.path)
            .get(this.bitcoinController.findAll)
            .post(this.bitcoinController.saveAddress);

        app.route(this.path+'/testApi')
            .get(this.bitcoinController.testApi);

        app.route(this.path+'/countAll')
            .get(this.bitcoinController.countAll);

        app.route(this.path+'/getOne')
            .post(this.bitcoinController.findOne)

    }
}