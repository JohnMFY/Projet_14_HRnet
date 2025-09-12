import React from 'react'
import { NavLink} from 'react-router-dom';
import Table from '../components/Table';
import "./employees.scss"

function Employees() {
  return (
    <div className="employeesPage">
        <h2>Current Employees</h2>
        <Table/>
        <NavLink to="/"> Home </NavLink>
    </div>
  )
}

export default Employees