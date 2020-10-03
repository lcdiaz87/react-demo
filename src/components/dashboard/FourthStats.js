import React, { Component } from "react";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import GenericDoughnutChart from "./GenericDoughnutChart";

class FourthStats extends Component {
    constructor (props){
        super(props);
        console.log(props.fourth);
    }
    render() {
        return (
            <Card className="m-1 w-100 h-100">
                <Card.Body >
                    <Card.Title><span className="pr-1">Employees</span> <span><FontAwesomeIcon icon={faEllipsisV} style={{float:"right"}} /></span></Card.Title>
                    <hr/>
                    <GenericDoughnutChart data={this.props.fourth} height="130rem"/>
                </Card.Body>
            </Card>
        );
    }
}
export default FourthStats;