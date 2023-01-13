import React from 'react';
import { Nav, NavIcon, NavLink, Bars, NavLogo } from './NavbarElements';
import logo from "../../images/header_logo.png"

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <NavLogo>
            <img className="logo" alt="BSCO Logo" src={logo}/>
          </NavLogo>
        </NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  )
}

export default Navbar