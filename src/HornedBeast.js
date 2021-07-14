import React from 'react';
import data from './data.json';
import heart from './simple-red-heart.jpg';
import {Container, Row, Col} from 'react-bootstrap';


class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      votesOnBeast: 0,
      data: data
    };
  }

    vote = () => {
      this.setState({ votesOnBeast: this.state.votesOnBeast + 1});
    }

    render() {
      console.log(this.state.data);
      return (
        <>
          <Container>
            <Row>
              <Col>1 of 1
                <h1>{this.props.title}</h1>
                <img src={this.props.image_url} onClick={this.vote} />
                <h2>{this.props.description}</h2>
                <h3>Number of horns {this.props.horns}</h3>
                <span>Number of times fav: {this.state.votesOnBeast} </span>
                <img src={heart} />
              </Col>
            </Row>
          </Container>

          {/* <h2>{this.state.data[0].description}</h2> */}
        </>
      );
    }
}

// {/* 

//   render() {
//     return (
//       <div classname="HornedBeast">
//         <h2>
//           {this.props.name}
//         </h2>
//         <img src = "https://wallpaperxyz.com/wp-content/uploads/Rhino-HD-Wallpapers-Free-Download-Wallpaperxyz.com-4.jpg" alt = "rhino" title = "rhino"></img>
//         <p>{this.props.description}</p>
//       </div>
//     );
//   } */}


export default HornedBeast;
