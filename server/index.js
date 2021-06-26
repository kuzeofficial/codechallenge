import express from 'express';
import mongoose from 'mongoose';

const app = express();

const PORT = "8000";
const URL = 'mongodb://user:user@crud-codechallenge-shard-00-00.vazjq.mongodb.net:27017,crud-codechallenge-shard-00-01.vazjq.mongodb.net:27017,crud-codechallenge-shard-00-02.vazjq.mongodb.net:27017/CRUD-CodeChallenge?ssl=true&replicaSet=atlas-he3wzk-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
    console.log('Database Connected')
    app.listen(PORT, () => {
        console.log(`Server is running successfully on Port ${PORT}`);
    });
}).catch(error => {
    console.log('Error: ',  error.message)
})
