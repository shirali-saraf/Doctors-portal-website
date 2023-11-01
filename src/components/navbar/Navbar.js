import React from 'react';
import logo from "../images/cured_logo.gif";
import "./Navbar.css";

import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <div className='navbar_container'>
        <div className='navbar_logo'><img src={logo} alt='logo' className='logo'/></div>
        <div className='navbar_search'>
          <input type='search' className='navbar_search_btn' placeholder='Search for Diseses,Doctors,Specialist...'/>
        </div>
        <div className='navbar_content'>
          <ul>
            <li><Link to="/findDoctors">Find a doctor</Link></li>
            <li>ContactUs</li>
          </ul>
        </div>
        <div className='navbar_login'>
          {/* <div className='login_div'> */}
             <span className='box'><Link to="/login"><span>Login</span>/<span>Signup</span></Link></span>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
