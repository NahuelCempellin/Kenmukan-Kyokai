import React from "react";
import LogoKen from "../../assets/Logo.png";
import Caligrafia from "../../assets/Kenmu.png";
import "../navbar/navbar.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <div>
        <img src={LogoKen} className="logo-imagen" alt="logo" />
      </div>

      <div>
        <img src={Caligrafia} className="logo-caligrafia" alt="caligrafia" />
      </div>
    </div>
  );
};

export default Logo;
