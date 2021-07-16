import React from 'react';
import HornedBeast from './HornedBeast.js';
import {Container} from 'react-bootstrap';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Container>
          {this.props.data.map( (value) =>
            <HornedBeast title={value.title} image_url={value.image_url}
              description={value.description} horns={value.horns}
              key={value.image_url}
              showAsModal={this.props.showAsModal}/>
          )};
        </Container>
      </div>
    );
  }
}
export default Main;
