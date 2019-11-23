import * as mongoose from 'mongoose';
import {Request, Response} from 'express';
import {BitCoinAddressSchema} from "../models/BitCoinAddressModel";

const BitCoinObject = mongoose.model('BitCoinObject', BitCoinAddressSchema,'BitCoinObject');

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
            const insertArray = req.body;
            console.log({
                note:'we are in insertArray',
                params:req.params,
                body:req.body,
                insertArray:insertArray
            });
            BitCoinObject.collection.insertMany(insertArray).then(response=>{
                console.log('success insert array');
                res.send(response);
            },reason=>{
                console.error('error insert array');
                res.send(reason);
            })
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
        const queryValue  = req.params.value;
        BitCoinObject.find({$or:[{index:queryValue},{privateKey:queryValue},{compressedAddress:queryValue},
        {unCompressedAddress:queryValue}]}).exec().then(response=>{
            res.send(response);
        },reason=>{
            res.send(reason);
        });
    }

    public updateObject(req:Request,res:Response){
        try {
            console.log({
                note:'we are in updateObject',
                params:req.params,
                body:req.body
            });
            const updateObject = req.body;
            BitCoinObject.updateOne({index:updateObject.index},updateObject).exec().then(response=>{
                console.info('success update object', response);
                res.send(response);
            },reason=>{
                console.error('error update object');
                res.send(reason);
            });
        } catch (error) {
            res.send(error);
        }
    }

}