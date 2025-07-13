import React, { useState } from "react";
import "./qualifications.css";

const Qualifications = () => {
  const [Toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section_title">Qualifications</h2>
      <span className="section_subtitle">My Personal Journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              Toggle === 1
                ? "qualification_button qualification_active button-flex"
                : "qualification_button button-flex"
            }
            onClick={()=>toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>
          <div
            className={
              Toggle === 2
                ? "qualification_button qualification_active button-flex"
                : "qualification_button button-flex"
            }
            onClick={()=>toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              Toggle === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">MCA</h3>
                <span className="qualification_subtitle">
                  Invertis University,Bareilly
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>2025
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Web Development</h3>
                <span className="qualification_subtitle">
                  Invertis University,Bareilly
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>2024
                </div>
              </div>
            </div>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">B.sc</h3>
                <span className="qualification_subtitle">
                  kumaun University,Nainital
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>2021
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>

          <div className={
              Toggle === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Front-end Developer</h3>
                <span className="qualification_subtitle">Oasis Infobyte</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>May-July,2024
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Front-end Developer</h3>
                <span className="qualification_subtitle">CodSoft</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>July-August,2024
                </div>
              </div>
            </div>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">AI Tool Workshop</h3>
                <span className="qualification_subtitle">Be10x</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>April 2025
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
