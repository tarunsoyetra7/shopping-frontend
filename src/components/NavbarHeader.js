import React, { useState } from "react";
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
    DropdownItem,
    NavbarText,
    Button,
  } from 'reactstrap';

function NavbarHeader() {

  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);

    return(
        <Navbar fixed="top" container="fluid" style={{textAlign:"center" ,padding:"5px", position:"fixed"}} 
    color="dark"
    dark>
          <Nav>
            <NavItem>
              <NavLink style={{fontSize:"20px", color:"white"}} href="/components/">Reactstrap</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{fontSize:"20px", color:"white"}} href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{fontSize:"20px", color:"white"}} href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{fontSize:"20px", color:"white"}}>
                Options
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText style={{fontSize:"20px"}}>
            {/* <Button outline style={{fontSize:"20px", marginRight:"10px", color:"white"}}>Sign Up</Button>
            <Button outline style={{fontSize:"20px", marginRight:"10px", color:"white"}}>Login</Button> */}
            <a className="nav-link" href="#" style={{display:"inline-block",  marginRight:"20px"}}>Sign Up</a>
            <a className="nav-link" href="#" style={{display:"inline-block" , paddingRight:"20px" }}>Login</a>
          </NavbarText>
          
      </Navbar> 
    )
}

export default NavbarHeader;