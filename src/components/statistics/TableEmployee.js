import React, { Component } from "react";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import GenericTable from "../generic/GenericTable";

class TableEmployee extends Component {
    
    render() {
        return (
            <Card className="m-1 w-100 h-100">
                <Card.Body >
                    <Card.Title>
                        <span className="pr-1">Employees</span> 
                        {(this.props.mode === "edit") ? <span><FontAwesomeIcon icon={faEllipsisV} style={{float:"right"}} /></span> : ""}
                    </Card.Title>
                    <hr/>
                    <GenericTable tbody={this.props.tableEmployees.tbody} thead={this.props.tableEmployees.thead} />
                    
                   {/*<GridComponent dataSource={this.props.data} allowSorting={true} sortSettings={this.sortingOptions} pageSettings={{pageSize:5}} >
                     <ColumnsDirective> 
                        <ColumnDirective field='name' width="100" headerText='Name'></ColumnDirective> 
                        <ColumnDirective field='name' width="100" headerText='Name' 
                        template={`<small><FontAwesomeIcon  size="xs" icon="faCircle" style="color: {item.backgroundColor}" />{name}</small>`} ></ColumnDirective>
                        <ColumnDirective field='nr' width="50" headerText='NR' textAlign="Center"></ColumnDirective> 
                        <ColumnDirective field='status' width="80" headerText='Status'></ColumnDirective>
                        <ColumnDirective field='cause' width="100" headerText='Cause'></ColumnDirective> 
                        <ColumnDirective field='group' width="50" headerText='Group'></ColumnDirective>  
                    </ColumnsDirective> 
                    <Inject services={[Page, Sort]} /> 
                    </GridComponent> */}
                </Card.Body>
            </Card>
        );
    }
}
export default TableEmployee;