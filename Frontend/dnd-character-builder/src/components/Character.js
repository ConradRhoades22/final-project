import React, { useContext, useState } from "react"
import CharacterForm from "./CharacterForm"
import { UserContext } from "../context/UserProvider"

export default function Character(props){
    const { deleteCharacter, editCharacter, addCharacter, getOneCharacter } = useContext(UserContext)
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
                <>
                    <div className="chardets">
                        <h2>Name: { name }</h2>
                        <h2>Race: { charRace }</h2>
                        <h2>Class: { charClass }</h2>
                        <h2>Subclass: { subclass }</h2>
                        <h3>Stregnth: { strength }</h3>
                        <h3>Dexterity: { dexterity }</h3>
                        <h3>Constitution: { constitution }</h3>
                        <h3>Intelligence: { intelligence }</h3>
                        <h3>Wisdom: { wisdom }</h3>
                        <h3>Charisma: { charisma }</h3>
                    </div>
                    <div className="charbtn"> 
                        <button onClick={() => deleteCharacter(_id) }>Delete</button>
                        <button
                        className="edit-btn"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                        >Edit</button>
                        <button onClick={() => getOneCharacter(_id)}>Info</button>
                    </div>
                </>
                :
                <>
                    <div className="edit-char">
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
                        className="closebtn"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                        >Close</button>
                    </div>
                </>
                }
        </div>
    )
}