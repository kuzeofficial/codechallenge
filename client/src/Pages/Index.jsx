import React from 'react'
import { TableStudents } from '../Components/TableStudents'
import AddStudent from "../Components/AddStudent"
import '../Styles/custom_styles.css'
import Title  from '../Components/Title';

const Index = () => {
    return (
        <div className="container">
            <div className="table-responsive">
                <div className="table-wrapper">
                    <Title />
                    <TableStudents />
                    <AddStudent />
                </div>
            </div>
        </div>
    )
}

export default Index
