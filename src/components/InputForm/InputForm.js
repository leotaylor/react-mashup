import React from 'react';

import './InputForm.css';

class InputForm extends React.Component {
  render () {
    return (
      <div className="InputForm">
        <h2>Add New Animal</h2>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Name:</span>
          <input type="text" class="form-control" placeholder="" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">imageURL:</span>
          <input type="text" class="form-control" placeholder="" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Description:</span>
          <input type="text" class="form-control" placeholder="" aria-describedby="basic-addon1"/>
        </div>
      </div>
    );
  }
}

export default InputForm;
