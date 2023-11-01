import React from 'react'
import './Login.css'
// import img1 from '../images/login_side.png';
export default function LoginForm(prop) {
    return (
        <div>
            {/* <div className="form-container">
                <div className="form-image">
                    <img src={prop.img} alt="" />
                </div> */}
                {/* <div className="form-data"> */}
                    <div className="form-child">
                        <form>
                            <ul>
                                <li>
                                    <label>Mobile Number / Email ID <br />
                                        <input type="text" placeholder='Mobile Number / Email ID' />
                                    </label>
                                </li>
                                <li>
                                    <label>Password <br />
                                        <input type="password" placeholder='Password' />
                                    </label>
                                </li>
                            </ul>
                        </form>
                        <div className="forget-pass">
                            <p>Forgot Password?</p>
                        </div>
                        <div className="submit-btn">
                            <button>Login</button>
                        </div>
                    </div>
                {/* </div> */}
            {/* </div> */}
        </div>
    )
}
