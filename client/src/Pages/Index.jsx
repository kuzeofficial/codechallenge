import React from 'react'
import { TableStudents } from '../Components/Table'
import AddStudent from "../Components/AddStudent"
import DeleteStudent from '../Components/DeleteStudent';
import EditStudent from '../Components/EditStudent';
import Title  from '../Components/Title';

const Index = () => {
    return (
        <div class="container">
            <div class="table-responsive">
                <div class="table-wrapper">
                    <Title />
                    <TableStudents />
                    <AddStudent />
                    <DeleteStudent />
                    <EditStudent />
                </div>
            </div>
        </div>
    )
}

export default Index
