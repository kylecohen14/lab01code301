import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Selectedbeast extends React.Component {

  render () {
    return (
      
      <div className='modal'>
        
        <Modal show={this.props.modalOn} onHide={this.props.closeModal}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.selectBeast.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Card onClick={this.showAsModal}>
                <Card.Img variant="top" src={this.props.selectBeast.image_url} />
                <Card.Body>
                  <Card.Title>{this.props.selectBeast.title}</Card.Title>
                  <Card.Text>{this.props.selectBeast.description} </Card.Text>
                </Card.Body>
              </Card>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.props.closeModal} variant="secondary">Close</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </div>
    );}
}


export default Selectedbeast;

// Calling correct selectBeast on modal inputs???
