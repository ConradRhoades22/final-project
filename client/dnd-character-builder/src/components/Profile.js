import React, { useContext, useEffect }from "react"
import Character from "./Character.js"
import CharacterList from'./CharacterList.js'
import CharacterForm from './CharacterForm.js'
import { UserContext } from "../context/UserProvider.js"


export default function Profile(){
    const { 
        user: { username }, 
        addCharacter,
        characters,
        getUserCharacters,
    } = useContext(UserContext)

    useEffect(() => {
        getUserCharacters()
    },[])

    return(
        <div className="profile">
            <h1>Hello {username}.</h1>
            <h3>Create another Character</h3>
            <CharacterForm 
                submit={addCharacter} 
                btnTxt="Add Character" 
            />
            <h3>Your Characters:</h3>
            <CharacterList  
                characters={characters}
            />
        </div>
    )
}