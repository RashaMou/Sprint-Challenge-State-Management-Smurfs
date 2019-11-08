import React, { useContext } from 'react';
import SmurfContext from './../contexts/SmurfContext';
import Smurf from './Smurf';

const SmurfList = (props) => {
  const smurfArray = useContext(SmurfContext)
  return (
    <div className='main'>
      {smurfArray.map(smurf => {
        return (
          <Smurf key={smurf.id} smurf={smurf} deleteSmurf={props.deleteSmurf}/>
      )})}
    </div>
  )
}

export default SmurfList