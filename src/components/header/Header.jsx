import React, { useState } from "react";
import "./header.css";

const Header = () => {
  // ==================Change background header=============
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  // ==================Toggle Menu=============
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <a href="#" className="nav_logo">
            Mohd Asif
          </a>

          <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
            <ul className="nav_list grid">
              <li className="nav_item">
                <a
                  href="#home"
                  onClick={() => setActiveNav("#home")}
                  className={
                    activeNav === "#home" ? "nav_link active_link" : "nav_link"
                  }
                >
                  <i className="uil uil-home nav_icon"></i>Home
                </a>
              </li>

              <li className="nav_item">
                <a
                  href="#about"
                  onClick={() => setActiveNav("#about")}
                  className={
                    activeNav === "#about" ? "nav_link active_link" : "nav_link"
                  }
                >
                  <i className="uil uil-user nav_icon"></i>About
                </a>
              </li>

              <li className="nav_item">
                <a
                  href="#skills"
                  onClick={() => setActiveNav("#skills")}
                  className={
                    activeNav === "#skills"
                      ? "nav_link active_link"
                      : "nav_link"
                  }
                >
                  <i className="uil uil-laptop-cloud nav_icon"></i>Skills
                </a>
              </li>

              <li className="nav_item">
                <a
                  href="#services"
                  onClick={() => setActiveNav("#services")}
                  className={
                    activeNav === "#services"
                      ? "nav_link active_link"
                      : "nav_link"
                  }
                >
                  <i className="uil uil-briefcase nav_icon"></i>Services
                </a>
              </li>

              <li className="nav_item">
                <a
                  href="#portfolio"
                  onClick={() => setActiveNav("#portfolio")}
                  className={
                    activeNav === "#portfolio"
                      ? "nav_link active_link"
                      : "nav_link"
                  }
                >
                  <i className="uil uil-scenery nav_icon"></i>Portfolio
                </a>
              </li>

              <li className="nav_item">
                <a
                  href="#contact"
                  onClick={() => setActiveNav("#contact")}
                  className={
                    activeNav === "#contact" ? "nav_link active_link" : "nav_link"
                  }contact
                >
                  <i className="uil uil-message nav_icon"></i>Contact
                </a>
              </li>
            </ul>

            <i
              className="uil uil-times nav_close"
              onClick={() => showMenu(false)}
            ></i>
          </div>
          <div className="nav_toggle" onClick={() => showMenu(true)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
