import React from "react";
import "../styles/footer.css"
import {
  BsFacebook,
  BsYoutube} from "react-icons/bs";
  import { AiFillTwitterCircle} from "react-icons/ai";
  import { FaLinkedinIn} from "react-icons/fa";
const Footer=()=>{
    return (
      <footer className="footer">
        <div className="flex-dc">
          <img src="./images/footer-logo.png" alt="logo" className="f-logo" />
          <p>
            Duis aute irure dolor in repreh enderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat
            cupidatat non proident.
          </p>
          <div className="icons">
            <div className="icon-div">
              <BsFacebook className="social" />
            </div>
            <div className="icon-div">
              <AiFillTwitterCircle className="social" />
            </div>
            <div className="icon-div">
              <BsYoutube className="social" />
            </div>
            <div className="icon-div">
              <FaLinkedinIn className="social" />
            </div>
          </div>
        </div>
        <div className="flex-dc">
          <h5>Quick Links</h5>
          <a href=".">Get Involved</a>
          <a href=".">Donate Now</a>
          <a href=".">Become a Volunteer</a>
          <a href=".">Careers</a>
          <a href=".">Site Map</a>
        </div>
        <div className="flex-dc">
          <h5>Office Links</h5>
          <a href=".">USA Office</a>
          <a href=".">Australia Office</a>
          <a href=".">Canada Office</a>
          <a href=".">Networks</a>
          <a href=".">North America</a>
        </div>
        <div className="flex-dc">
          <h5>Contact Us.</h5>
          <a href=".">Elliot Ave, Parkville VIC 3052, Melbourne Canada</a>
          <a href=".">Phone +2348053708531</a>
          <a href=".">Email gantechloy@gmail.com</a>
        </div>
      </footer>
    );
}

export default Footer;