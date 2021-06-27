import React, { useEffect, useState } from 'react'
import { getStudents } from '../Services/api'
import '../Styles/custom_styles.css'
import {Link} from 'react-router-dom'

export const TableStudents = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        getAllStudents();
    }, ); 

    const getAllStudents = async () => {
       const response =  await getStudents();
       setStudents(response.data)
    }

    return (
        <>
        <table class="table table-striped table-hover">
					<thead>
						<tr>
                            <th>
								<span class="custom-checkbox">
									<input type="checkbox" id="selectAll" />
									<label for="selectAll"></label>
								</span>
							</th>
                            <th>ID</th>
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
                                    <td>{student._id}</td>
                                    <td>{student.first_name}</td>
                                    <td>{student.last_name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.age}</td>
                                    <td>{student.grade}</td>
                                    <td>
                                        <a href={`/edit/${student._id}`} component={Link} class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                        <a href="#deleteStudentModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                    </td>
                                </tr>
                            ))
                        }
					</tbody>
				</table>
            </>
    )
}
