import React from "react";
// Scss
import "./projectBox.scss";
const projectBox = (props) => (
  <div className="portfolio__box">
    <img src={props.preview} alt="project" />
    <div className="portfolio__hover-info flex-center">
      <div className="text-center">
        {/* <u> */}
          <p className="font20 weight800">{props.title}</p>
        {/* </u> */}
        <div
          style={{
            marginLeft: "3rem",
            marginRight: "3rem",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <p style={{ margin: "0", padding: "0" }} className="font10 weight500">
            {props.sub}
          </p>
        </div>
        <p className="font12 weight800">{props.tag}</p>
        <br />
        <button className="btn">
          <a href={props.link}>Link to Code</a>
        </button>
      </div>
    </div>
  </div>
);

export default projectBox;
