import {Request, Response} from 'express';
import {mysqlConnection} from "../index";
import {Catalog} from "../entity/Catalog";


export class CatalogController {

    public testApi(req: Request, res: Response) {
        try {
            console.log({
                note: 'we are in testApi',
                params: req.params,
                body: req.body
            });
            res.send(true);
        } catch (e) {
            res.send(e);
        }
    }

    public async saveCatalog(req: Request, res: Response) {
        try {
            console.log({
                note: 'we are in saveCatalog',
                body:req.body
            });
            let catalog = new Catalog();
            catalog = req.body.catalog as Catalog;
            console.info('we are saving ',catalog);
            catalog = await mysqlConnection.manager.save(Catalog,catalog);

            console.log('Catalog has been saved',catalog);

            res.send(catalog);
        } catch (e) {
            res.send(e);
        }
    }

    public async findAll(req: Request, res: Response) {
        try {
            let catalogs = await mysqlConnection.manager.find(Catalog);
            console.log({
                note: 'we are in findAll',
                catalogs:catalogs
            });
            res.json(catalogs);
        } catch (e) {
            res.send(e);
        }
    }

    public async findOne(req: Request, res: Response) {
        try {

            console.info({
                note:'findOne',
                body:req.body
            });

            let value = req.body.search;
            let query = {
                where:[{ id:value},{ isPublished: value },{ journal: value }]
            };
            console.log({
                query:query
            });

            const catalog = await mysqlConnection.manager.findOne(Catalog,query);
            console.log('found catalog ::',catalog);

            res.json(catalog);
        } catch (e) {
            res.send(e);
        }
    }


}