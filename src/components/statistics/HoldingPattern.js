import React, { Component } from "react";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import { formatPercentage, formatTime } from "../../utils";

class HoldingPattern extends Component {
  
  render() {
    
    return (
      <Card className="m-2 w-100">
          <Card.Body className="p-0 ">
              <Card.Title className="pt-3 pl-3"><span className="pr-1">{this.props.data.title}</span> 
              {(this.props.mode === "edit") ? <span><FontAwesomeIcon icon={faEllipsisV} style={{float:"right"}} /></span> : ""}
              </Card.Title>
              <div  className="pl-3 pr-3 m-0"><hr/></div>
              <div className="fill-height m-0 text-center">
                <div className="pt-2 pb-2">
                    <h5 className="colorGrey">HOLDING PATTERNS</h5>
                </div>
                <div className="pt-2 pb-2" style={{margin: 0, color: "white", backgroundColor: this.props.data.colorWaitingCallers}}>
                    <h2>{this.props.data.numberWaitingCallers}</h2>
                    <small className="colorGrey">Number of waiting callers</small>
                </div>
                <div className="pt-2 pb-2" style={{margin: 0, color: "white", backgroundColor: this.props.data.colorWaitingTime}}>
                    <h2>{formatTime(this.props.data.maximumWaitingTime, true)}</h2>
                    <small className="colorGrey">Maximum waiting time</small>
                </div>
                <div className="pt-2 pb-2">
                    <h2>{formatTime(this.props.data.waitingTimeToday, true)}</h2>
                    <small className="colorGrey">Waiting time of the day</small>
                </div>
                <div className="pt-2 pb-2">
                    <h5 className="colorGrey">REACHABILITY</h5>
                </div>
                <div className="pt-2 pb-2">
                    <h2>{this.props.data.numberCallsToday}</h2>
                    <small className="colorGrey">Number of calls today</small>
                </div>
                <div className="pt-2 pb-2">
                    <h2>{this.props.data.acceptedCallsToday}</h2>
                    <small className="colorGrey">Accepted calls today</small>
                </div>
                <div className="pt-2 pb-2" style={{margin: 0, color: "white", backgroundColor: this.props.data.colorCallsToday}}>
                    <h2>{formatPercentage(this.props.data.availabilityRate)}</h2>
                    <small className="colorGrey">Availability rate</small>
                </div>
              </div>
          </Card.Body>
      </Card>
    );
  }
}
export default HoldingPattern;