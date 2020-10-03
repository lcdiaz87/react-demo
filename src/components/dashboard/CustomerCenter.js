import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {Formik, Field, Form } from 'formik';
import CardCenter from './CardCenter';

class CustomerCenter extends Component {
    constructor(props){
        super(props);
        this.state = {
            centers: this.props.centers
        };
    }
  render() {
    return (

        <Container fluid>
            <Formik initialValues={{orderBy: 'Name'}}>
            <Form>
            <Row>
                <Col xs={8}><h4>Customer Center</h4></Col>
                <Col xs={4}>
                    <Field name="orderBy" as="select" className="w-100">
                        <option value="Default">Default</option>
                        <option value="Name">Name</option>
                        <option value="Size">Size</option>
                    </Field>    
                </Col>
            </Row>
            <Row>
                <Col>
                    <Field name="search" placeholder="Search..." className="w-100" />
                </Col>
            </Row>
            </Form>        
            </Formik>
            <Row>
                <Col>
                    {this.state.centers.map((center) =>
                        <CardCenter key={center.key} center={center} />
                    )}
                </Col>
            </Row>
        </Container>
          
    );
  }
}
export default CustomerCenter;
