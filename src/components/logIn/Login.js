import React from 'react'
import './Login.css';
import img1 from '../images/login_side.png';
import LoginForm from './LoginForm';


export default function longin(prop) {
  return (
    <div className='main-container'>
      <div className="container">
        <div className="login_header">
            <ul>
                <li>Login</li>
                <li>Register</li>
            </ul>
        </div>
        <div className="form-container">
          <div className="form-image">
            <img src={img1} alt="" />
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
