import React, { Component } from "react";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import GenericProgressBar from "./GenericProgressBar";
import { findAllByDisplayValue } from "@testing-library/react";

class SecondStats extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Card className="m-1 w-100 h-100">
          <Card.Body>
              <Card.Title><span className="pr-1">Interview Times</span> <span><FontAwesomeIcon icon={faEllipsisV} style={{float:"right"}} /></span></Card.Title>
              <hr/>
              <div style={{textAlign: "center"}}>
                <h2>{this.props.second.total}</h2>
                <small className="colorGrey">Total</small>
                <hr/>
                <h2>{this.props.second.last}</h2>
                <small className="colorGrey">Last call</small>
              </div>
              <GenericProgressBar id={this.props.second.key} value={this.props.second.value} type="Linear" height="50rem"/>
              <Card.Text>
                <small className="colorGrey" style={{float:"left"}}>{this.props.second.speaking}</small>
                <small className="colorGrey" style={{float:"right"}}>{this.props.second.waiting}</small>
              </Card.Text>
          </Card.Body>
      </Card>
    );
  }
}
export default SecondStats;