import React from 'react';
import logo from "C:/Users/dell/React_default/project/doctors-appointment-application/doctors-app/src/components/images/cured_logo.gif";
import "./Navbar.css";
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
            <li>Find a doctor</li>
            <li>ContactUs</li>
          </ul>
        </div>
        <div className='navbar_login'>
          {/* <div className='login_div'> */}
             <span className='box'> <span>Login</span>/<span>Signup</span></span>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
