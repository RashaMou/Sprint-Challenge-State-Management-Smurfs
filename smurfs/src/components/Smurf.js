import React from 'react';

const Smurf = (props) => {
  return (
    <>
      <ul className='smurf-card' key={props.smurf.id}>
        <li className='smurf-name'>{props.smurf.name}</li>
        <li>Age: {props.smurf.age} years old</li>
        <li>Height: {props.smurf.height}</li>
      </ul>
    </>
  )
}

export default Smurf;