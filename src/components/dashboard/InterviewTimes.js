import React, { Component } from "react";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import GenericProgressBar from "./GenericProgressBar";
import { findAllByDisplayValue } from "@testing-library/react";

class InterviewTimes extends Component {
  constructor(props){
    super(props);
  }
  render() {
    //read mode by default
    let progressBar = <div>
      <small className="colorGrey" style={{float:"left"}}>Last call: {this.props.interviewTimes.last}</small>
      <GenericProgressBar id={this.props.interviewTimes.key} value="100" type="Linear" color="#047689" bgcolor="#ffffff"/>

      <small className="colorGrey" style={{float:"left"}}>Time Talking: {this.props.interviewTimes.speaking}</small>
      <GenericProgressBar id={this.props.interviewTimes.key2} value={this.props.interviewTimes.value} type="Linear" color="#73B8C3" bgcolor="#ffffff" />

    </div>;
    if (this.props.mode === "edit") {
      progressBar = <div>
          <GenericProgressBar id={this.props.interviewTimes.key} value={this.props.interviewTimes.value} type="Linear" color="#22B671" bgcolor="#F79416" />
          <Card.Text>
            <small className="colorGrey" style={{float:"left"}}>{this.props.interviewTimes.speaking}</small>
            <small className="colorGrey" style={{float:"right"}}>{this.props.interviewTimes.waiting}</small>
          </Card.Text>
        </div>;
    }

    return (
      <Card className="m-1 w-100 h-100">
          <Card.Body>
              <Card.Title>
                <span className="pr-1">Interview Times</span> 
                {(this.props.mode === "edit") ? <span><FontAwesomeIcon icon={faEllipsisV} style={{float:"right"}} /></span> : ""}
              </Card.Title>
              <hr/>
              <div style={{textAlign: "center"}}>
                <h2>{this.props.interviewTimes.total}</h2>
                <small className="colorGrey">Total</small>
                <hr/>
                <h2>{this.props.interviewTimes.last}</h2>
                <small className="colorGrey">Last call</small>
              </div>
              { progressBar }
          </Card.Body>
      </Card>
    );
  }
}
export default InterviewTimes;