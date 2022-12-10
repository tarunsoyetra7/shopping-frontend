import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import Home from "./Home";

function NavbarHeader() {
    return(
        <Navbar fixed="top" container="fluid" style={{textAlign:"center" ,padding:"5px", position:"fixed"}} 
          color="dark" >
          <Nav>
            <NavItem>
              <Link className="nav-link" style={{fontSize:"20px", color:"white"}} to="/">Reactstrap</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" style={{fontSize:"20px", color:"white"}} to="/#">Components</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" style={{fontSize:"20px", color:"white"}} to="/#">
                GitHub
              </Link>
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
            <Link className="nav-link" to="/sign-up" style={{display:"inline-block",  marginRight:"20px", color:"white"}}>Sign Up</Link>
            <Link className="nav-link" to="/login" style={{display:"inline-block" , paddingRight:"20px", color:"white" }}>Login</Link>
          </NavbarText>
          
      </Navbar> 
    )
}

export default NavbarHeader;