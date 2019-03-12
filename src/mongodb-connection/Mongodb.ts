import * as mongoose from "mongoose";
import * as mongo from "mongodb";


export class Mongodb {

    client:any;
    uri: string = "mongodb://127.0.0.1:27017/test";
    async connect() { // add async
        console.log('connecting to mongo');

        try {


            mongoose.connect(this.uri, (err: any,db) => {
                if (err) {
                    console.log(err.message);
                } else {
                    console.log("Succesfully Connected!" , db);
                }
            });

        } catch(error) {
            console.log('error during connecting to mongo: ');
            console.error(error);
        }
    }

}




// const uri: string = "mongodb://127.0.0.1:27017/xxxx";
//
// mongoose.connect(uri, (err: any) => {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log("Succesfully Connected!" , uri);
//     }
// });
