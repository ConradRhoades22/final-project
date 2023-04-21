import React, { useState, useEffect } from "react"
import axios from "axios"


export default function CharacterForm(props){
    const initInputs = {
        name: props.name || "",
        charRace: props.charRace || "",
        charClass: props.charClass || "",
        subclass: props.subclass || "",
        strength: props.strength || 0,
        dexterity: props.dexterity || 0,
        constitution: props.constitution || 0,
        intelligence: props.intelligence || 0,
        wisdom: props.wisdom || 0,
        charisma: props.charisma || 0,
    }

    const [inputs, setInputs] = useState(initInputs)
    const [races, setRaces] = useState([])
    const [raceDesc, setRaceDesc] = useState([])
    const [classes, setClasses] = useState([])
    const [subclasses, setSubclasses] = useState([])
    const [character, setCharacter] = useState({initInputs})
    

    //api retrival

    const getOptions = () => {
        axios.get(`https://api.open5e.com/races`) 
            .then(res => {
                setRaces(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get(`https://api.open5e.com/races`) 
            .then(res => {
                setRaceDesc(res.data.results.desc)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get(`https://api.open5e.com/classes`) 
            .then(res => {
                setClasses(res.data.results)
            }) 
            .catch(err => {
                console.log(err)
            })
        axios.get(`https://api.open5e.com/classes`) 
            .then(res => {
                setSubclasses(res.data.results)
                let type = []
                
                let results = res.data.results
                for(let i = 0; i < results.length; i++) {
                    let newItem =  {
                        name: results[i].name,
                        archetypes: results[i].archetypes
                    }
                    type.push(newItem)
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
        
    useEffect(()=>{
        getOptions()
    },[])

// Selector options
const allRaces = races.map(item => [
    <option value={item.index} name={item.name}>{item.name}</option>
])
const allClasses = classes.map(item => [
    <option value={item.index} name={item.name}>{item.name}</option>
])
const allSubclasses = subclasses.map(item => [
    <option value={item.id} name={item.archetypes[0].slug}>{item.archetypes[0].name}</option>
    
])

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        if (!props.editToggle) {
            props.submit(inputs)
            setInputs(initInputs)
        } else if (props.editToggle) {
            props.editCharacter(
                inputs, props._id
            )
            props.setEditToggle(prevToggle => !prevToggle)
        }
    }

    const { 
        name,
        charRace,
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
            <select onChange={handleChange} value={charRace} name="charRace" id="races">
                <option value={character.races} >Select your Race</option>
                {allRaces}
            </select>
            <select onChange={handleChange} value={charClass} name="charClass" id="classes">
                <option value={character.classes}>Select your Class</option>
                {allClasses}
            </select>
            <select onChange={handleChange} value={subclass} name="subclass" id="subclasses">
                <option value={character.subclasses}>Select your Subclass</option>
                {allSubclasses}
            </select>

                {/*  stat inputs */}
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
            <button
            type="submit"
            >{ props.btnTxt }</button>
        </form>
    )
}