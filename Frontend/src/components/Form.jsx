import {React, useState} from 'react'
import DropdownList from './DropdownList'
import data from "../data.json"
import { useDispatch } from 'react-redux'
import { addEmployee } from '../store/slice'  

function Form() {
    const states = data.states
    const departements = data.departements
    const [isModalOpen, setIsModalOpen] = useState(false)
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        department: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    } 
    const handleSave = (e) => {
        e.preventDefault()
        dispatch(addEmployee(formData))
        setIsModalOpen(true)
        setFormData({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        department: "",
        })
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }
    
  return (
    <div ClassName="form">
        <form onSubmit={handleSave}>
            <label>
                First Name
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
            </label>
            <br />
            <label>
                Last Name
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>
            </label>
            <br />
            <label>
                Date of Birth
                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange}/>
            </label>
            <br />
            <label>
                Start Date
                <input type="date" name="startDate" value={formData.startDate} onChange={handleChange}/>
            </label>
            <fieldset ClassName="address">
                <legend>Address</legend>
                <label>
                Street
                <input type="text" name="street" value={formData.street} onChange={handleChange}/>
                </label>
                <br />
                <label>
                    City
                    <input type="text" name="city" value={formData.city} onChange={handleChange}/>
                </label>
                <br />
                <label>
                State
                <select name="state" value={formData.state} onChange={handleChange}>
                {states.map((state) => (
                    <option key={state.code} value={state.code}>
                    {state.name}
                    </option>
                ))}
                </select>
                </label>
                <br />
                <label>
                    Zip Code
                    <input type="number" name="zipCode" value={formData.zipCode} onChange={handleChange}/>
                </label>
            </fieldset>
            <label>
                Departement
                <DropdownList content = {departements} value={formData.department} onChange={handleChange}/>
            </label>
            <button type="submit">Save</button>
        </form>
        
        {isModalOpen && (
        <div ClassName="modal">
            <p>Employee Created!</p>
            <i className="fa-solid fa-xmark" onClick={closeModal}></i>
        </div>
        )}
    </div>
  )
}

export default Form