import email from "../../assets/images/email.png";
import telephone from "../../assets/images/telephone-call.png";
import placeholder from "../../assets/images/placeholder.png";
import clock from "../../assets/images/clock.png";
import React from "react";

function ContactUs() {
  return (
    <div name="contactus" className="contactUs">
      <div className="contact">
        <div className="contactUs-top">
          <h1>CONTACT US</h1>
          <p>
            Thank you for visiting our website. We value your feedback and would
            love to hear from you. If you have any questions, comments, or
            concerns about our item exchange service, please contact us. We are
            available to answer your questions and provide assistance.
          </p>
        </div>
        <div className="contact-info">
          <div className="all-info-sec ">
            
            <div className="addess-sec info-sec">
              <div className="info-icons">
                <img src={placeholder} />
              </div>
              <div className="address-info inside-sec">
                <h2>ADDRESS</h2>
                <span>Mexico, Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>
          <div className="all-info-sec ">
            <div className="phone-sec info-sec">
              <div className="info-icons">
                <img src={telephone} />
              </div>
              <div className="phone-info inside-sec">
                <h2>PHONE</h2>
                <span>Mobile: (+251)922901114 </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="getIn">
        <h2>GET IN TOUCH</h2>
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Your email" />
        <input type="text" placeholder="Your phone" />
        <textarea placeholder="Your message" />
        <button type="button" className="btn3">
          Submit
        </button>
      </div>
    </div>
    
  );
}

export default ContactUs;
