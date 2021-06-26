import express from 'express';
const route = express.Router();

route.get('/', (request, response) => {
    response.status(200).json('Hi this is a CodeChallenge of a Interview')
})

export default route;