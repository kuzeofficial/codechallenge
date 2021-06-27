import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import Routes from './route/route.js';

const app = express(); 

// To handle HTTP POST requests in Express.js version 4 and above, you need to install the middleware module called body-parser.
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/students', Routes);
const URL ='mongodb://user:user@crud-codechallenge-shard-00-00.vazjq.mongodb.net:27017,crud-codechallenge-shard-00-01.vazjq.mongodb.net:27017,crud-codechallenge-shard-00-02.vazjq.mongodb.net:27017/CRUDAPP?ssl=true&replicaSet=atlas-he3wzk-shard-0&authSource=admin&retryWrites=true&w=majority'
const PORT = '8080'; 

// connect with the database, takes two arguments 1 - connection url 2 - object with all the options
// Some of the functions, features are deprecated so it might give you a warning, to avoid that warning
// use ----> useNewUrlParser: true 
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,useCreateIndex : true }).then(() => { 
    // we need .then becausew
    //it returns a promise 
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})

// We can do something like this or we can set it directly in the url as well
// mongoose.set('useFindAndModify', false);