import { Field, Formik } from "formik";
import React, { Component } from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import { formatDate } from "../../utils";
import './Dashboard.css';
class News extends Component {
    constructor(props){
        super(props);
        this.state ={
            news: props.news
        };
        console.log(props.news);
    }
    render() {
        
        return (
            <Container fluid>
                <Row>
                    <Col xs={10}><h4>News</h4></Col>
                    <Col xs={2}>
                        <Formik initialValues={{orderBy: 'Newest'}}>
                            <Form>
                                <Field name="orderBy" as="select" className="w-100">
                                    <option value="Default">Default</option>
                                    <option value="Newest">Newest</option>
                                    <option value="Oldest">Oldest</option>
                                    <option value="Title">A-Z</option>
                                </Field>  
                            </Form>
                        </Formik>  
                    </Col>
                </Row>
                <Row>
                    <Table responsive className="border-table">
                        <tbody>
                            {
                                this.state.news.map((item, index) => 
                                     <tr key={index}>
                                        <td  style={{width: "30px"}} className="col-vertical-align">
                                            <p style = {{
                                                display: "inline-block",
                                                fontSize:"1em",
                                                width:"2.5em",
                                                height:"2.5em",
                                                lineHeight:"2.5em",
                                                textAlign:"center",
                                                borderRadius:"50%",
                                                background: item.backgroundColor,
                                                verticalAlign:"middle",
                                                marginRight:"1em",
                                                color:"white"
                                            }}>
                                                <small>{item.nameInitials}</small>
                                            </p>
                                        </td>
                                        <td className="col-vertical-align"><p className="title-news"><strong>{item.title}</strong></p></td>
                                        <td style={{width: "70px"}}  className="col-vertical-align">{ formatDate(item.published) }</td>
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
export default News;