import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import { AppRoutes } from "./routes/AppRoutes";


class App {

    public app: express.Application;
    public routePrv: AppRoutes = new AppRoutes();
    public  currentHost = 'localhost';
    public  databaseName =  'my-test-db';//'first-mongodb';

    public mongoUrl: string = `mongodb://${this.currentHost}/${this.databaseName}`;

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }
    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void{

        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useUnifiedTopology', true);

        mongoose.connect(this.mongoUrl).then(value => {
            console.log('success connection')
        },reason => {
            console.error('error connection',reason)
        });
    }

}

export default new App().app;
