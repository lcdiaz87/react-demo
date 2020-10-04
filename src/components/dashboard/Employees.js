import React, { Component } from "react";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import GenericDoughnutChart from "./GenericDoughnutChart";

class Employees extends Component {
    constructor (props){
        super(props);
    }
    render() {
        let grafico
        return (
            <Card className="m-1 w-100 h-100">  
                <Card.Body>
                    <Card.Title>
                        <span className="pr-1">Employees</span> 
                        {(this.props.mode === "edit") ? <span><FontAwesomeIcon icon={faEllipsisV} style={{float:"right"}} /></span> : ""}
                    </Card.Title>
                    <hr/>
                    <GenericDoughnutChart companies={this.props.companies} height="130rem" width="130rem" />
                </Card.Body>
            </Card>
        );
    }
}
export default Employees;