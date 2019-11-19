import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
         
            <NavItem>
                <NavLink exact to={'/'}>Home</NavLink>
                {/* <Route exact path='/' component={Dashboard} /> */}
            </NavItem>
            <NavItem>
                <NavLink to={'/classes'}>Classes</NavLink>
                {/* <Route exact path='/classes' component={ClassCardContainer} /> */}
            </NavItem>
            <NavItem>
                <NavLink to={'/Sign-Up'}>Sign-Up</NavLink>
                <Route exact path='/Sign-Up' component={SignUp} />
            </NavItem>
            <NavItem>
                <NavLink to={'/Login'}>Login</NavLink>
                <Route exact path='/Sign-Up' component={Login} />
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink href="https://github.com/orgs/BW-Anywhere-Fitness-Nov-18-22/dashboard">GitHub</NavLink>
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




// export function Navigation() {
//     return (
//         <nav class="navbar navbar-default">
//             <div class="container-fluid">
//                 <div class="navbar-header">
//                     <NavLink class="navbar-brand" exact to={'/'}>ANYWHERE FITNESS</NavLink>
//                 </div>
//                 <ul class="nav navbar-nav">
//                     <li><NavLink exact to={'/'}>Home</NavLink></li>
//                     <li><NavLink to={'/classes'}>Classes</NavLink></li>
//                     <li><NavLink to={'/Sign-Up'}>Sign-Up</NavLink></li>
//                     <li><NavLink to={'/Login'}>Login</NavLink></li>
//                 </ul>
//             </div>
//         </nav>
//     )
// }



