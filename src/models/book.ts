import { Request, Response } from "express";
import * as mongoose from "mongoose";

export let allBooks = (req: Request, res: Response) => {
    res.send("Returns  all Books from server");
};

export let getBook = (req: Request, res: Response) => {
    res.send("Returns one book");
};

export let deleteBook = (req: Request, res: Response) => {
    res.send("Returns one book");
};

export let updateBook = (req: Request, res: Response) => {
    res.send("Returns one book");
};

export let addBook = (req: Request, res: Response) => {
    res.send("Returns one book");
};


export interface IBook extends mongoose.Document {
    title: string;
    author: number;
}

export const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});

const Book = mongoose.model<IBook>("Book", BookSchema);
export default Book;
