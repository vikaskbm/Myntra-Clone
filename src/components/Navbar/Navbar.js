import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'

import myntralogo from '../../assets/myntraSprite.png';
import './Navbar.css';

const NavContainer = styled.header`
  background: transparent;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 1.5em 
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  max-width:100%;
`

const Logo = styled.header`
  background: url('${myntralogo}') -290px -61px;
  width: 51px;
  height: 36px;
`

const NavLink = styled(Link)`
  color: #282C3F;
  padding-left:20px;
  font-weight:bold;
  text-decoration:none;
`

const pictureLinkComp = function (props) {
  return (
    // <Link  to={props.link} className={props.className}>
    <>
      <div>
        <FontAwesomeIcon/>
      </div>
      <Link  to='/' className={props.className}>
        {props.link}
      </Link>
    </>
  );
} 

const PictureLink = styled(pictureLinkComp)`
text-decoration:none;
display:block;
color:#000;
text-align:center;
padding: 0 10px;
`

const SearchBar = styled.input`
  margin-right: 50px;
  padding:10px 10px;
  max-width:100%;

  line-height:24px;
  outline:0;
  border: 1px solid #F5F5F6;

  background-color:#F5F5F6

  :focus{
      border:none;
  }
`


function Header() {
  return (
    <div className="header_wraper">
    <NavContainer>
        <div className="left-items">
          <Logo className="brand_logo" /> 
        
          <NavLink to="/" className="nav_link">MEN</NavLink>
          <NavLink to="/" className="nav_link">WOMEN</NavLink>
          <NavLink to="/" className="nav_link">KIDS</NavLink>
          <NavLink to="/" className="nav_link">HOME &amp; LIVING</NavLink>
          <NavLink to="/" className="nav_link">DISCOVER</NavLink>
        </div>
        <div className="right-items">
          <SearchBar placeholder="Search for products, brands and more" className="search-bar" />
          <div className="profile-links">
            <PictureLink to="/" link="Profile" />
            <PictureLink to="/" link="Wishlist"/>
            <PictureLink to="/" link="Bag"/>
          </div>
        </div>
    </NavContainer>
  </div>
  );
}

export default Header;
