import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faCalendar, faCheckSquare, faHome, faIdCard, faMapMarker, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

class Menu extends Component {
  constructor(props){
    super(props);
  }
  render() {
    
    return (
      <div className="wrap-flex-column">
        <Nav  className="flex-column">
            <Nav.Link href="/" className={(this.props.to === "home") ? "active" : ""} ><FontAwesomeIcon icon={faHome} size="2x" className="mb-3 mt-3 ml-4 mr-4"/></Nav.Link>
            <Nav.Link href="/alerts" ><FontAwesomeIcon icon={faBullhorn}  size="2x" className="mb-3 mt-3 ml-4 mr-4"/></Nav.Link>
            <Nav.Link href="/statistics" className={(this.props.to === "statistics") ? "active" : ""} ><FontAwesomeIcon icon={faIdCard}  size="2x" className="mb-3 mt-3 ml-4 mr-4" /></Nav.Link>
            <Nav.Link href="/maps"><FontAwesomeIcon icon={faMapMarker} size="2x" className="mb-3 mt-3 ml-4 mr-4" /></Nav.Link>
            <Nav.Link href="/calendars" ><FontAwesomeIcon icon={faCalendar}  size="2x" className="mb-3 mt-3 ml-4 mr-4" /></Nav.Link>
            <Nav.Link href="/todolist" ><FontAwesomeIcon icon={faCheckSquare}  size="2x" className="mb-3 mt-3 ml-4 mr-4" /></Nav.Link>
            <Nav.Link href="/faq" ><FontAwesomeIcon icon={faQuestionCircle}  size="2x" className="mb-3 mt-3 ml-4 mr-4" /></Nav.Link>
        </Nav>
      </div>
    );
  }
}
export default Menu;
