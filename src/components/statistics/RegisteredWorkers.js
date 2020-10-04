import React, { Component } from "react";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import GenericDoughnutChart from "./GenericDoughnutChart";

class RegisteredWorkers extends Component {
    constructor (props){
        super(props);
    }
    render() {
        return (
            <Card className="m-1 w-100 h-100">
                <Card.Body >
                    <div class="fill-height">
                        <div>
                        <Card.Title><span className="pr-1">Employees</span> <span><FontAwesomeIcon icon={faEllipsisV} style={{float:"right"}} /></span></Card.Title>
                        </div>
                        <div>

                        </div>

                    </div>
                    
                    <hr/>
                    <GenericDoughnutChart data={this.props.employees} height="130rem"/>
                </Card.Body>
            </Card>
        );
    }
}
export default RegisteredWorkers;