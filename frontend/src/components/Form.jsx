import React from 'react'
import Data from '../../data.json'
import Dropdown from './Dropdown'
import "./Form.scss"
/*
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../slice';
*/
function Form() {
    const states = Data.states.map(state => state.name);
    const departments = Data.departments;
    /*
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        department: "",
    });
    */
    return (
        <div>
            <form action="submit">
                <p>First Name</p>
                <input type="text" id="first-name"/>

                <p>Last Name</p>
                <input type="text" id="last-name"/>

                <p>Date of Birth</p>
                <input id="date-of-birth" type="text"/>

                <p>Start Date</p>
                <input id="start-date" type="text"/>

                <div className='address'>
                    <p>Address</p>
                    <p>Street</p>
                    <input id="street" type="text"/>
                    <p>City</p>
                    <input id="city" type="text"/>
                    <p>State</p>
                    <Dropdown content={states} />
                    <p>Zip Code</p>
                    <input id="zip-code" type="number"/>
                </div>

                <p>Departement</p>
                <Dropdown content={departments} />
                <button>Save</button>
            </form>
        </div>
    )
}

export default Form