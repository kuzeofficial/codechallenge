import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import Routes from './route/route.js';

const app = express();

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Step 2 ------------------->
app.use('/students', Routes);

const URL = 'mongodb://user:user@crud-codechallenge-shard-00-00.vazjq.mongodb.net:27017,crud-codechallenge-shard-00-01.vazjq.mongodb.net:27017,crud-codechallenge-shard-00-02.vazjq.mongodb.net:27017/CRUDAPP?ssl=true&replicaSet=atlas-he3wzk-shard-0&authSource=admin&retryWrites=true&w=majority'

const PORT = process.env.PORT || '8080'

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex : true}).then(() => { 
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})
