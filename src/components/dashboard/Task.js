import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, Formik } from "formik";
import React, { Component } from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import './Dashboard.css';
class Task extends Component {
    constructor(props){
        super(props);
        this.state ={
            tasks: props.tasks
        };
        console.log(props.tasks);
    }
    render() {
        
        return (
             <Container fluid >
                <Row>
                    <Col><h4>Tasks</h4></Col>
                </Row>
                <Row>
                    <Col className="pt-2 pb-2 pl-0 pr-0">
                        <Formik>
                            <Form>
                                <Field name="search" placeholder="Search..." className="w-100" />
                            </Form>
                        </Formik>  
                    </Col>
                </Row>
                <Row>
                    <Table responsive className="border-table">
                        <tbody>
                            {
                                this.state.tasks.map((item, index) => 
                                     <tr key={index}>
                                        <td  style={{width:"5px"}}>
                                            <small><FontAwesomeIcon  size="xs" icon={faCircle} style={{ color: item.backgroundColor }} />  </small>
                                        </td>
                                        <td><p><strong>{item.title}</strong></p></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Row>
            </Container> 
        );
    }
}
export default Task;