import React from "react"
import Character from './Character.js'
import CharacterList from'./CharacterList.js'
import CharacterForm from './CharacterForm.js'


export default function Profile(){
    return(
        <div className="profile">
            <h1>Hello @Username.</h1>
            <h3>Create another Character</h3>
            <CharacterForm />
            <h3>Your Characters:</h3>
            <CharacterList />
        </div>
    )
}