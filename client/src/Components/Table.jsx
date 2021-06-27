import React, { useEffect, useState } from 'react'
import { getStudents } from '../Services/api'
import '../Styles/custom_styles.css'

export const TableStudents = () => {
   
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getAllStudents();
    }, []); 

    const getAllStudents = async () => {
       const response =  await getStudents();
       console.log(response.data);
       setStudents(response.data)
    }
    
    return (
        <table class="table table-striped table-hover">
					<thead>
						<tr>
                            <th>
								<span class="custom-checkbox">
									<input type="checkbox" id="selectAll" />
									<label for="selectAll"></label>
								</span>
							</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Age</th>
							<th>Grade</th>
						</tr>
					</thead>
					<tbody>
                        {
                            students.map(student => (
                                <tr>
                                    <td>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                            <label for="checkbox1"></label>
                                        </span>
                                    </td>
                                    <td>{student.first_name}</td>
                                    <td>{student.last_name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.age}</td>
                                    <td>{student.grade}</td>
                                    <td>
                                        <a href="#editStudentModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                        <a href="#deleteStudentModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                    </td>
                                </tr>
                            ))
                        }
					</tbody>
				</table>
    )
}
