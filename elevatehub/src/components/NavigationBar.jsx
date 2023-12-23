import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

function NavigationBar() {
  return (
    <div>

      <Navbar style={{backgroundColor:" rgb(202, 145, 255)"}}>
        <Nav className="ms-auto p-3">
          <NavLink to="/:" className="fa nav-link btn m-2">
            <i className="fa fa-home fa-fw">Home</i>
          </NavLink>
          <NavLink to="/:/courses" className="fa nav-link btn m-2">
            <i className="fa fa-graduation-cap fa-fw">COURSES</i>
          </NavLink>
          <NavLink to="/:/compete" className="fa nav-link btn m-2">
            <i className="fa fa-flag fa-fw"></i>
            COMPETE
          </NavLink>
          <NavLink to="/:/mentorship" className="fa nav-link btn m-2">
            <i className="fa fa-bolt fa-fw">MENTORSHIP</i>
          </NavLink>
          <NavLink to="/:/community" className="fa nav-link btn m-2">
            <i className="fa fa-users fa-fw">COMMUNITY</i>
          </NavLink>
          <NavLink to="/" className="fa nav-link btn m-2">
            <i className="fa fa-download fa-fw">LOGIN</i>
          </NavLink>
          <NavLink to="/SIgnup" className="fa nav-link btn m-2">
            <i className="fa fa-user-plus fa-fw">SIGNUP</i>
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
