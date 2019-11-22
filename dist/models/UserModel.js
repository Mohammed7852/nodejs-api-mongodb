"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.UserSchema = new Schema({
    fname: String,
    lname: String,
    email: String,
    mobileNumber: String,
    contacts: [{ type: Schema.Types.ObjectId, ref: 'Contact' }]
}, { collection: 'Users' });
//# sourceMappingURL=UserModel.js.map