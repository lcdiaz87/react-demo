import React, { Component } from "react";
import { Card } from "react-bootstrap";

class CustomerCenter extends Component {
  render() {
    return (
        <Card className="card-center m-1" key={this.props.center.key}>
            <Card.Body>
                <Card.Title>{this.props.center.title}</Card.Title>
                <Card.Text>
                    <strong>{this.props.center.schedule}</strong>
                    {this.props.center.address}
                    {this.props.center.city}
                </Card.Text>
                <Card.Link href="/">More Info</Card.Link>
            </Card.Body>
            <Card.Img src={this.props.center.image} className="card-img" />
        </Card>
    );
  }
}
export default CustomerCenter;
