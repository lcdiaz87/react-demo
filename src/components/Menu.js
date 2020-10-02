import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faCalendar, faCheckSquare, faHome, faIdCard, faMapMarker, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

class Menu extends Component {
  render() {
    return (
      <div className="wrap-flex-column">
        <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link href="/" ><FontAwesomeIcon icon={faHome} size="2x" className="mb-3 mt-3 ml-4 mr-4"/></Nav.Link>
            <Nav.Link href="/statistics" ><FontAwesomeIcon icon={faBullhorn}  size="2x" className="mb-3 mt-3 ml-4 mr-4"/></Nav.Link>
            <Nav.Link href="/" ><FontAwesomeIcon icon={faIdCard}  size="2x" className="mb-3 mt-3 ml-4 mr-4" /></Nav.Link>
            <Nav.Link href="/statistics"><FontAwesomeIcon icon={faMapMarker} size="2x" className="mb-3 mt-3 ml-4 mr-4" /></Nav.Link>
            <Nav.Link href="/" ><FontAwesomeIcon icon={faCalendar}  size="2x" className="mb-3 mt-3 ml-4 mr-4" /></Nav.Link>
            <Nav.Link href="/statistics" ><FontAwesomeIcon icon={faCheckSquare}  size="2x" className="mb-3 mt-3 ml-4 mr-4" /></Nav.Link>
            <Nav.Link href="/" ><FontAwesomeIcon icon={faQuestionCircle}  size="2x" className="mb-3 mt-3 ml-4 mr-4" /></Nav.Link>
        </Nav>
      </div>
    );
  }
}
export default Menu;
