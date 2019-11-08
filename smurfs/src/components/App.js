import React, { Component } from "react";
import axios from 'axios';

import SmurfList from './SmurfList';
import SmurfContext from './../contexts/SmurfContext';

class App extends Component {

  state = {
    smurfs: [
      {
        name: '',
        age: '',
         height: '',
        id: ''
      }
    ]
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({smurfs: res.data})
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.smurfs)
    return (
      <div className="App">
        <header className='hero'>
          <div className='hero-content'>
            <h1 className='title is-1'>SMURFS!</h1>
            <button className='button'>Add Smurf</button>
          </div>
        </header>
          <SmurfContext.Provider value={this.state.smurfs}>
            <SmurfList />
          </SmurfContext.Provider>
        
      </div>
    );
  }
}

export default App;
