"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const crmModel_1 = require("../models/crmModel");
const Contact = mongoose.model('Contact', crmModel_1.ContactSchema);
class ContactController {
    addNewContact(req, res) {
        try {
            console.info('creating this contact :', [req.body]);
            let newContact = new Contact(req.body);
            newContact.save().then(contact => {
                res.json(contact);
            });
        }
        catch (e) {
            res.send(e);
        }
    }
    getContacts(req, res) {
        try {
            console.info('getting all contacts !');
            Contact.find().then(docs => {
                res.json(docs);
            });
        }
        catch (e) {
            console.error(e);
            res.status(404).send(e);
        }
    }
    getContactWithID(req, res) {
        Contact.findById(req.params.contactId, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    findContactsByQuery(req, res) {
        try {
            const bodyValue = req.body.value;
            console.info('query to find is :', [req.body, bodyValue]);
            let query = {
                $or: [
                    { firstName: { $regex: bodyValue.toLowerCase(), $options: "$i" } },
                    { lastName: { $regex: bodyValue.toLowerCase(), $options: "$i" } },
                    { email: { $regex: bodyValue.toLowerCase(), $options: "$i" } },
                    { company: { $regex: bodyValue.toLowerCase(), $options: "$i" } }
                ]
            };
            Contact.find(query).skip(3).limit(5).select({ firstName: true }).exec().then(docs => {
                res.json(docs);
            });
        }
        catch (e) {
            console.error(e);
            res.send(e);
            res.status(404).send(e.toString());
        }
    }
    updateContact(req, res) {
        Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    deleteContact(req, res) {
        Contact.remove({ _id: req.params.contactId }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!' });
        });
    }
}
exports.ContactController = ContactController;
//# sourceMappingURL=crmController.js.map