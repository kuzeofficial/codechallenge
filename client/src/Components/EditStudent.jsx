import React, {useState, useEffect} from 'react'
import { editStudent } from "../Services/api"
import { getStudents } from "../Services/api"
// import  Index from '../Pages/Index'
// import ReactDOM  from 'react-dom'
import { useHistory, useParams } from 'react-router-dom'

const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    age: '',
    grade:'1st',
}
const EditStudent = () =>  {
    const [ user, setUser ] = useState(initialValues);
    const { first_name, last_name, email, age, grade } = user;
    const { id } = useParams();
    console.log(id)
    const history = useHistory()

    useEffect(() => {
        loadStudentData()
    })
    
    const loadStudentData = async () => {
        const response = await getStudents(id)
        setUser(response.data)
    }

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value})
    }
    
    const editStudentDetails = async () => {
        await editStudent(id, user);
        history.push('../')
    }

    const GoBack = () => {
        history.push('../')
    }

    return (
        <div class="modal-dialog">
            <div class="modal-content">
                <form>
                    <div class="modal-header">						
                        <h4 class="modal-title">Edit Student</h4>
                        <button type="button" class="close"   onClick={() => GoBack()} data-dismiss="modal" aria-hidden="true">&times;</button>
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
                        <input type="button" class="btn btn-default" onClick={() => GoBack()} data-dismiss="modal" value="Cancel" />
                        <input type="button" class="btn btn-success"data-dismiss="modal"   onClick={() => editStudentDetails()}  value="Update" />
                    </div>
                </form>
            </div>
        </div>
        )

}

export default EditStudent
