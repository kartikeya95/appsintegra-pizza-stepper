import React, {Component} from 'react';
import {connect} from 'react-redux';
import setSettings from '../actions/setSettings';
import {bindActionCreators} from 'redux';

import {Button, Form, Row, Col, Container} from 'react-bootstrap';

class SettingsForm extends Component {
  constructor() {
    super();
    this.state = {
      numberOfPeople: 0,
      numberOfSlices: 0,
      numberOfFlavours: 0,
      numberOfSliceRequests: 0,
    };
  }

  setPeople = (e) => {
    this.setState({
      numberOfPeople: e.target.value,
    });
  }

  setSlices = (e) => {
    let slices = e.target.value;
    if (slices > 18) {
      slices = 18;
    }
    // if (slices < 6) { slices = 6 }
    this.setState({
      numberOfSlices: slices,
    });
  }

  setFlavours = (e) => {
    this.setState({
      numberOfFlavours: e.target.value,
    });
  }

  setSliceRequests = (e) => {
    this.setState({
      numberOfSliceRequests: e.target.value,
    });
  }

  storeSettings = (e) => {
    e.preventDefault();
    const data = this.state;
    this.props.setSettings(data);
  }

  render() {
    const settings = this.props.settings;
    return (
      <Container>
        <h3>Settings</h3>
        <p></p>
        <Form onSubmit={this.storeSettings}>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Number of people :</Form.Label>
            <Col sm={9}>
              <Form.Control onChange={this.setPeople} defaultValue={settings.numberOfPeople} type="number" placeholder="Enter number of people" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Number of slices in a pizza:</Form.Label>
            <Col sm={9}>
              <Form.Control onChange={this.setSlices} defaultValue={settings.numberOfSlices} type="number" placeholder="Enter number of slices in a pizza" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Number of flavours:</Form.Label>
            <Col sm={9}>
              <Form.Control onChange={this.setFlavours} defaultValue={settings.numberOfFlavours} type="number" placeholder="Enter number of flavours" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Maximum slice/person:</Form.Label>
            <Col sm={9}>
              <Form.Control onChange={this.setSliceRequests} defaultValue={settings.numberOfSliceRequests} type="number" placeholder="Enter maximum slice/person" />
            </Col>
          </Form.Group>
          <p></p>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
        <p></p>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setSettings: setSettings,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsForm);