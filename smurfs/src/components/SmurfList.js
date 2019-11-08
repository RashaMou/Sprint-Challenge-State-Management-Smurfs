import React, { useContext } from 'react';
import SmurfContext from './../contexts/SmurfContext';
import Smurf from './Smurf';

const SmurfList = (props) => {
  const smurfData = useContext(SmurfContext)
  return (
    <div className='main'>
      {smurfData.state.map(smurf => {
        return (
          <Smurf key={smurf.id} smurf={smurf} deleteSmurf={smurfData.deleteSmurf} editSmurf={smurfData.editSmurf}/>
      )})}
    </div>
  )
}

export default SmurfList