import React from 'react'

const Character = (props) => {
    return (
        <div className="char" >
              <p>{props.character.name}</p>
            </div>  
    )
}

export default Character