import * as mongoose from 'mongoose';
import {ContactSchema} from '../models/crmModel';
import {Request, Response} from 'express';

const Contact = mongoose.model('Contact', ContactSchema);

export class ContactController {

    public addNewContact(req: Request, res: Response) {
        try {
            console.info('creating this contact :',[req.body]);
            let newContact = new Contact(req.body);
            newContact.save().then(contact => {
                res.json(contact);
            })
        } catch (e) {
            res.send(e);
        }
    }

    public getContacts(req: Request, res: Response) {
        try {
            console.info('getting all contacts !');
            Contact.find().then(docs => {
                res.json(docs);
            });
        } catch (e) {
            console.error(e);
            res.status(404).send(e);
        }
    }

    public getContactWithID(req: Request, res: Response) {
        Contact.findById(req.params.contactId, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    public findContactsByQuery(req: Request, res: Response) {
        try {
            const bodyValue = req.body.value;

            console.info('query to find is :', [req.body, bodyValue]);

            let query = {
                $or: [
                    {firstName: {$regex: bodyValue.toLowerCase(), $options: "$i"}},
                    {lastName: {$regex: bodyValue.toLowerCase(), $options: "$i"}},
                    {email: {$regex: bodyValue.toLowerCase(), $options: "$i"}},
                    {company: {$regex: bodyValue.toLowerCase(), $options: "$i"}}
                ]
            };

            Contact.find(query).skip(3).limit(5).select({firstName: true}).exec().then(docs => {
                res.json(docs);
            })

        } catch (e) {
            console.error(e);
            res.send(e);
            res.status(404).send(e.toString());
        }
    }


    public updateContact(req: Request, res: Response) {
        Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, {new: true}, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    public deleteContact(req: Request, res: Response) {
        Contact.remove({_id: req.params.contactId}).exec().then(value => {
            console.log('success remove');
        },reason => {
            console.error('error remove',reason);
        });
    }

}