import React from "react";
import './AddStudent.css';

const AddStudents=(props)=>{


    return(
        <div className="app-container">
        <table>
            <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Student Last Name</th>
                    <th>Student Address</th>
                    <th>Student Phone Number</th>
                    <th> Student Fee</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Amit</td>
                    <td>{props.LastName}</td>
                    <td>{props.Address}</td>
                    <td>{props.PhoneNumber}</td>
                    <td>{props.Fee}</td>
                </tr>
            </tbody>
        </table>
        </div>
    );
};

export default AddStudents;