import React from 'react';
import Character from './Character';

const CharacterList = (props) => {
    return (
      <div className="starwars-characters">
        { props.starwarsChars.map( char => {
          return (
              <div className='char'>
                <Character character={char} />            
              </div>
            );
          })}
      </div>
    );
}

export default CharacterList