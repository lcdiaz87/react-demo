import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, Formik } from "formik";
import React, { Component } from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import {connect} from "react-redux";
import { getTasksAsync, getAllTasksMatchedByNameAsync } from "../../actions/taskAction";
import './Dashboard.css';
class Task extends Component {
    
    componentDidMount = () => {
        //this.props.getTasks();
    }
    render() {
        this.searchTask = (event) => {
            this.props.getAllTasksMatchedByName(event.target.value);
        }

        return (
             <Container fluid >
                <Row>
                    <Col><h4>Tasks</h4></Col>
                </Row>
                <Row>
                    <Col className="pt-2 pb-2 pl-0 pr-0">
                        <Formik>
                            <Form>
                                <Field name="search" placeholder="Search..." className="w-100" onBlur={this.searchTask} />
                            </Form>
                        </Formik>  
                    </Col>
                </Row>
                <Row>
                    <Table responsive className="border-table">
                        <tbody>
                            {
                                this.props.tasks.map((item, index) => 
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
function mapStateToProps (state,props){
    return{
        tasks: state.taskStore
    }
}
function mapDispatchToProps(dispatch){
    return{
        getTasks: () => dispatch(getTasksAsync()),
        getAllTasksMatchedByName: (taskToSearch) => dispatch(getAllTasksMatchedByNameAsync(taskToSearch))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Task);