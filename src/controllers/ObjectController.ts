import * as mongoose from 'mongoose';
import {Request, response, Response} from 'express';
import {BitCoinAddressSchema} from "../models/BitCoinAddressModel";

const BitCoinObject = mongoose.model('BitCoinObject', BitCoinAddressSchema, 'BitCoinObject');

export class ObjectController {

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

    public countObjects(req: Request, res: Response) {
        try {
            console.log({
                note: 'we are in countObjects',
                params: req.params,
                body: req.body
            });
            BitCoinObject.countDocuments({}).then(response=>{
                console.info('count documents',response);
                res.send({count:response});
            },reason=>{
                res.send('error counting documents');
            });
        } catch (e) {
            res.send(e);
        }
    }


    public insertObject(req: Request, res: Response) {
        try {
            console.log({
                note: 'we are in insertObject',
                // params: req.params,
                // body: req.body
            });
            new BitCoinObject(req.body).save().then(value => {
                console.log('success create bitcoin address');
                res.json('success insert');
            }, reason => {
                res.status(500).json('error insert');
            });
        } catch (e) {
            res.send(e);
        }
    }

    public insertArray(req: Request, res: Response) {
        try {
            const insertArray = req.body;
            console.log({
                note: 'we are in insertArray',
            });
            BitCoinObject.collection.insertMany(insertArray).then(response => {
                console.log('success insert array');
                res.send('success insert');
            }, reason => {
                console.error('error insert array');
                res.send(reason);
            });
        } catch (e) {
            res.send(e);
        }
    }


    public getObjects(req: Request, res: Response) {
        try {
            console.log({
                note: 'we are in getObjects',
                params: req.params,
                body: req.body
            });
            BitCoinObject.find().then(docs => {
                console.log('found objects', docs);
                res.json(docs);
            });
        } catch (e) {
            console.error(e);
            res.status(404).send(e);
        }
    }

    public getObject(req: Request, res: Response) {
        console.log({
            note: 'we are in get object',
            params: req.params,
            body: req.body
        });
        const queryValue = req.params.value;
        BitCoinObject.find({
            $or: [{index: queryValue}, {privateKey: queryValue}, {addressCompressed: queryValue},
                {addressUnCompressed: queryValue}]
        }).exec().then(response => {
            res.send(response);
        }, reason => {
            res.send(reason);
        });
    }

    public updateObject(req: Request, res: Response) {
        try {
            console.log({
                note: 'we are in updateObject',
                params: req.params,
                body: req.body
            });
            const updateObject = req.body;
            BitCoinObject.updateOne({index: updateObject.index}, updateObject).exec().then(response => {
                console.info('success update object', response);
                res.send(response);
            }, reason => {
                console.error('error update object');
                res.send(reason);
            });
        } catch (error) {
            res.send(error);
        }
    }

}