import React, { Component } from "react";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";

class Reachability extends Component {
  
  render() {
    
    return (
      <Card className="m-1 w-100 h-100">
          <Card.Body>
              <Card.Title><span className="pr-1">Reachability</span> <span><FontAwesomeIcon icon={faEllipsisV} style={{float:"right"}} /></span></Card.Title>
              <hr/>
              <div  style={{textAlign: "center"}}>
                <h2>{this.props.reachability.callsToday}</h2>
                <small className="colorGrey">Number of calls today</small>
                <h2>{this.props.reachability.answeredCalls}</h2>
                <small className="colorGrey">Answered calls today</small>
                <hr/>
                <h2 style={{color: "green"}}>{this.props.reachability.availabilityRate}</h2>
                <small className="colorGrey">Availability rate</small>
              </div>
          </Card.Body>
      </Card>
    );
  }
}
export default Reachability;