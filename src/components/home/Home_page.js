import React from "react";
import "./Home_page.css";
import frontpage_img from "../images/frontpage_img.png"
import images1 from "../images/images 1.png"

const Home_page = () => {
  return (
    <div>
      <div className="home_container">
        <div className="home_first">
          {/* <div className="home_content1"> */}
          <h1>Your Health, Our Priority</h1>
          {/* </div>  */}
          {/* <div className="home_content2"> */}
            <h2>Your Gateway to Specialized Healing,<br/>Meet Our Expert Doctors</h2>
          {/* </div> */}
          <div>
            <button className="home_btn">contact experts</button>
          </div>
        </div>

        <div className="home_second"><img src={frontpage_img} alt="frontimage" className="home_img"/></div>
      </div>

      <div className="home_container2">
        <div className="container2_heading">
          <h3>20+ Specialities</h3>
          <h3>Set up a clinic visit and discover experts in different fields</h3>
        </div>
        <div className="container2_seeall">
          <span>See all</span>
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
        
      </div>
    </div>
  );
};

export default Home_page;
