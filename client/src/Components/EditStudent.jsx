import React, {useState, useEffect} from 'react'
// Import  function for get and edit data with the API
import { editStudent, getStudents } from "../Services/api"
// Import a useHistory for save the browser historial and useParams for get [id] of the url
import { useHistory, useParams } from 'react-router-dom'

// Setting the intial values for any entries of the data
const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    age: '',
    grade:'',
}

const EditStudent = () =>  {
    // Set the initial state
    const [ student, setStudent ] = useState(initialValues);
    // Set each input to student
    const { first_name, last_name, email, age, grade } = student;
    // Get the id from useParams()
    const { id } = useParams();
    // Save the browser history
    const history = useHistory()
    
    // Use Effect Hook for change the value in live
    useEffect(() => {
        loadUserDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Load the information for better preview of this at the time of editing
    const loadUserDetails = async() => {
        const response = await getStudents(id);
        setStudent(response.data);
    }
    // Apply the changes and send to the API
    const editStudentDetails = async () => {
        await editStudent(id, student);
        history.push('../')
    }
    // Allows you to modify the values and sets them constantly
    const onValueChange = (e) => {
        setStudent({...student, [e.target.name]: e.target.value})
    }
    // Function for buttons of cancel and close
    const goBack = (e) => {
        history.push('../')
    }

    return (
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">						
                        <h4 className="modal-title">Edit Student</h4>
                        <button type="button" className="close" onClick={() => {goBack()}} data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body">					
                        <div className="form-group">
                            <label>Fist Name</label>
                            <input onChange={(e) => onValueChange(e)} type="text" className="form-control"  name='first_name'  value={first_name} required />
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
                        <input type="button" onClick={() => {goBack()}} className="btn btn-default" data-dismiss="modal" value="Cancel" />
                        <input type="button" className="btn btn-success"data-dismiss="modal"   onClick={() => editStudentDetails()}  value="Update" />
                    </div>
                </form>
            </div>
        </div>
        )

}

export default EditStudent
