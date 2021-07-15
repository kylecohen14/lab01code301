import React from 'react';
import data from './data.json';
import heart from './simple-red-heart.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';



class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      votesOnBeast: 0,
      data: data
    };
  }

    vote = () => {
      this.setState({
        votesOnBeast: this.state.votesOnBeast + 1,
        // test: true
      });
    }

    render() {
      console.log(this.state.data);
      return (
        <>
          <Row>
            <Col>
              <h1>{this.props.title}</h1>
              <img src={this.props.image_url} onClick={this.vote} />
            </Col>
            <h2>{this.props.description}</h2>
            <h3>Number of horns {this.props.horns}</h3>
          </Row>
          <span>Number of times fav: {this.state.votesOnBeast} </span>
          <img src={heart} />

          {/* <h2>{this.state.data[0].description}</h2> */}
        </>
      );
    }
}
export default HornedBeast;
