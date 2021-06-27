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
    const [ user, setUser ] = useState(initialValues);
    const { first_name, last_name, email, age, grade } = user;
    const history = useHistory()

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value})
    }
    
    const addStudentDetails = async () => {
        await addStudent(user);
        history.push('./all');
    }
    return (
        <div id="addStudentModal" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form>
                        <div class="modal-header">						
                            <h4 class="modal-title">Add Student</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body">					
                            <div class="form-group">
                                <label>Fist Name</label>
                                <input onChange={(e) => onValueChange(e)} type="text" class="form-control"  name='first_name'   value={first_name} required />
                            </div>
                            <div class="form-group">
                                <label>Last Name</label>
                                <input onChange={(e) => onValueChange(e)} type="text" class="form-control" name='last_name'  value={last_name}  required />
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input onChange={(e) => onValueChange(e)} type="email" class="form-control" name='email'  value={email} required />
                            </div>
                            <div class="form-group">
                                <label>Age</label>
                                <input onChange={(e) => onValueChange(e)} type="number" class="form-control" name='age' value={age} required />
                            </div>
                            <div class="form-group">
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
                        <div class="modal-footer">
                            <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" />
                            <input type="button" class="btn btn-success" onClick={() => addStudentDetails()}value="Add" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )

}

export default AddStudent
