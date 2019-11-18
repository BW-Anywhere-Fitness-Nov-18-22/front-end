import React, { useState } from 'react';
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

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">ANYWHERE FITNESS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          {/* <li><NavLink exact to={'/'}>Home</NavLink></li>
//                     <li><NavLink to={'/classes'}>Classes</NavLink></li>
//                     <li><NavLink to={'/Sign-Up'}>Sign-Up</NavLink></li>
//                     <li><NavLink to={'/Login'}>Login</NavLink></li> */}
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
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



