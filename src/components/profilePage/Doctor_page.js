import React from 'react'
import './ProfileStyle.css';
import tempimg from '../images/doc1.png';


export default function Doctor_page() {
  return (
    <div className='profile-main-container'>
      <div className="profile-container">
        <div className="child main-profile">
            <div className="profile-image">
                {/* temp Image ***************************************** */}
                <img src={tempimg} alt="Profile Image" />
                {/* ************************************************** */}
            </div>
            <div className="profile-detail">
                <div className="profile-text">
                    {/* Temp DATA ****************************************** */}
                    <h2>Jatin Kumar</h2>
                    <p className="rating-card">Rating : <span>4/5</span></p>
                    {/* ***************************************************** */}
                </div>
                <div className="profile-spec">
                    {/* Temp data ******************************************** */}
                    <p className="spec-card">Spec 1</p>
                    <p className="spec-card">Spec 1</p>
                    <p className="spec-card">Spec 1</p>
                    <p className="spec-card">Spec 1</p>
                    <p className="spec-card">Spec 1</p>
                    <p className="spec-card">Spec 1</p>
                    {/* ********************************************* */}
                </div>
            </div>
        </div>
        <div className="child details" >
            <div className="price-tag">
                <p>Ticket Price</p>
                {/* Temp Rate **************************** */}
                <p className='doctor-price'>300</p>
                {/* ******************************* */}
            </div>
            <div className="slot-container">
                <p className='slot-header'>Available Time Slots</p>
                <div className="time-slots">
                    <div className="slot-child">
                        <p>Monday</p>
                        <p className="time">1:00pm - 4:00pm</p>
                    </div>
                    <div className="slot-child">
                        <p>Tuesday</p>
                        <p className="time">1:00pm - 4:00pm</p>
                    </div>
                    <div className="slot-child">
                        <p>Wednesday</p>
                        <p className="time">1:00pm - 4:00pm</p>
                    </div>
                </div>
                <div className="book-slot-button">
                    <button>Book Appointment</button>
                </div>
            </div>
        </div>
        <div className="child about">
            <p className='about-header'>About </p>
            <p className='about-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Distinctio nesciunt fuga delectus, enim optio at ratione nam 
                laudantium natus? Numquam perferendis natus reiciendis minima 
                deleniti pariatur minus est laborum possimus!
            </p>
            <div className="personal-details">
                <div className="personal-detail-child">
                    <p className='detail-heading'>Education</p>
                    <p className="detail-entry">MBBS , MD</p>
                </div>
                <div className="personal-detail-child">
                    <p className='detail-heading'>Registration Number</p>
                    <p className="detail-entry">RM123HBBHC</p>
                </div>
                <div className="personal-detail-child">
                    <p className='detail-heading'>Contact Number</p>
                    <p className="detail-entry">1234567890</p>
                </div>
                <div className="personal-detail-child">
                    <p className='detail-heading'>Address</p>
                    <p className="detail-entry">HIG-61 Kanupriya nagar , Rau , Indore</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
