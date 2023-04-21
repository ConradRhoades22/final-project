import React from "react"
import Character from "./Character.js"



export default function CharacterList(props) {
    const { characters } = props
    return (
        <div className="character-list">
            { characters.map(character => <Character {...character} key={character._id} />) }
        </div>
    )
}