import { dataBound } from "@syncfusion/ej2-react-grids";
import React, { Component } from "react";
import Menu from "../components/Menu";
import data from "../data.json";
import CustomerCenter from "../components/dashboard/CustomerCenter";
import News from "../components/dashboard/News";
import Event from "../components/dashboard/Event";
import Task from "../components/dashboard/Task";
import Phone from "../components/dashboard/Phone";
import { Col, Container, Row } from "react-bootstrap";

export default class DashboardScreen extends Component {
    
    render() {
        return (
            <div className="content">
                <div className="menu">
                    <Menu />
                </div>
                <div className="customer-center">
                    <div className="content-center">
                        <CustomerCenter centers={data.centers} />
                    </div>
                </div>
                <div className="main">
                <section className="fill-height">
                    <div>
                        <div className="fill-width">
                            <div className="bigger">
                                <News news={data.news}  />
                            </div>
                            <div className="smaller">
                                <Event events={data.events} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="fill-width">
                            <div className="bigger">
                                <Phone phone={data.phone} />
                            </div>
                            <div className="smaller">
                                <Task tasks={data.tasks} />
                            </div>
                        </div>
                    </div>
                </section>
                    {/* <Container fluid className="h-100">
                        <Row>
                            <Col className="p-3" xs={12} md={8}>
                                <News news={data.news}  />
                            </Col>
                            <Col className="p-3" xs={12} md={4}> 
                                <Event events={data.events} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="p-3" xs={12} md={8}>
                                <Phone phone={data.phone} />
                            </Col>
                            <Col className="p-3" xs={12} md={4}>
                                <Task tasks={data.tasks} />
                            </Col>
                        </Row>
                    </Container> */}
                </div>
            </div>
        );
    }
}
