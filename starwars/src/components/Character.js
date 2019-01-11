import React from 'react';
import './StarWars.css';

function Character(props) {
  return (
    <div className="person" key={props.char.toString()}>
      <div className="stats">
        
          <p className="name">Name: {props.char.name}</p>
          <p>Gender: {props.char.gender}</p>
          <p>Year of Birth: {props.char.birth_year}</p>
        
       
          <p>Hair Color: {props.char.hair_color}</p>
          <p>Eye Color: {props.char.eye_color}</p>
          {/* <p>{props.char.height}</p> */}
          {/* <p>{props.char.mass}</p> */}
      </div>
    </div>
  );
}

export default Character;