import React from 'react';
import PropTypes from 'prop-types';

import './InputForm.css';

class InputForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    newMashup: {
      name: '',
      imgUrl: '',
      description: '',
    },
  }

  formFieldStringState = (name, e) => {
    const tempMashup = {...this.state.newMashup};
    tempMashup[name] = e.target.value;
    this.setState({newMashup: tempMashup});
  }

  nameChange = (e) => {
    this.formFieldStringState('name', e);
  }

  imgChange = (e) => {
    this.formFieldStringState('imgUrl', e);
  }

  descChange = (e) => {
    this.formFieldStringState('description', e);
  }

  formSubmit = (e) => {
    const {onSubmit} = this.props;
    e.preventDefault();
    onSubmit(this.state.newMashup);
  }

  render () {
    const {newMashup} = this.state;

    return (
      <div className="InputForm">
        <h2>Add New Animal</h2>
        <form onSubmit={this.formSubmit}>
          <div className="row">
            <fieldset>
              <label htmlFor="name">Name:</label>
              <br />
              <input
                type="text"
                className="form-control"
                placeholder=""
                id="name"
                aria-describedby="basic-addon1"
                value={newMashup.name}
                onChange={this.nameChange}
              />
            </fieldset>
          </div>
          <div className="row">
            <fieldset>
              <label htmlFor="imgUrl">ImageUrl:</label>
              <br />
              <input
                type="text"
                className="form-control"
                placeholder=""
                id="imgUrl"
                aria-describedby="basic-addon1"
                value={newMashup.imgUrl}
                onChange={this.imgChange}
              />
            </fieldset>
          </div>
          <div className="row">
            <fieldset>
              <label htmlFor="description">Description:</label>
              <br />
              <input
                type="text"
                className="form-control"
                placeholder=""
                id="desc"
                aria-describedby="basic-addon1"
                value={newMashup.description}
                onChange={this.descChange}
              />
            </fieldset>
          </div>
          <button className="btn btn-danger col-xs-6 col-xs-offset-3">Save Hybrid</button>
        </form>
      </div>
    );
  }
}

export default InputForm;
