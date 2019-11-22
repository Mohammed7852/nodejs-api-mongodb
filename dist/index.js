"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const AppRoutes_1 = require("./routes/AppRoutes");
class App {
    constructor() {
        this.routePrv = new AppRoutes_1.AppRoutes();
        this.currentHost = 'localhost';
        this.databaseName = 'my-test-db'; //'first-mongodb';
        this.mongoUrl = `mongodb://${this.currentHost}/${this.databaseName}`;
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}
exports.default = new App().app;
//# sourceMappingURL=index.js.map