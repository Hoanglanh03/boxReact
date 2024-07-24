import React from "react";
import "./Home.css";
import BannerHome from "../../assets/images/BannerHome.webp";

function Home() {
  return (
    <div className="home-container">
      <div className="banner">
        <img src={BannerHome} alt="banner" />
      </div>
      <div className="home-content">
          
      </div>
    </div>
  );
}

export default Home;
