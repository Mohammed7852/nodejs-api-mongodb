import * as mongoose from 'mongoose';
import {Request, Response} from 'express';
import {BitCoinAddressSchema} from "../models/BitCoinAddressModel";

const BitCoinObject = mongoose.model('BitCoinObject', BitCoinAddressSchema);

export class ObjectController {

    public insertObject(req: Request, res: Response) {
        try {
            console.log({
                note:'we are in insertObject',
                params:req.params,
                body:req.body
            });
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
            console.log({
                note:'we are in insertArray',
                params:req.params,
                body:req.body
            });
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
            console.log({
                note:'we are in getObjects',
                params:req.params,
                body:req.body
            });
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
        console.log({
            note:'we are in get object',
            params:req.params,
            body:req.body
        });
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