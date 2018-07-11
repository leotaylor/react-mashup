import React from 'react';

import './Mashups.css';

// class Mashups extends React.Component {
//   render () {
//     const {mashups} = this.props;
//     const mashupsItemComponents = mashups.map((item) => {
//       return (
//         <div className="mashupsCard col-sm-3">
//           {/* <div className="caption"> */}
//           <li key={item.id}><img src={item.imgUrl} alt="strange creature"/></li>
//           <li key={item.id}><h2 id="thumbnail-label">{item.name}</h2></li>
//           <li key={item.id}>{item.description}</li>
//           {/* </div> */}
//         </div>
//       );
//     });
//     return (
//       <div className="Mashups">
//         <h2>Mashups</h2>
//         <ul>
//           {mashupsItemComponents}
//         </ul>
//       </div>
//     );
//   }
// }

class Mashups extends React.Component {
  render () {
    const {mashups} = this.props;
    const mashupsItemComponents = mashups.map((item) => {
      return (
        <li key={item.id} className="mashupsCard col-sm-3">
          <img src={item.imgUrl} alt="strange creature"/>
          <h2 id="thumbnail-label">{item.name}</h2>
          <p>{item.description}</p>
        </li>
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
