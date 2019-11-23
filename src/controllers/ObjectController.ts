import * as mongoose from 'mongoose';
import {Request, Response} from 'express';
import {BitCoinAddressSchema} from "../models/BitCoinAddressModel";

const BitCoinObject = mongoose.model('BitCoinObject', BitCoinAddressSchema);

export class ObjectController {

    public insertObject(req: Request, res: Response) {
        try {
            console.info(['create object function',[JSON.stringify(req.body)]]);
            new BitCoinObject(req.body).save().then(value => {
                console.log('success create bitcoin address',value);
                res.json(value);
            },reason => {
                res.status(500).json(reason);
            });
        } catch (e) {
            res.send(e);
        }
    }

    public insertArray(req: Request, res: Response) {
        try {
            console.info(['insertArray',[JSON.stringify(req.body)]]);
            BitCoinObject.create({Data:req.body}).then(value => {
                console.log('success create bitcoin addresses',value);
                res.json(value);
            },reason => {
                res.status(500).json(reason);
            });
        } catch (e) {
            res.send(e);
        }
    }


    public getObjects(req: Request, res: Response) {
        try {
            console.info('getting all objects !');
            BitCoinObject.find().then(docs => {
                console.log('found objects',docs);
                res.json(docs);
            });
        } catch (e) {
            console.error(e);
            res.status(404).send(e);
        }
    }

    public getObject(req: Request, res: Response) {
        console.log('findObject :: ',req.params.value);
        let query = BitCoinObject.find(
            {$or:[{privateKey:req.params.vlaue},{compressedAddress:req.params.vlaue},
        {index:req.params.vlaue},{unCompressedAddress:req.params.vlaue}]});
        query.exec().then(value => {
           console.log('success find object',value);
           res.send(value);
        },reason => {
            res.send(reason);
        });
    }

}