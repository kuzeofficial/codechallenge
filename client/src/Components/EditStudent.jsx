import React from 'react'

class EditStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange =  this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value})
    }
    render(){
        return (
            <div id="editStudentModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">						
                                <h4 class="modal-title">Edit Student</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">					
                                <div class="form-group">
                                    <label>First Name</label>
                                    <input type="text" class="form-control" required />
                                </div>
                                <div class="form-group">
                                    <label>Last Name</label>
                                    <input type="text" class="form-control" required />
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" class="form-control" required />
                                </div>
                                <div class="form-group">
                                    <label>Age</label>
                                    <input type="number" class="form-control" required />
                                </div>
                                <div class="form-group">
                                    <label>
                                        Grade
                                        <select value={this.state.value} onChange={this.handleChange}>
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
                                <input type="submit" class="btn btn-info" value="Save" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            )
    }
}

export default EditStudent
