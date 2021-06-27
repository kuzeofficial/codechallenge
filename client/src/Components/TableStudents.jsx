import React, { useEffect, useState } from 'react'
// Import of functions to use axios
import { getStudents, deleteStudent } from '../Services/api'
// Import component Link for redirect to /students/[id]
import {Link} from 'react-router-dom'
// Import swal from a alert of Delete Student
// Note: No refactoring Swal in a new component because break the app
import swal from 'sweetalert';

export const TableStudents = () => {

    // Initial State
    const [students, setStudents] = useState([]);
    
    useEffect(() => {
        getAllStudents();
    }, []); 
    // Function for get the student information, and set in the state
    const getAllStudents = async () => {
       const response =  await getStudents();
       setStudents(response.data)
    }
    // Function for delete a student(This called for swal)
    const deleteStudentData = async (id) => {
        await deleteStudent(id)
        getAllStudents()
    }

    return (
        <table className="table table-striped table-hover">
					<thead>
						<tr>
              <th>ID</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Age</th>
							<th>Grade</th>
              <th>Actions</th>
						</tr>
					</thead>
					<tbody>
            {       
              // Initialize a map of students in a list, dont put off the key
              // Show the information in display
                students.map(student => (
                    <tr key={student._id}>
                        <td>{student._id}</td>
                        <td>{student.first_name}</td>
                        <td>{student.last_name}</td>
                        <td>{student.email}</td>
                        <td>{student.age}</td>
                        <td>{student.grade}</td>
                        <td>
                            {console.log(student)}
                            {/* Button for edit this redirect to dynamic route /edit/[id]  */}
                            <a href={`/edit/${student._id}`} component={Link} className="edit" ><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                            <a href="#/"  onClick={()=> 
                            // Event onClick showing swal alert
                            swal({title: "Are you sure?",text: "Once deleted, you will not be able to recover your student record!",icon: "warning",buttons: true,dangerMode: true,})
                            // Then shows modal
                            .then((willDelete) => {
                              // If user push a button of confirm then execute a condition
                                if (willDelete) {
                                  // Execute a function deleteStudentData( and we pass the id as parameters )
                                    deleteStudentData(student._id)
                                    // Show a information modal saying it was eliminated
                                  swal("Poof! Your student record has been deleted!", {icon: "success",});
                                } 
                                //f the if is not executed then it goes to the else
                                else {
                                  // Show a information modal saying it was canceled
                                  swal("Your student record is safe!");
                                }
                              })
                              // Show Icon
                            }  className="delete" ><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                        </td>
                    </tr>
                ))
            }
					</tbody>
				</table>
    )
}