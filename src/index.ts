import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import { AppRoutes } from "./routes/AppRoutes";
import {Connection, createConnection} from "typeorm";
import {mysqlConfiguration} from "./configuraiton";

export let mysqlConnection:Connection;

class App {

    public app: express.Application;
    public appRoutes: AppRoutes = new AppRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.appRoutes.routes(this.app);
        // this.mongoSetup();
        this.mysqlConnection();
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    public async mysqlConnection(){
        // @ts-ignore
         mysqlConnection = await createConnection(mysqlConfiguration).then(async connection => {
             mysqlConnection = connection;
             console.info('success mysql connection',connection.isConnected);
             return connection;
         },reason => {
             console.error('error mysql connection',reason);
             return null;
         });
    }

    private mongoSetup(): void{
        let currentHost = 'localhost';
        let databaseName =  'my-test-db';
        let mongoUrl: string = `mongodb://${currentHost}/${databaseName}`;
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useUnifiedTopology', true);
        mongoose.connect(mongoUrl).then(value => {
            console.log('success connection')
        },reason => {
            console.error('error connection',reason)
        });
    }

}

export default new App().app;
