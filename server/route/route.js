import express from 'express';
import { getStudents, addStudent, getStudentById, editStudent, deleteStudent } from '../controller/stdent-controller.js';

const router = express.Router();

router.get('/', getStudents);
router.post('/add', addStudent);
router.get('/:id', getStudentById);
router.put('/:id', editStudent);
router.delete('/:id', deleteStudent);

export default router;