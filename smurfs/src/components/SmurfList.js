import React, { useContext } from 'react';
import SmurfContext from './../contexts/SmurfContext';
import Smurf from './Smurf';

const SmurfList = () => {
  const smurfArray = useContext(SmurfContext)
  return (
    <div className='main'>
      {smurfArray.map(smurf => {
        return (
          <Smurf smurf={smurf}/>
      )})}
    </div>
  )
}

export default SmurfList