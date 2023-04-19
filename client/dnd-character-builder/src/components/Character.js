import React from "react"

export default function Character(props){
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
        _id
    } = props
    return(
        <div className="character">
            <h1>Character Name: { name }</h1>
            <h2>Character Class: { charClass }</h2>
            <h2>Character SubClass: { subclass }</h2>
            <h3>Stregnth: { strength }</h3>
            <h3>Dexterity: { dexterity }</h3>
            <h3>Constitution: { constitution }</h3>
            <h3>Intelligence: { intelligence }</h3>
            <h3>Wisdom: { wisdom }</h3>
            <h3>Charisma: { charisma }</h3>
        </div>
    )
}