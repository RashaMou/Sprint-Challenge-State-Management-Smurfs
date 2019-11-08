import React from 'react';

const Smurf = (props) => {
  return (
    <>
      <ul className='smurf-card' key={props.smurf.id}>
        <li className='smurf-name'>{props.smurf.name}</li>
        <li>Age: {props.smurf.age} years old</li>
        <li>Height: {props.smurf.height}</li>
        <div className='buttons-container'>
          <button className='button delete-button is-small' onClick={() => props.deleteSmurf(props.smurf.id)}>Delete Smurf</button>
          <button className='button edit-button is-small' onClick={() => props.editSmurf()}>Edit Smurf</button>
        </div>
      </ul>
      
    </>
  )
}

export default Smurf;