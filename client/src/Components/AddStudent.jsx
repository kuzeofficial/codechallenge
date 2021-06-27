import React, {useState} from 'react'
import { addStudent } from "../Services/api"
import { useHistory } from 'react-router-dom'

const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    age: '',
    grade:'',
}
const AddStudent = () =>  {
    const [ student, setStudent ] = useState(initialValues);
    const { first_name, last_name, email, age, grade } = student;
    const history = useHistory()

    const onValueChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value})
    }
    
    const addStudentDetails = async () => {
        await addStudent(student);
        history.push('/')
    }

    return (
        <div id="addStudentModal" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form>
                        <div className="modal-header">						
                            <h4 className="modal-title">Add Student</h4>
                            <button type="button" className="close"   data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div className="modal-body">					
                            <div className="form-group">
                                <label>Fist Name</label>
                                <input onChange={(e) => onValueChange(e)} type="text" className="form-control"  name='first_name'   value={first_name} required />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input onChange={(e) => onValueChange(e)} type="text" className="form-control" name='last_name'  value={last_name}  required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input onChange={(e) => onValueChange(e)} type="email" className="form-control" name='email'  value={email} required />
                            </div>
                            <div className="form-group">
                                <label>Age</label>
                                <input onChange={(e) => onValueChange(e)} type="number" className="form-control" name='age' value={age} required />
                            </div>
                            <div className="form-group">
                                <label>
                                    Grade
                                    <select onChange={(e) => onValueChange(e)} name='grade'  value={grade} required >
                                        <option value="1st">1st</option>
                                        <option value="2nd">2nd</option>
                                        <option value="3rd">3rd</option>
                                        <option value="4th">4th</option>
                                        <option value="5th">5th</option>
                                    </select>
                                </label>
                            </div>					
                        </div>
                        <div className="modal-footer">
                            <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                            <input type="button" className="btn btn-success"data-dismiss="modal"   onClick={() => addStudentDetails()}  value="Add" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )

}

export default AddStudent
