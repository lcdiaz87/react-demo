import React, { Component } from "react";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import GenericProgressBar from "./GenericProgressBar";

class AllocatedCalls extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Card className="m-1 w-100 h-100">
          <Card.Body>
              <Card.Title><span className="pr-1">Allocated Calls</span> 
                {(this.props.mode === "edit") ? <span><FontAwesomeIcon icon={faEllipsisV} style={{float:"right"}} /></span> : "" }
              </Card.Title>
              <hr/>
              <GenericProgressBar id={this.props.allocatedCalls.key} value={this.props.allocatedCalls.value} type="Circular" color="#21BF64" bgcolor="#E5E5E5"/>
              <div className="fill-width-blocked">
                <div className="blocked" style={{color: "green", borderRight: "1px solid rgba(0,0,0,.125)", borderRadius: ".25rem"}}>
                  <div>
                    <h2>{this.props.allocatedCalls.accepted}</h2>
                    <small className="colorGrey">Accepted</small>
                  </div>
                </div>
                <div className="blocked">
                  <div>
                    <h2>{this.props.allocatedCalls.calls}</h2>
                    <small className="colorGrey">Calls</small>
                  </div>
                </div>
              </div>
          </Card.Body>
      </Card>
    );
  }
}
export default AllocatedCalls;