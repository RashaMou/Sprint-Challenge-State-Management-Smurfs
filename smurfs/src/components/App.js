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
    ],
    isAdding: false,
    addedSmurf: {
      name: '',
      age: '',
      height: '',
      id: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({smurfs: res.data})
      })
      .catch(err => console.log(err))
  }

  displayAddSmurfForm = () => {
    this.setState({
      isAdding: !this.state.isAdding
    })
  }

  addSmurf = (e) => {
    e.preventDefault()
    this.setState({
      smurfs: [...this.state.smurfs, this.state.addedSmurf],
      isAdding: false,
    })
  }

  handleChange = (event) => {
    this.setState({
      addedSmurf: {
        [event.target.key]: event.target.value,
        [event.target.key]: event.target.value,
        [event.target.key]: event.target.value,
      }
    })
    console.log(this.state.addedSmurf)
  }

  render() {
    return (
      <div className="App">
        <header className='hero'>
          <div className='hero-content'>
            <h1 className='title is-1'>SMURFS!</h1>
            <button className='button' onClick={this.displayAddSmurfForm}>Add Smurf</button>
          </div>
        </header>
          {this.state.isAdding ? 
            <form className='control' onSubmit={this.addSmurf}>
              <label className='label' htmlFor='name'>Name</label>
                <input
                  type='text'
                  name='name'
                  className='input'
                  onChange={this.handleChange}
                />
              <label className='label' htmlFor='age'>Age</label>
                <input 
                  type='text'
                  className='input'
                  name='age'
                  onChange={this.handleChange}
                />
              <label className='label' htmlFor='height'>Height</label>
                <input 
                  type='text'
                  className='input'
                  name='height'
                  onChange={this.handleChange}
                />
                <button type='submit' className='button'>Add Smurf!</button>
            </form>
          : null }
          <SmurfContext.Provider value={this.state.smurfs}>
            <SmurfList />
          </SmurfContext.Provider>
        
      </div>
    );
  }
}

export default App;
