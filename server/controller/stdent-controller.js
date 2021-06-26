import Student from '../models/student.js';


export const getStudents = async (request, response) => {
    try{
        const students = await Student.find();
        response.status(200).json(students);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

export const addStudent = async (request, response) => {
    const student = request.body;
    console.log("Student Added")

    const newStudent = new Student(student);
    try{
        await newStudent.save();
        response.status(201).json(newStudent);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export const getStudentById = async (request, response) => {
    try{
        const student = await Student.findById(request.params.id);
        response.status(200).json(student);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited user in the database
export const editStudent = async (request, response) => {
    let student = await Student.findById(request.params.id);
    student = request.body;

    const editStudent = new Student(student);
    try{
        await Student.updateOne({_id: request.params.id}, editStudent);
        response.status(201).json(editStudent);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export const deleteStudent = async (request, response) => {
    try{
        await Student.deleteOne({_id: request.params.id});
        response.status(201).json("Student   deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}