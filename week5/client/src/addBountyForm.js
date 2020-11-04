import React, { useState } from 'react'

export default function AddBountyForm(props) {
    const initInputs = {firstName: "", lastName: "", living: "", type: ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.addBounty(inputs)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName" 
                value={inputs.firstName} 
                onChange={handleChange}
                placeholder="First Name"
            />
            <br />
            <input 
                type="text" 
                name="lastName" 
                value={inputs.lastName} 
                onChange={handleChange}
                placeholder="Last Name"
            />
            <br />
            <input 
                type="text" 
                name="living" 
                value={inputs.living} 
                onChange={handleChange}
                placeholder="Dead or Alive"
            />
            <br />
            <input
                type="text" 
                name="type" 
                value={inputs.type} 
                onChange={handleChange}
                placeholder="Type"
            />   
            <br />
            <button>Add Bounty</button>
        </form>
    )
}