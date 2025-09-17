import {React, useState} from 'react'
import DropdownList from './DropdownList'
import Modal from './Modal'
import data from "../data.json"
import { useDispatch } from 'react-redux'
import { addEmployee } from '../store/slice'
import "./form.scss"  

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
        state:"",
        zipCode: "",
        department:"",
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
    <div className="form">
        <form onSubmit={handleSave}>
            <label>
                First Name
                <br />
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
            </label>
            <br />
            <label>
                Last Name
                <br />
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>
            </label>
            <br />
            <label>
                Date of Birth
                <br />
                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange}/>
            </label>
            <br />
            <label>
                Start Date
                <br />
                <input type="date" name="startDate" value={formData.startDate} onChange={handleChange}/>
            </label>
            <fieldset className="address">
                <legend>Address</legend>
                <label>
                Street
                <br />
                <input type="text" name="street" value={formData.street} onChange={handleChange}/>
                </label>
                <br />
                <label>
                    City
                    <br />
                    <input type="text" name="city" value={formData.city} onChange={handleChange}/>
                </label>
                <br />
                <label>
                State
                <br />
                <select name="state" value={formData.state} onChange={handleChange}>
                {states.map((state) => (
                    <option key={state.code} value={state.code}>
                    {state.name}
                    </option>
                ))}
                </select>
                <br />
                </label>
                <br />
                <label>
                    Zip Code
                    <br />
                    <input type="number" name="zipCode" value={formData.zipCode} onChange={handleChange}/>
                </label>
            </fieldset>
            <label>
                Departement
                <br />
                <DropdownList name="departement" content = {departements} value={formData.department} onChange={handleChange}/>
            </label>
            <br />
            <div className="btnDiv">
                <button type="submit">Save</button>
            </div>
        </form>
        
        {isModalOpen && (
            <Modal
                modalTitle={""}
                modalContent={"Employee Created !"}
                closeModal={closeModal}
            />
        )}
    </div>
  )
}

export default Form