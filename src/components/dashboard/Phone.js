import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FirstStats from './FirstStats';
import SecondStats from './SecondStats';
import ThirdStats from './ThirdStats';
import FourthStats from './FourthStats';
class Phone extends Component {
  constructor(props){
    super(props);
    console.log(props.phone);
    this.state = {
      phone: props.phone
    };
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col><h4>Phones</h4></Col>
        </Row>
          <Row>
            <Col xs={12} md={6}>
              <h5>Daily Statistics</h5>
              <div className="fill-width">
                <div><FirstStats first={this.state.phone.first} /></div>
                <div><SecondStats second={this.state.phone.second} /></div>
              </div>
              
            </Col>
            <Col xs={12} md={6}>
                <h5>Team Statistics</h5>
                <div className="fill-width">
                <div><ThirdStats third={this.state.phone.third} /></div>
                <div><FourthStats fourth={this.state.phone.fourth} /></div>
              </div>
            </Col>
          </Row>
      </Container>
    );
  }
}
export default Phone;