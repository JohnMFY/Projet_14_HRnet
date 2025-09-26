import {React, useState} from 'react'
import Modal from './Modal'
//import Modal from "react_simple_modal_component_mfy"; //composant npm 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
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
    const handleDateChange = (name, value) => {
        setFormData({ ...formData, [name]: value })
    }
    const handleSelectChange = (name, selectedOption) => {
        setFormData({ ...formData, [name]: selectedOption ? selectedOption.value : "" });
    };

    const handleSave = (e) => {
        e.preventDefault()
        dispatch(addEmployee(formData))
        setIsModalOpen(true)
        setFormData({
        firstName: "",
        lastName: "",
        dateOfBirth: null,
        startDate: null,
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
    const stateOptions = states.map(state => ({
        value: state.code,
        label: state.name
    }));
    const departmentOptions = departements.map(dep => ({
        value: dep,
        label: dep
    }));
    
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
                <DatePicker 
                    selected={formData.dateOfBirth}
                    onChange={(date) => handleDateChange("dateOfBirth", date)}
                    placeholderText="dd-MM-YYYY"  
                    showYearDropdown 
                    dropdownMode="select"
                />
            </label>
            <br />
            <label>
                Start Date
                <br />
                <DatePicker 
                    selected={formData.startDate} 
                    onChange={(date) => handleDateChange("startDate", date)}
                    placeholderText="dd-MM-YYYY"  
                    showYearDropdown 
                    dropdownMode="select"
                />
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
                <Select
                    options={stateOptions}
                    onChange={(option) => handleSelectChange("state", option)}
                    value={stateOptions.find(opt => opt.value === formData.state)}
                />
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
                <Select
                    options={departmentOptions}
                    onChange={(option) => handleSelectChange("department", option)}
                    value={departmentOptions.find(opt => opt.value === formData.department)}
                />
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
                modalBackgroundClass={'modalBackground'}
                modalClass={'modal'}
                modalTitleClass={''}
                modalContentClass={''}
                iconClass={'icon'}
            />
        )}
    </div>
  )
}

export default Form