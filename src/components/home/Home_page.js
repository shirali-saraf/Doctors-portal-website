import React from "react";
import "./Home_page.css";
import frontpage_img from "../images/frontpage_img.png"
import images1 from "../images/images 1.png"
import doc1 from "../images/doc1.png"
import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"
import icon4 from "../images/icon4.png"
import { Link } from "react-router-dom";

const Home_page = () => {
  return (
    <div>
      <div className="home_container">
        <div className="home_first">
          <div className="home_content1">
          <h1>Your Health, Our Priority</h1>
          </div> 
          <div className="home_content2">
            <h2>Your Gateway to Specialized Healing,<br/>Meet Our Expert Doctors</h2>
          
            <Link to='/findDoctors'><button className="home_btn">contact experts</button></Link>
          </div>
        </div>

        <div className="home_second"><img src={frontpage_img} alt="frontimage" className="home_img"/></div>
      </div>

      <div className="home_container2">
        <div className="container2_heading">
          <h1>20+ Specialities</h1>
          <h3>Set up a clinic visit and discover experts in different fields</h3>
        </div>
        <div className="container2_seeall">
           <Link to='/specialities'><span className="buttons">See all</span></Link>
          
        </div>
      </div>
      
      <div className="home_specialist_container">
        <div className="img_container">
          <img src={images1} alt="specialities"/>
          <h3>Dentist</h3>
          <h5>Teething problem?
Schedule a dental checkup</h5>
        </div>
        <div className="img_container">
          <img src={images1} alt="specialities"/>
          <h3>Dentist</h3>
          <h5>Teething problem?
Schedule a dental checkup</h5>
        </div>
        <div className="img_container">
          <img src={images1} alt="specialities"/>
        </div>
        <div className="img_container">
          <img src={images1} alt="specialities"/>
        </div>
        <div className="img_container">
          <img src={images1} alt="specialities"/>
        </div>
        <div className="img_container">
          <img src={images1} alt="specialities"/>
        </div>
        
      </div>

      <hr className="line"></hr>

      <div className="home_container3">
        <h1>Popular Doctors Available </h1>
      </div>

      <div className="home_doctors_container">
        <div className="popular_doctors_container">
          <div className="doctors_container1">
            <img src={doc1} alt="doctor_image" className="home_doc_image"/>
            <span>View profile</span>
          </div>
          <div className="doctors_container2">
            <h2>Dr. K C Verma</h2>
            <h3>8 years of Experience </h3>
            <h3>MBBS, MD - DVL, Fellowship in Dermato Surgery, DNB - DVL
Epiderma Skin and Hair Clinic , Bengaluru</h3>
          </div>
          <div className="doctors_container3">
            <span>Consultation Fee</span>
            <span>₹ 249/-</span>
            <button className="buttons">Consult Now</button>
          </div>

        </div>
        <div className="popular_doctors_container">
          <div className="doctors_container1">
            <img src={doc1} alt="doctor_image" className="home_doc_image"/>
            <span>View profile</span>
          </div>
          <div className="doctors_container2">
            <h2>Dr. K C Verma</h2>
            <h3>8 years of Experience </h3>
            <h3>MBBS, MD - DVL, Fellowship in Dermato Surgery, DNB - DVL
Epiderma Skin and Hair Clinic , Bengaluru</h3>
          </div>
          <div className="doctors_container3">
            <span>Consultation Fee</span>
            <span>₹ 249/-</span>
            <button className="buttons">Consult Now</button>
          </div>
        </div>
      </div>

      <div className="home_about_container">
        <div>
          <h2>Why Find Doctors On Cured</h2>
          <div className="home_about">
            <div className="about_content">
              <div><img src={icon1} alt="icon1"/></div>
              <div className="about_text">
                <h2>Accessibility</h2>
                <h5>With 20+ specialities, 400+ doctors and partnerships with more than 600 renowned hospitals across the nation.</h5>
              </div>
            </div>
            <div className="about_content">
            <div><img src={icon2} alt="icon1"/></div>
            <div className="about_text"> 
                <h2>Convenience</h2>
                <h5>Most patients prefer online consultations due to the easy and convenient process involved. With every 4th</h5>
              </div>
            </div>
            <div className="about_content">
            <div><img src={icon3} alt="icon1"/></div>
            <div className="about_text">
                <h2>Certified Doctors</h2>
                <h5>We have a broad network of top specialized doctors, with over 10 years of experience to provide you with quality care.</h5>
              </div>
            </div>
            <div className="about_content">
            <div><img src={icon4} alt="icon1"/></div>
            <div className="about_text">
                <h2>Affordability</h2>
                <h5>Online consultations help you save money since it costs a fraction of the price compared to physically visiting a doctor.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_page;
