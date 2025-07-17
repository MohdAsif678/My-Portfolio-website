import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [Toggle, setToggle] = useState(0);
  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What I Offer</span>

      <div className="services_container container grid">
        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">
              Frontend <br />
              Developer
            </h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              Toggle === 1 ? "services_modal active_modal" : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_modal-close"
              ></i>

              <h3 className="services_modal-title">Frontend Developer</h3>
              <p className="services_modal-description">
                Building responsive and high-performance websites.
              </p>

              <ul className="services_modal-services grid">
                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I develop the creative user interfaces.
                  </p>
                </li>

                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Web page development.</p>
                </li>

                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I create ux element interactions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">
              UI/UX <br />
              Desinger
            </h3>
          </div>
          <span onClick={() => toggleTab(2)} className="services_button">
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              Toggle === 2 ? "services_modal active_modal" : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_modal-close"
              ></i>

              <h3 className="services_modal-title">UI/UX Desinger</h3>
              <p className="services_modal-description">
                Created user interfaces and optimizes user experiences for
                digital products.
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">User-Centered Design.</p>
                </li>

                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Wireframing & Prototyping.
                  </p>
                </li>

                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Visual Consistency.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-camera-change services_icon"></i>
            <h3 className="services_title">
              Photography <br /> Videography
            </h3>
          </div>
          <span onClick={() => toggleTab(3)} className="services_button">
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              Toggle === 3 ? "services_modal active_modal" : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_modal-close"
              ></i>

              <h3 className="services_modal-title">
                Photography & Videography
              </h3>
              <p className="services_modal-description">
                Capturing the best moments with creativity and precision.
              </p>

              <ul className="services_modal-services grid">
                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Visual Storytelling.</p>
                </li>

                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Technical Expertise.</p>
                </li>

                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Creative Direction.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
