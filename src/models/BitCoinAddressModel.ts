import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const BitCoinAddressSchema = new Schema({
    privateKey: String ,
    addressCompressed: String,
    addressUnCompressed: String,
    index:String,
},{collection:'BitCoinObject'});
