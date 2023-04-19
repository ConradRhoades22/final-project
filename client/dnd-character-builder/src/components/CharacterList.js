import React, { useContext } from "react"
import Character from "./Character.js"
import { UserContext } from "../context/UserProvider.js"

export default function CharacterList(props) {
    const { characters } = useContext(UserContext)
    return (
        <div className="character-list">
            { characters.map(character => <Character {...character} key={character._id} />) }
        </div>
    )
}