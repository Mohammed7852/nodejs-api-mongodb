import {Request, Response} from 'express';
import {mysqlConnection} from "../index";
import {Catalog} from "../entity/Catalog";
import {BitcoinAddress} from "../entity/BitcoinAddress";
import {Equal, Like} from "typeorm";


export class BitcoinController {

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

    public async saveAddress(req: Request, res: Response) {
        try {
            console.log({
                // note: 'we are in saveAddress',
                // body:req.body
            });
            let address = new BitcoinAddress();
            address = req.body.address as BitcoinAddress;
            // console.info('we are saving ',address);
            address = await mysqlConnection.manager.save(BitcoinAddress,address);
            console.log('Address has been saved');
            res.send(address);
        } catch (e) {
            res.send(e);
        }
    }

    public async findAll(req: Request, res: Response) {
        try {
            let addresses = await mysqlConnection.manager.find(BitcoinAddress);
            console.log({
                // note: 'we are in findAll',
                // addresses:addresses
            });
            res.json(addresses);
        } catch (e) {
            res.send(e);
        }
    }

    public async findOne(req: Request, res: Response) {
        try {
            console.log({
                note: 'we are in findOne',
                // body:req.body
            });
            let value = req.body.search;
            let query = {
                where:[{ id:Like(value)},{ privateKey: Like(value) },{ addressCompressed: Like(value) },
                    { addressUnCompressed: Like(value) },{ index: Like(value) }]
            };
            // console.info('our query is',query);
            const address = await mysqlConnection.manager.find(BitcoinAddress,query).then(result => {
                console.info('result found ');
                res.json(result);
            });
        } catch (e) {
            res.send(e);
        }
    }

    public async countAll(req: Request, res: Response) {
        try {
            console.log({
                // note: 'we are in countAll',
                body:req.body
            });
            const count = await mysqlConnection.manager.count(BitcoinAddress);
            console.info('found count ::',count);
            res.json(count);
        } catch (e) {
            res.send(e);
        }
    }


}