import React from 'react'
import { NavLink} from 'react-router-dom';
import Form from '../components/Form';
import "./home.scss"

function Home() {
  return (
    <div className='home'>
        <h2>HRnet</h2>
        <NavLink to="/employees"> View Current Employees </NavLink>
        <h3>Create Employee</h3>
        <Form/>
        
    </div>
  )
}

export default Home