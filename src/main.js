import React from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
  render() {
    return (
      <div className="main">

        <div>
          <HornedBeast name={'rhino'} description={'Big ol rhino'} />
        </div>

        <div>
          <HornedBeast name={'rhino'} description={'Even bigger ol rhino'} />
        </div>
      </div>
    );
  }
}

export default Main;
