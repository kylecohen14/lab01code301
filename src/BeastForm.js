import React from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


class BeastForm extends React.Component {
  render () {
    return (
      <>
        <Form onSubmit={this.props.filterHorns}>
          <Form.Group controlId="formOnOff">
            <Form.Label>How many horns</Form.Label>
            <Form.Control as="select" onChange={this.props.selectForm}>
              <option>How many horns? Select a number</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
              <Form.Text className="text-muted">form text</Form.Text>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>

        </Form>
      </>
    );
  }
}

export default BeastForm;
