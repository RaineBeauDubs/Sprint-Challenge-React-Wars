import React from 'react';
import Character from './Character';

function CharacterList(props) {
  return (
    <ul>
      {props.chars.map(char => {
        return <Character char={char} />;
      })}
    </ul>
  );
}

export default CharacterList;