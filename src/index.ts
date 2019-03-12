import * as express from "express";
import * as book from "./models/book";
import * as mongoose from "mongoose";
import {Mongodb} from "./mongodb-connection/Mongodb";
import {Request} from "express";
import {Response} from "express";
import * as bodyParser from "body-parser";

import { Routes } from "./routes/Routes";

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost/CRMdb';

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
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }

}

export default new App().app;
