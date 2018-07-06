import React from 'react';

import './InputForm.css';

class InputForm extends React.Component {
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
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Name:</span>
          <input
            type="text"
            className="form-control"
            placeholder=""
            id="name"
            aria-describedby="basic-addon1"
            value={newMashup.name}
            onChange={this.nameChange}
          />
        </div>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">imageURL:</span>
          <input
            type="text"
            className="form-control"
            placeholder=""
            id="imgUrl"
            aria-describedby="basic-addon1"
            value={newMashup.imgUrl}
            onChange={this.imgChange}
          />
        </div>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Description:</span>
          <input
            type="text"
            className="form-control"
            placeholder=""
            id="desc"
            aria-describedby="basic-addon1"
            value={newMashup.description}
            onChange={this.descChange}
          />
        </div>
        <button className="btn btn-danger col-xs-6 col-xs-offset-3">Save Hybrid</button>
      </div>
    );
  }
}

export default InputForm;
