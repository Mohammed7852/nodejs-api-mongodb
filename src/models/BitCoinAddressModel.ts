import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const BitCoinAddressSchema = new Schema({
    privateKey: String ,
    compressedAddress: String,
    unCompressedAddress: String,
    index:String,
},{collection:'BitCoinObject'});
