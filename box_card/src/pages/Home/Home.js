import React from "react";
import "./Home.css";
import BannerHome from "../../assets/images/BannerHome.webp";

function Home() {
  return (
    <div className="banner">
      <img src={BannerHome} alt="banner" />
    </div>
  );
}

export default Home;
