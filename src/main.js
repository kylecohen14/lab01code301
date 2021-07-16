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
//<div>
//   {this.props.allBeasts.map((value, idx) => (
//     <HornedBeast 
//       key={idx}
//       index={idx}
//       src={value.image_url}
//       title={value.title}
//       description={value.description}
//       displayAsModal={this.props.displayAsModal}
//     />
//   ))}
//   </div>
// }}}



// beastArr = (data) => {
//   let newArr = data.map( (value) => {
//     return <HornedBeast title={value.title} image_url={value.image_url} description={value.description} horns={value.horns} key={value.image_url} />;
//   });
//   return newArr;
// };
export default Main;
