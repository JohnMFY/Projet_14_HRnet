import React from 'react'
import { NavLink} from 'react-router-dom';
import Form from '../components/Form';

function Home() {
  return (
    <div>
        <h2>HRnet</h2>
        <NavLink to="/employees"> View Current Employees </NavLink>
        <h3>Create Employee</h3>
        <Form/>
        
    </div>
  )
}

export default Home