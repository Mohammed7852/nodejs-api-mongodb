import * as mongoose from 'mongoose';
import {strict} from "assert";

const Schema = mongoose.Schema;


export const ContactSchema = new Schema({
    fname: {
        type: String,
        required: 'Enter a first name'
    },
    lname: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    mobileNumber: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    user:[],
    temp:Object
},{collection:'Contacts'});
