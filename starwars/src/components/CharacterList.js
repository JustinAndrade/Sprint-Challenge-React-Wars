import React from 'react';
import Character from './Character';

const CharacterList = (props) => {
    return (
      <div className="starwars-characters">
        { props.starwarsChars.map( char => {
          return (
              <Character character={char} />            
            );
          })}
      </div>
    );
}

export default CharacterList