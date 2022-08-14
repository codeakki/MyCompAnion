import React from "react";
import Navbar from "../components/landingPage/Navbar.jsx";
import "./landingPage.css";
import Carousel from "../components/landingPage/Carousel";
const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Navbar />
      <Carousel />
    </div>
  );
};

export default LandingPage;
