import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// A model of database
const studentSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    age: Number,
    grade: String
});

autoIncrement.initialize(mongoose.connection);
studentSchema.plugin(autoIncrement.plugin, 'student');
// Turn into model
const postStudent = mongoose.model('student', studentSchema);

export default postStudent;