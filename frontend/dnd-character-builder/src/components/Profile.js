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
            <div className="char-creator">
                <h1>Hello {username}.</h1>
                <h3>Create another Character</h3>
                <CharacterForm 
                    submit={addCharacter} 
                    btnTxt="Add Character" 
                />
            </div>
                <div className="profile-charlist">
                <h1>Your Characters:</h1>
                <CharacterList  
                    characters={characters}
                />
            </div>
        </div>
    )
}