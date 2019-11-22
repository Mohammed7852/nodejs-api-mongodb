"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UserModel_1 = require("../models/UserModel");
const User = mongoose.model('User', UserModel_1.UserSchema);
class UserController {
    addNewUser(req, res) {
        try {
            console.info('adding this user :', [req.body]);
            let newUser = new User(req.body);
            newUser.save().then(contact => {
                res.json(contact);
            });
        }
        catch (e) {
            res.send(e);
        }
    }
    getUsers(req, res) {
        try {
            console.info('getting all users !');
            User.find().populate('contacts').then(docs => {
                res.json(docs);
            });
        }
        catch (e) {
            console.error(e);
            res.status(404).send(e);
        }
    }
    getUserById(req, res) {
        User.findById(req.params.contactId, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    deleteUser(req, res) {
        User.remove({ _id: req.params.contactId }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted user!' });
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map