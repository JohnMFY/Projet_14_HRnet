import { React, useState } from 'react'

function DropdownList({ content }) {
    const [selected, setSelected] = useState(content[0])

    const handleChange = (e) => {
        setSelected(e.target.value)
    }

    return (
        <div className='DropdownList'>
            <select value={selected} onChange={handleChange}>
                {content.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default DropdownList