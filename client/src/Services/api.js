import axios from 'axios';

// This can set in a .env file for better performance and debugging
const URL = 'http://localhost:8080/students';

export const getStudents = async (id) => {
    id = id || '';
    return await axios.get(`${URL}/${id}`);
}

export const addStudent = async (student) => {
    return await axios.post(`${URL}/add`, student);
}

export const deleteStudent = async (id) => {
    return await axios.delete(`${URL}/${id}`);
}

// Function for editStudent receives the parameters {id and student}
export const editStudent = async (id, student) => {
    return await axios.put(`${URL}/${id}`, student);
}