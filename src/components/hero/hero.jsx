import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
import "../../style/App.scss";
//Assets
import HeroImage from "../../assets/hero/hero-image.png";
import resume from "../../assets/hero/resume.pdf";

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h2 className="weight800 font60">Hey</h2>
            <h2 className="weight800 font60">I am Puja</h2>
            <p className="font16 weight500">
              I am a front-end developer who lives and breathes React. I love
              building state-of-the-art, easy to use, user-friendly websites.
            </p>

            <a href={resume} download target="_blank" rel="noopener noreferrer">
              <button className="btn1"> RESUME </button>
            </a>
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
