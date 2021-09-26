import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from "./teamBox";
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import muffin from "../../assets/about/muffin.png";
import star from "../../assets/about/star.png";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="ABOUT ME." />

      <Row>
        <Col className="desk-only" md={12} lg={4}>
          <TeamBox avatar={muffin} name="Han Solo" job="Graphic Designer" />
        </Col>

        <Col md={12} lg={4}>
          <TeamInfo />
        </Col>

        <Col className="desk-only" md={12} lg={4}>
          <TeamBox avatar={star} name="Han Solo" job="Graphic Designer" />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
