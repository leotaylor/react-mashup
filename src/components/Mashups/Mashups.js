import React from 'react';

import './Mashups.css';

class Mashups extends React.Component {
  render () {
    const {mashups} = this.props;
    // const mashups = this.props.listings; same as above
    const mashupsItemComponents = mashups.map((item) => {
      return (
        <li key={item.id}>{item.name}</li>
      );
    });
    return (
      <div className="Mashups">
        <h2>Mashups</h2>
        <ul>
          {mashupsItemComponents}
        </ul>
      </div>
    );
  }
}

export default Mashups;
