import React, { Component } from 'react';

import connection from '../firebaseRequests/connection';
import mashupRequest from '../firebaseRequests/mashup';

import Mashups from '../components/Mashups/Mashups';
import InputForm from '../components/InputForm/InputForm';

import './App.css';

class App extends Component {
  state = {
    mashups: [],
  }

  formSubmitEvent = (newMashup) => {
    mashupRequest.postRequest(newMashup)
      .then(() => {
        mashupRequest.getRequest()
          .then((mashups) => {
            this.setState({mashups});
          });
      })
      .catch((err) => {
        console.error('error with post submit', err);
      });
  }

  componentDidMount () {
    connection();
    mashupRequest.getRequest()
      .then((mashups) => {
        this.setState({mashups});
      })
      .catch((err) => {
        console.error('error with mashup GET', err);
      });
  }

  render () {
    return (
      <div className='App'>
        <div className='col-sm-8'>
          <div className="row Mashups">
            <Mashups mashups={this.state.mashups}/>
          </div>
        </div>
        <div className='col-sm-4'>
          <InputForm
            onSubmit={this.formSubmitEvent}
          />
        </div>
      </div>
    );
  }
}

export default App;
