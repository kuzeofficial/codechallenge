import axios from 'axios';

const URL = 'http://localhost:8080/students';


export const getStudents = async (id) => {
    id = id || '';
    return await axios.get(`${URL}/${id}`);
}
export const addStudent = async (user) => {
    return await axios.post(`${URL}/add`, user);
}

export const deleteStudent = async (id) => {
    return await axios.delete(`${URL}/${id}`)
}

export const editStudent = async (id, user) => {
    return await axios.put(`${URL}/${id}`, user)
}

