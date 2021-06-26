import express from 'express';
import { getStudents, addStudent } from '../controller/stdent-controller.js';

const route = express.Router();

route.get('/',  getStudents);
route.post('/add', addStudent);
export default route;