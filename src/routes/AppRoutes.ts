
import {ObjectRoutes} from "./ObjectRoutes";
import {CatalogRoutes} from "./CatalogRoutes";
import {BicoinRoutes} from "./BicoinRoutes";

export class AppRoutes {

    public objectRoutes = new ObjectRoutes();
    public catalogRoutes = new CatalogRoutes();
    public bitcoinRoutes = new BicoinRoutes();

    private appRoutes(app):void{
        app.route('/')
            .get((req,res)=>{
                console.info({
                    note:'default route',
                    body:req.body,
                    params:req.params
                });
                return res.json("Hello world !");
            });
    }

    public routes(app): void {
        app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        this.appRoutes(app);
        this.catalogRoutes.routes(app);
        this.bitcoinRoutes.routes(app);
    }

}