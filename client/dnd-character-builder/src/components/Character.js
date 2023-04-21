import React, { useContext, useState } from "react"
import CharacterForm from "./CharacterForm"
import { UserContext } from "../context/UserProvider"

export default function Character(props){
    const { deleteCharacter, editCharacter, addCharacter, userState } = useContext(UserContext)
    const [editToggle, setEditToggle] = useState(false)

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
        _id,
    } = props

    return(
        <div className="character">
            { !editToggle ? 
                <div>
                    <h1>Character Name: { name }</h1>
                    <h2>Character Race: { charRace }</h2>
                    <h2>Character Class: { charClass }</h2>
                    <h2>Character Subclass: { subclass }</h2>
                    <h3>Stregnth: { strength }</h3>
                    <h3>Dexterity: { dexterity }</h3>
                    <h3>Constitution: { constitution }</h3>
                    <h3>Intelligence: { intelligence }</h3>
                    <h3>Wisdom: { wisdom }</h3>
                    <h3>Charisma: { charisma }</h3>
                    <button onClick={() => deleteCharacter(_id) }>Delete this Character</button>
                    <button
                    className="edit-btn"
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    >Edit Character</button>
                </div>
                :
                <>
                    <CharacterForm
                        name={name}
                        charRace={charRace}
                        charClass={charClass}
                        subclass={subclass}
                        strength={strength}
                        dexterity={dexterity}
                        constitution={constitution}
                        intelligence={intelligence}
                        wisdom={wisdom}
                        charisma={charisma}
                        _id={_id}
                        editToggle= {editToggle}
                        btnTxt="Save Changes"
                        editCharacter={editCharacter}
                        addCharacter={addCharacter}
                        setEditToggle={setEditToggle}
                    />
                    <button
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    >Close</button>
                </>
                }
        </div>
    )
}