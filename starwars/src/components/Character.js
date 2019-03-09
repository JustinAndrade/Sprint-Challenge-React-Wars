import React from 'react'

import './StarWars.css'

const Character = (props) => {
    return (
        <div className="char" >
              <h2>{props.character.name}</h2>
              <p><strong>sex: </strong>{props.character.gender}</p>
              <p><strong>birth year: </strong>{props.character.birth_year}</p>
              <p><strong>eye color: </strong>{props.character.eye_color}</p>
              <p><strong>height: </strong>{props.character.height}</p>
            </div>  
    )
}

export default Character