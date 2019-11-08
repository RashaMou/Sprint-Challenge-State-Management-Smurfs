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
    newSmurf: {
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
      .catch(err => console.log('componentDidMountError', err))
  }

  displayAddSmurfForm = () => {
    this.setState({
      isAdding: !this.state.isAdding
    })
  }

  addSmurf = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3333/smurfs', this.state.newSmurf)
      .then(res => this.setState(
        {
          smurfs: [...this.state.smurfs, ...res.data],
          isAdding: false,
        }))
      .catch(err => console.log('addSmurf error', err))
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      newSmurf: {
        ...this.state.newSmurf,
        [event.target.name]: event.target.value,
        id: Date.now()
      }
    })
  }

  deleteSmurf = (id) => {
    console.log(this.state.smurfs)
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log('deleteSmurf error', err))
  }

  componentDidUpdate() {
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      this.setState({smurfs: res.data})
    })
    .catch(err => console.log('componentDidUpdate error', err))
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
                  className='input'
                  name='name'
                  onChange={this.handleChange}
                  value={this.state.newSmurf.name}
                />
              <label className='label' htmlFor='age'>Age</label>
                <input 
                  type='text'
                  className='input'
                  name='age'
                  onChange={this.handleChange}
                  value={this.state.newSmurf.age}
                />
              <label className='label' htmlFor='height'>Height</label>
                <input 
                  type='text'
                  className='input'
                  name='height'
                  onChange={this.handleChange}
                  value={this.state.newSmurf.height}
                />
                <button type='submit' className='button'>Add Smurf!</button>
            </form>
          : null }
          <SmurfContext.Provider value={{state: this.state.smurfs, deleteSmurf: this.deleteSmurf}}> 
            <SmurfList />
          </SmurfContext.Provider>
        
      </div>
    );
  }
}

export default App;
