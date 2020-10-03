import React, { Component } from "react";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";

class ThirdStats extends Component {
  render() {
    
    return (
      <Card className="m-1 w-100 h-100">
          <Card.Body>
              <Card.Title><span className="pr-1">Reachability</span> <span><FontAwesomeIcon icon={faEllipsisV} style={{float:"right"}} /></span></Card.Title>
              <hr/>
              <div  style={{textAlign: "center"}}>
                <h2>{this.props.third.callsToday}</h2>
                <small className="colorGrey">Number of calls today</small>
                <h2>{this.props.third.answeredCalls}</h2>
                <small className="colorGrey">Answered calls today</small>
                <hr/>
                <h2 style={{color: "green"}}>{this.props.third.availabilityRate}</h2>
                <small className="colorGrey">Availability rate</small>
              </div>
          </Card.Body>
      </Card>
    );
  }
}
export default ThirdStats;