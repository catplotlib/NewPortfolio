import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";

import TwitterIcon from "../../../assets/contact/twitter.svg";
import GithubIcon from "../../../assets/contact/github.svg";
import DribbleIcon from "../../../assets/contact/dribble.svg";
import LinkedinIcon from "../../../assets/contact/linkedin.svg";

const contactSocial = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={1} className="contact__social">
          <img src={GithubIcon} alt="Github" />
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <a href="https://twitter.com/CatPlotLib" target="_blank">
            <img src={TwitterIcon} alt="Twitter" />
          </a>
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <a href="https://www.linkedin.com/in/catplotlib/" target="_blank">
            <img src={LinkedinIcon} alt="LinkedIn" />
          </a>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactSocial;
