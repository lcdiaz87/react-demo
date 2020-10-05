import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AllocatedCalls from './AllocatedCalls';
import InterviewTimes from './InterviewTimes';
import Reachability from './Reachability';
import Employees from './Employees';
class Phone extends Component {
  constructor(props){
    super(props);
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
                <div><AllocatedCalls allocatedCalls={this.state.phone.allocatedCalls} mode="edit" /></div>
                <div><InterviewTimes interviewTimes={this.state.phone.interviewTimes} mode="edit" /></div>
              </div>
              
            </Col>
            <Col xs={12} md={6}>
                <h5>Team Statistics</h5>
                <div className="fill-width">
                <div><Reachability reachability={this.state.phone.reachability} /></div>
                <div><Employees companies={this.state.phone.companies} mode="edit" /></div>
              </div>
            </Col>
          </Row>
      </Container>
    );
  }
}
export default Phone;