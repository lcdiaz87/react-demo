import React, { Component } from "react";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import GenericProgressBar from "./GenericProgressBar";

class FirstStats extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Card className="m-1 w-100 h-100">
          <Card.Body>
              <Card.Title><span className="pr-1">Allocated Calls</span> <span><FontAwesomeIcon icon={faEllipsisV} style={{float:"right"}} /></span></Card.Title>
              <hr/>
              <GenericProgressBar id={this.props.first.key} value={this.props.first.value} type="Circular" height="130rem"/>
              <div className="fill-width">
                <div className="blocked" style={{color: "green", borderRight: "1px solid rgba(0,0,0,.125)", borderRadius: ".25rem"}}>
                  <div>
                    <h2>{this.props.first.accepted}</h2>
                    <small className="colorGrey">Accepted</small>
                  </div>
                </div>
                <div className="blocked">
                  <div>
                    <h2>{this.props.first.calls}</h2>
                    <small className="colorGrey">Calls</small>
                  </div>
                </div>
              </div>
          </Card.Body>
      </Card>
    );
  }
}
export default FirstStats;