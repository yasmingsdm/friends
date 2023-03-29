import React from "react";
import Character from "./Character";

const Characters = ({characters})=>{
    const oneCharacter = characters && characters.map(character => <Character key = {character.id} character={character} />)
    return (
        <>
        <h1 className="characters__title">Friends Main Characters</h1>
         <section className='characters__section'>
            {oneCharacter}
        </section>
        </>
       
       
    )
}

export default Characters