import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Mohd Asif</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer_link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.linkedin.com/in/mohdasif07"
            className="footer_social-link"
            target="_blank"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/MohdAsif678"
            className="footer_social-link"
            target="_blank"
          >
            <i class="uil uil-github-alt"></i>
          </a>

          <a
            href="https://www.instagram.com/asif_azhari1?igsh=aHc2dWt4YmEybTVr"
            className="footer_social-link"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>
        </div>

        <span className="footer_copy">
          &#169; MohdAsif. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
