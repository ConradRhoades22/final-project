import React, { useContext }from "react"
import Character from './Character.js'
import CharacterList from'./CharacterList.js'
import CharacterForm from './CharacterForm.js'
import { UserContext } from "../context/UserProvider.js"


export default function Profile(){
    const { 
        user: { username }, 
        addCharacter,
        characters
    } = useContext(UserContext)

    return(
        <div className="profile">
            <h1>Hello @{username}.</h1>
            <h3>Create another Character</h3>
            <CharacterForm addCharacter={addCharacter}/>
            <h3>Your Characters:</h3>
            <CharacterList  characters={characters}/>
        </div>
    )
}