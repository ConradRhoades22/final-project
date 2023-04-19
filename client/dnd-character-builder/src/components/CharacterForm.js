import React, { useState } from "react"

const initInputs = {
    name: "",
    charClass: "",
    subclass: "",
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
}

export default function CharacterForm(props){
    const [inputs, setInputs] = useState(initInputs)
    const { addCharacter } = props

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addCharacter(inputs)
        setInputs(initInputs)
    }

    const { 
        name,
        charClass,
        subclass,
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
    } = inputs
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Name" />
            <input
                type="text"
                name="charClass"
                value={charClass}
                onChange={handleChange}
                placeholder="Character Class" />
            <input
                type="text"
                name="subclass"
                value={subclass}
                onChange={handleChange}
                placeholder="SubClass" />

                {/* number stats */}
            <input
                type="number"
                name="strength"
                value={strength}
                onChange={handleChange}
                placeholder="Strength" />
            <input
                type="number"
                name="dexterity"
                value={dexterity}
                onChange={handleChange}
                placeholder="Dexterity" />
            <input
                type="number"
                name="constitution"
                value={constitution}
                onChange={handleChange}
                placeholder="Constitution" />
            <input
                type="number"
                name="intelligence"
                value={intelligence}
                onChange={handleChange}
                placeholder="Intelligence" />
            <input
                type="number"
                name="wisdom"
                value={wisdom}
                onChange={handleChange}
                placeholder="Wisdom" />
            <input
                type="number"
                name="charisma"
                value={charisma}
                onChange={handleChange}
                placeholder="Charisma" />
            <button>Add your Character.</button>
        </form>
    )
}