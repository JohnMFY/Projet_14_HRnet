import {React, useState} from 'react'
import DropdownList from './DropdownList'
import data from "../data.json"

function Form() {
    const states = data.states.map(state => state.name)
    const departements = data.departements
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleSave = (e) => {
        e.preventDefault()
        setIsModalOpen(true)
    }
    
    const closeModal = () => {
        setIsModalOpen(false)
    }
  return (
    <div ClassName="form">
        <form>
            <label>
                First Name
                <input type="text" name="firstName" />
            </label>
            <br />
            <label>
                Last Name
                <input type="text" name="lastName" />
            </label>
            <br />
            <label>
                Date of Birth
                <input type="date" name="dateOfBirth" />
            </label>
            <br />
            <label>
                Start Date
                <input type="date" name="startDate" />
            </label>
            <fieldset ClassName="address">
                <legend>Address</legend>
                <label>
                Street
                <input type="text" name="street" />
                </label>
                <br />
                <label>
                    City
                    <input type="text" name="city" />
                </label>
                <br />
                <label>
                    State
                    <DropdownList content = {states}/>
                </label>
                <br />
                <label>
                    Zip Code
                    <input type="number" name="zipCode" />
                </label>
            </fieldset>
            
            <label>
                Departement
                <DropdownList content = {departements}/>
            </label>
        </form>
        <button onClick={handleSave}>Save</button>

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