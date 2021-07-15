import React from 'react';
import Modal from 'react-bootstrap/Modal';

class Selectedbeast extends React.Component {

  render () {
    return (
      
      <div className='modal'>
        <Modal isOpen={true}>
          <h2>Modal title</h2>
          <p>Modal Body</p>
        </Modal>
      </div>
    );}
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
     
//         <Modal.Dialog>
//   <Modal.Header closeButton>
//     <Modal.Title>Modal title</Modal.Title>
//   </Modal.Header>

//   <Modal.Body>
//     <p>Modal body text goes here.</p>
//   </Modal.Body>

//   <Modal.Footer>
//     <Button variant="secondary">Close</Button>
//     <Button variant="primary">Save changes</Button>
//   </Modal.Footer>
// </Modal.Dialog> */}
    
export default Selectedbeast;
