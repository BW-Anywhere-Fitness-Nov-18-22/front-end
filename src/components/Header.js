import React, { useState } from 'react';
import { Route, NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

// import Dashboard from './Dashboard';
import SignUp from './SignUp';
// import Classes from './ClassCardContainer';
import Login from './Login';




export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">ANYWHERE FITNESS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
         
            <li className="nav-item">
                <NavLink exact to='/' className="nav-link">Home</NavLink>
                {/* <Route exact path='/' component={Dashboard} /> */}
            </li>
            <li className="nav-item">
                <NavLink to='/classes' className="nav-link">Classes</NavLink>
                {/* <Route exact path='/classes' component={ClassCardContainer} /> */}
            </li>
            <li className="nav-item">
                <NavLink to='/register' className="nav-link">Sign-Up</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/login' className="nav-link">Login</NavLink>
            </li>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink to="https://github.com/orgs/BW-Anywhere-Fitness-Nov-18-22/dashboard">GitHub</NavLink>
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}



