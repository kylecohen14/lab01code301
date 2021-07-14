import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  
  beastArr = (data) => {
    let newArr = data.map( (value) => {
      return <HornedBeast title={value.title} image_url={value.image_url} description={value.description} horns={value.horns} />;
    });
    return newArr;
  };




  render() {
    return (
      <div className="main">
        {this.beastArr(data)}
      </div>
    );
  }
}

export default Main;
