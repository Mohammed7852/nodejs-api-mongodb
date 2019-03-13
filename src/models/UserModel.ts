import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    fname: String,
    lname: String,
    email: String,
    mobileNumber:String,
    contacts:[{type:Schema.Types.ObjectId,ref:'Contact'}]
},{collection:'Users'});
