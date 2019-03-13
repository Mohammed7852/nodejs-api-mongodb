import * as mongoose from 'mongoose';
import {Request, Response} from 'express';
import {UserSchema} from "../models/UserModel";

const User = mongoose.model('User', UserSchema);

export class UserController {

    public addNewUser(req: Request, res: Response) {
        try {
            console.info('adding this user :',[req.body])
            let newUser = new User(req.body);
            newUser.save().then(contact => {
                res.json(contact);
            })
        } catch (e) {
            res.send(e);
        }
    }

    public getUsers(req: Request, res: Response) {
        try {
            console.info('getting all users !');
            User.find().populate('contacts').then(docs => {
                res.json(docs);
            });
        } catch (e) {
            console.error(e);
            res.status(404).send(e);
        }
    }

    public getUserById(req: Request, res: Response) {
        User.findById(req.params.contactId, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }


    public updateUser(req: Request, res: Response) {
        User.findOneAndUpdate({_id: req.params.contactId}, req.body, {new: true}, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    public deleteUser(req: Request, res: Response) {
        User.remove({_id: req.params.contactId}, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json({message: 'Successfully deleted user!'});
        });
    }

}