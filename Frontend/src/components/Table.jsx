import React from "react";
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
const mock = true;

const mockData = mock
  ? [ //mocked data
      { 
        firstName: 'John',
        lastName: 'Doe',
        startDate: '2015-01-01',
        department: 'Sales',
        dateOfBirth: '1990-09-10',
        street: '2 rue xxx',
        city: 'Test',
        state: 'TE',
        zipCode: 89000,
      },
      { 
        firstName: 'John',
        lastName: 'Doe',
        startDate: '2015-01-01',
        department: 'Human Ressources',
        dateOfBirth: '1990-09-10',
        street: '2 rue xxx',
        city: 'Test',
        state: 'TE',
        zipCode: 89000,
      },
      { 
        firstName: 'John',
        lastName: 'Doe',
        startDate: '2015-01-01',
        department: 'Legal',
        dateOfBirth: '1990-09-10',
        street: '2 rue xxx',
        city: 'Test',
        state: 'TE',
        zipCode: 89000,
      },
    ]
  : [/* no data*/];

    
    return ( 
        <div className='table'> 
            <DataTable 
            columns={columns} 
            data={mockData} 
            Sorting
            pagination 
            highlightOnHover 
            striped 
            responsive 
            /> 
        </div> 
    );
} 
export default Table