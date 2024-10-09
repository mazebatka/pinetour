import React from "react";
import "./Footer.css";
import { FooterLogo, InstagramLogo, FacebookLogo } from "../../assets";

export const Footer = () => {
  return (
    <div id="footer-container">
      <div id="inner-container">
        <div id="logo">
          <FooterLogo />
        </div>
        <div id="socials">
          <div className="social">
            <FacebookLogo />
            Facebook
          </div>
          <div className="social">
            <InstagramLogo />
            Instagram
          </div>
        </div>
      </div>
    </div>
  );
};
