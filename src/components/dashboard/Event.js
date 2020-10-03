import { Field, Formik } from "formik";
import React, { Component } from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import { formatTime } from "../../utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCircle } from '@fortawesome/free-solid-svg-icons';

import './Dashboard.css';
class Event extends Component {
    constructor(props){
        super(props);
        this.state ={
            events: props.events
        };
        console.log(props.events);
    }
    render() {
        
        return (
            <Container fluid>
                <Formik initialValues={{orderBy: 'Newest'}}>
                <Form>
                <Row>
                    <Col xs={9} md={8}><h4>Events</h4></Col>
                    <Col xs={1}>
                        <FontAwesomeIcon icon={faCalendar} />
                    </Col>
                    <Col className="w-100 pl-0">
                        <Field name="orderBy" as="select" className="w-100">
                            <option value="Default">Default</option>
                            <option value="Newest">Newest</option>
                            <option value="Oldest">Oldest</option>
                            <option value="Title">A-Z</option>
                        </Field>  
                    </Col>
                </Row>
                <Row>
                    <Col className="pt-2 pb-2 pl-0 pr-0">
                        <Field name="search" placeholder="Search..." className="w-100" />
                    </Col>
                </Row>
                </Form>
                </Formik>  
                <Row>
                    <Table responsive className="border-table p-3">
                        <tbody>
                            {
                                this.state.events.map((item, index) => 
                                    <tr key={index}>
                                        <td  style={{width:"5px"}}>
                                            <small><FontAwesomeIcon  size="xs" icon={faCircle} style={{ color: item.backgroundColor }} />  </small>
                                        </td>
                                        <td><p><strong>{item.title}</strong></p></td>
                                        <td style={{width: "20px"}}><p>{ formatTime(item.published) }</p></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Row>
                <Row>
                    <Col style={{textAlign: "center"}}>
                        <a href="/">Add new article</a>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Event;