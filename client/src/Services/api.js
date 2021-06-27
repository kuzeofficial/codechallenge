import axios from 'axios';

const URL = 'http://localhost:8080/students';
const URL_ADD = 'http://localhost:8080/students/add'

export const getStudents = async () => {
    return await axios.get(URL);
}
export const addStudent = async (user) => {
    return await axios.post(URL_ADD, user);
}