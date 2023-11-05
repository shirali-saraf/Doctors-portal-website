import React from 'react'
import './User_profile.css';
import temp from '../images/doc1.png'
import temp2 from '../images/Gynecologist-in-Noida 1.png'
export default function UserProfile() {
    return (
        <div className='user-main-container'>
            <div className="user-container">
                <div className="user-side-section">
                    {/* <p>"  -------------------------------------------------------                                                    "</p> */}
                    <div className="user-profile">
                        <div className="profile-image">
                            <img src={temp} alt="User Image" />
                        </div>
                        <div className="profile-detail">
                            <p className='user-name'>Jatin Kumar</p>
                            <p className="user-details"><b>Gmail :</b><br />abc@gmail.com</p>
                            <p className="user-details"><b>Contact No. :</b><br />1234567890</p>
                            <p className="user-details"><b>Address :</b><br />Hig-61 kanupriya nagar indore</p>
                        </div>
                    </div>
                </div>
                <div className="user-booking-section">
                    <div className="booking-header">
                        <p className='mybooking'>My Bookings</p>
                        <div className="booking-data">
                            <div className="data-entry">
                                <div className="profile-image-edit profile-image">
                                    <img src={temp2} alt="doctor-image" />
                                </div>
                                <div className="doctor-detail">
                                    <p className="d-name">Jatin Kumar</p>
                                    <p>Date : xx/xx/xxx</p>
                                </div>
                            </div>
                            <div className="data-entry">
                                <div className="profile-image-edit profile-image">
                                    <img src={temp2} alt="doctor-image" />
                                </div>
                                <div className="doctor-detail">
                                    <p className="d-name">Jatin Kumar</p>
                                    <p>Date : xx/xx/xxx</p>
                                </div>
                            </div>
                            <div className="data-entry">
                                <div className="profile-image-edit profile-image">
                                    <img src={temp2} alt="doctor-image" />
                                </div>
                                <div className="doctor-detail">
                                    <p className="d-name">Jatin Kumar</p>
                                    <p>Date : xx/xx/xxx</p>
                                </div>
                            </div>
                            <div className="data-entry">
                                <div className="profile-image-edit profile-image">
                                    <img src={temp2} alt="doctor-image" />
                                </div>
                                <div className="doctor-detail">
                                    <p className="d-name">Jatin Kumar</p>
                                    <p>Date : xx/xx/xxx</p>
                                </div>
                            </div>
                            <div className="data-entry">
                                <div className="profile-image-edit profile-image">
                                    <img src={temp2} alt="doctor-image" />
                                </div>
                                <div className="doctor-detail">
                                    <p className="d-name">Jatin Kumar</p>
                                    <p>Date : xx/xx/xxx</p>
                                </div>
                            </div>
                            <div className="data-entry">
                                <div className="profile-image-edit profile-image">
                                    <img src={temp2} alt="doctor-image" />
                                </div>
                                <div className="doctor-detail">
                                    <p className="d-name">Jatin Kumar</p>
                                    <p>Date : xx/xx/xxx</p>
                                </div>
                            </div>
                            <div className="data-entry">
                                <div className="profile-image-edit profile-image">
                                    <img src={temp2} alt="doctor-image" />
                                </div>
                                <div className="doctor-detail">
                                    <p className="d-name">Jatin Kumar</p>
                                    <p>Date : xx/xx/xxx</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="user-bookings"></div>
                </div>
            </div>
        </div>
    )
}
