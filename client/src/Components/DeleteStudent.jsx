import React, { useEffect, useState } from 'react'
import { getStudents } from '../Services/api'
import { deleteStudent } from '../Services/api';
const DeleteStudent = () => {
	const [students, setStudents] = useState([]);

    useEffect(() => {
        getAllStudents();
    }); 

    const getAllStudents = async () => {
       const response =  await getStudents();
       students.map(student => (student._id))
       setStudents(response.data)
    }
	const deleteStudentData = async (id) => {
		await deleteStudent(id)
		getAllStudents()
	}
    return (
		students.map(student => (
			<div id="deleteStudentModal" class="modal fade">
					<div class="modal-dialog">
						<div class="modal-content">
							<form>
								<div class="modal-header">						
									<h4 class="modal-title">Delete Student</h4>
									<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
								</div>
								<div class="modal-body">					
									<p>Are you sure you want to delete these Records?</p>
									<p class="text-warning"><small>This action cannot be undone.</small></p>
								</div>
								<div class="modal-footer">
									<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" />
									<input type="submit" class="btn btn-danger" value="Confirm" onClick={()=> deleteStudentData(student._id)} />
								</div>
							</form>
						</div>
					</div>
				</div>
			))
    )
}

export default DeleteStudent
