"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.ContactSchema = new Schema({
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
    user: [],
    temp: Object
}, { collection: 'Contacts' });
//# sourceMappingURL=crmModel.js.map