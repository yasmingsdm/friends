import React from "react";

const Character = ({character})=>{
    console.log(character)
    return(
        <div  className="character__div">
            <h1>{character.name}</h1>
            <img className="character__img" src={character.picture} alt={character.name}/>
        </div>
    )
}

export default Character