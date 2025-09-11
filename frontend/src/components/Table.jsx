import React from 'react'
import DataTable from "react-data-table-component"; 

function Table() { 
    const columns = [ 
        { 
            name: "First Name", 
            selector: (row) => row.firstName, 
            sortable: true 
        }, 
        { 
            name: "Last Name", 
            selector: (row) => row.lastName, 
            sortable: true 
        }, 
        { 
            name: "Start Date", 
            selector: (row) => row.startDate, sortable: true 
        }, 
        { 
            name: "Department", 
            selector: (row) => row.department, 
            sortable: true 
        }, 
        { 
            name: "Date of Birth", 
            selector: (row) => row.dateOfBirth, 
            sortable: true 
        }, 
        { 
            name: "Street", 
            selector: (row) => row.street, 
            sortable: true 
        }, 
        { 
            name: "City", 
            selector: (row) => row.city, 
            sortable: true 
        }, 
        { 
            name: "State", 
            selector: (row) => row.state, 
            sortable: true 
        }, 
        { 
            name: "Zip Code", 
            selector: (row) => row.zipCode, 
            sortable: true 
        }, 
    ]; 
    const dataTest = [ 
        { 
            id:1, 
            FirstName: 'John', 
            LastName: 'Doe', 
            StartDate:1, 
            Department:'sales', 
            DateofBirth:2, 
            Street:3, 
            City:'test', 
            State:'test', 
            ZipCode:4, 
        }, 
        { 
            id:2, 
            FirstName: 'John', 
            LastName: 'Doe', 
            StartDate:1, 
            Department:'sales', 
            DateofBirth:2, 
            Street:3, 
            City:'test', 
            State:'test', 
            ZipCode:4, 
        }, 
        { 
            id:3,
            FirstName: 'John', 
            LastName: 'Doe', 
            StartDate:1, 
            Department:'sales', 
            DateofBirth:2, 
            Street:3, 
            City:'test', 
            State:'test', 
            ZipCode:4, 
        }, 
        { 
            id:4, 
            FirstName: 'John', 
            LastName: 'Doe', 
            StartDate:1, 
            Department:'sales', 
            DateofBirth:2, 
            Street:3, 
            City:'test', 
            State:'test', 
            ZipCode:4,
         }, 
    ]; 
    
    return ( 
    <div className='table'> 
    <DataTable 
    columns={columns} 
    data={dataTest} 
    pagination 
    highlightOnHover 
    striped 
    responsive 
    noDataComponent="No employees found" 
    /> 
    </div> 
    ) } 
export default Table