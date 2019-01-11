import React from 'react';

function Character (props) {
  return (
  <div className="person" key={props.char.toString()}>
        <div className="main-stats">
          {props.char.name}
          {props.char.gender}
          {props.char.birth_year}
        </div>
        <div className="minor-stats">
          {props.char.hair_color}
          {props.char.eye_color}
          {props.char.height}
          {props.char.mass}
        </div>
      </div> 
  );
}

export default Character;