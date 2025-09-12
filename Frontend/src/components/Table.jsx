import {React, useState} from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux"

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
    const employees = useSelector((state) => state.employees.employees)

    const [filterText, setFilterText] = useState("");
    const filteredEmployees = employees.filter(
        (employee) =>
        employee.firstName?.toLowerCase().includes(filterText.toLowerCase()) ||
        employee.lastName?.toLowerCase().includes(filterText.toLowerCase()) ||
        employee.department?.toLowerCase().includes(filterText.toLowerCase()) ||
        employee.city?.toLowerCase().includes(filterText.toLowerCase()) ||
        employee.state?.toLowerCase().includes(filterText.toLowerCase())
    );

    return ( 
        <div className='table'> 
            <DataTable 
            columns={columns} 
            data={filteredEmployees && filteredEmployees.length > 0 ? filteredEmployees : ['']} 
            Sorting
            pagination 
            paginationRowsPerPageOptions={[10, 20, 50, 100]}
            highlightOnHover 
            striped 
            responsive 
            subHeader
            subHeaderComponent={
                <input
                    type="text"
                    placeholder="Search..."
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                    style={{
                    padding: "6px",
                    margin: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    }}
                />
                }
            />
            <p>Showing x to x of {filteredEmployees.length} entries</p>
        </div> 
    );
} 
export default Table