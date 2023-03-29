import React from "react";
import Character from "./Character";

const Characters = ({characters})=>{
    const oneCharacter = characters && characters.map(character => <Character key = {character.id} character={character}/>)
    return (
        <section>
            <h1>Friends Main Characters</h1>
            {oneCharacter}
            
        </section>
       
    )
}

export default Characters