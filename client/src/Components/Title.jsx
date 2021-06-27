import React from 'react'

const Title = () => {
    return (
        <div className="table-title">
            <div className="row">
                <div className="col-xs-6">
                    <h2>Manage <b>Students</b></h2>
                </div>
                <div className="col-xs-6">
                    <a href="#addStudentModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Student</span></a>
                    <a href="#" className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete</span></a>						
                </div>
            </div>
        </div>
    )
}

export default Title
