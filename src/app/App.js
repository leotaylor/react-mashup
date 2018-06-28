import React, { Component } from 'react';

import connection from '../firebaseRequests/connection';
import mashupRequest from '../firebaseRequests/mashup';

import Mashups from '../components/Mashups/Mashups';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    mashups: [],
  }

  componentDidMount () {
    connection();
    mashupRequest.getRequest()
      .then((mashups) => {
        this.setState({mashups})
      })
      .catch((err) => {
        console.error('error with mashup GET', err);
      });
  }

  render () {
    return (
      <div className='App'>
        <div className='col-sm-6'>
          <Mashups mashups={this.state.mashups}/>
        </div>
        <div className='col-sm-6'>
          <h2>Form Goes Here</h2>
        </div>
      </div>
    );
  }
}

export default App;
