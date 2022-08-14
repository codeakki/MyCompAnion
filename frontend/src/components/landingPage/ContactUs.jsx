import React from "react";
import { PhoneFilled } from "@ant-design/icons";
import resImg from "../../assets/images/banner_img.jpg";
import "./ContactUs.css";
import Navbar from "./Navbar";
const ContactUs = () => (
  <>
    <Navbar />
    <div className="reservation">
      <div className="reservation__box">
        <p className="res_paragraph">We Are Here For Your Help</p>
        <h2 className="res_heder">Got some doubt?Get in touch Now!</h2>
        <p className="detail__paragraph">Our servies are available 24*7.</p>
        <p className="res__phone">
          <PhoneFilled /> 0100.292.200.00
        </p>
        <p>help@mycompanion.com</p>
      </div>
      <div className="reservation__view">
        <img className="reservation__img" src={resImg} alt="banner" />
      </div>
    </div>
  </>
);

export default ContactUs;
