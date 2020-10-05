import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Table } from "react-bootstrap";
import {formatTime} from "../../utils";
class GenericTable extends Component {
    
    render() {
        return (
            <div className=" my-scrollbar">
                <Table striped bordered hover size="sm" >
                    <thead>
                    <tr>
                        {this.props.thead.map((columnName, index) => (
                        <th key={index}>{columnName}</th>
                        ))}
                    </tr>
                    </thead>
                        <tbody>
                        {this.props.tbody.map((employee, index) => (
                            <tr key={index}>
                            <td>
                                <small className="pr-3">
                                <FontAwesomeIcon
                                    size="xs"
                                    icon={faCircle}
                                    style={{color: employee.backgroundColor }}
                                />&nbsp;
                                </small>
                                <strong>{employee.name}</strong>
                            </td>
                            <td>
                                <strong>{employee.nr}</strong>
                            </td>
                            <td>
                                <strong style={{ color: employee.backgroundColor }}>
                                {employee.status}
                                </strong>
                                <br/>
                                <small>{formatTime(employee.time, true)}</small>
                            </td>
                            <td>
                                <small>{employee.cause}</small>
                            </td>
                            <td>
                                <small>{employee.group}</small>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                </Table>
          </div>
        );
    }
}
export default GenericTable;