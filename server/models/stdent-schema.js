import mongoose, { mongo } from 'mongoose';

const studentSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    age: Number,
    grade: String
});

const student =  mongoose.model('student', studentSchema);
export default student