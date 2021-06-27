import React from 'react'

const Title = () => {
    return (
        <div class="table-title">
            <div class="row">
                <div class="col-xs-6">
                    <h2>Manage <b>Students</b></h2>
                </div>
                <div class="col-xs-6">
                    <a href="#addStudentModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New Student</span></a>
                    <a href="#deleteStudentModal" class="btn btn-danger" data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Delete</span></a>						
                </div>
            </div>
        </div>
    )
}

export default Title
