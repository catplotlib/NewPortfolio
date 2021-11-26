import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./portfolio.scss";
//Assets
import Arrow from "../../assets/portfolio/arrow.svg";
import Preview1 from "../../assets/portfolio/project01/preview.png";
import Preview2 from "../../assets/portfolio/project02/preview.png";
import Preview3 from "../../assets/portfolio/project03/preview.png";
import Preview4 from "../../assets/portfolio/project04/preview.png";
import Preview5 from "../../assets/portfolio/project05/preview.png";
import Preview6 from "../../assets/portfolio/project06/preview.png";
import Preview7 from "../../assets/portfolio/project07/preview.png";
import Preview8 from "../../assets/portfolio/project08/preview.png";
//Components
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // PORTFOLIO PROJECTS
      projects: [
        {
          id: "1",
          preview: Preview8,
          title: "CreatorHQ",
          sub: "Support your favourite creators with Crypto.",
          tag: "react",
          link: "https://github.com/CreatorHQ/CreatorHQ-main",
        },
        {
          id: "2",
          preview: Preview7,
          title: "Madlibs",
          tag: "react",
          link: "https://github.com/catplotlib/Madlibz",
          sub: "A madlibs website that takes input from the user and turns it into a hilarious script!",
        },
        
        {
          id: "3",
          preview: Preview1,
          title: "RainCheck- Weather App",
          sub: "A weather app made in react native that fetches the weather API and shows the current teperature and weather and forecasts temperature for the next two days.",
          tag: "react-native",
          link: "https://github.com/catplotlib/WeatherApp",
        },

        {
          id: "4",
          preview: Preview4,
          title: "Newsletter",
          tag: "react",
          link: "https://github.com/catplotlib/Newsletter",
          sub: "A fullstack application that lets the users to join a newsletter by through their email address. Frontend is made in react and Tailwindcss and backend is made using Django Rest Framework.",
        },
        {
          id: "5",
          preview: Preview5,
          title: "Lets play with APIs",
          tag: "react",
          link: "https://github.com/catplotlib/RickAndMortyAPI",
          sub: "A basic website displaying all the characters of Rick and Morty and with a search functionality",
        },
        {
          id: "6",
          preview: Preview2,
          title: "Aximos-The Adventure Game",
          link: "https://github.com/catplotlib/Adventure-based-Text-game",
          sub: "A choose your own story text based game, made completely in React and deployed using netlify. ",
          tag: "react",
        },
        {
          id: "7",
          preview: Preview3,
          title: "The Movie Quiz",
          tag: "react-native",
          sub: "A simple app with minimal UI for a quiz application on movies.",
          link: "https://github.com/catplotlib/MovieQuiz",
        },
        {
          id: "8",
          preview: Preview6,
          title: "BarTinder",
          tag: "express",
          link: "https://github.com/catplotlib/Bar-Tinder",
          sub: "A completely responsive and dynamic Full stack Express.js Webapp that recommends cocktails based on filters!",
        },
      ],
      // PORTFOLIO GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING
      filterResult: null,
      pickedFilter: "all",
      filterMenuActive: false,
      pickedFilterDropdown: "NEWEST",
    };
  }

  // FIRST LOAD
  componentDidMount() {
    this.filterGallery("all");
  }

  //FILTER PORTFOLIO FUNCTION
  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "all") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({
      filterResult: result,
      pickedFilter: target,
      pickedFilterDropdown: "NEWEST",
    });
  };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  filterMenuHover = (event) => {
    if (event) {
      this.setState({ filterMenuActive: true });
    } else {
      this.setState({ filterMenuActive: false });
    }
  };

  // FILTER DROP DOWN HANDLER
  filterDropDownHandler = (filter) => {
    this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

    let projectsArr = [...this.state.filterResult];
    let result;

    if (filter === "NEWEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else if (filter === "OLDEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }

    this.setState({ filterResult: result });
  };

  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => (
        <ProjectBox
          preview={project.preview}
          key={project.id}
          title={project.title}
          sub={project.sub}
          tag={project.tag}
          link={project.link}
        />
      ));
    }
    // PORTFOLIO GALLERY BREAKPOINTS
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    // PORTFOLIO FILTER DROPDOWN MENY RENDER
    let filterDroppDown = null;
    if (this.state.filterMenuActive) {
      filterDroppDown = (
        <div className="portfolio__filter-menu shadow">
          <p
            className="font12"
            onClick={() => this.filterDropDownHandler("NEWEST")}
          >
            NEWEST
          </p>
          <p
            className="font12"
            onClick={() => this.filterDropDownHandler("OLDEST")}
          >
            OLDEST
          </p>
        </div>
      );
    }

    return (
      <div id="portfolio">
        <div className="wrapper">
          <Title title="MY PROJECTS" />
          <Row>
            <Col xs={12} sm={12} md={8} lg={9}>
              <div className="portfolio__nav">
                <ul>
                  <li
                    className={
                      this.state.pickedFilter === "all"
                        ? "portfolio__nav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("all")}
                  >
                    ALL
                  </li>
                  <li
                    className={
                      this.state.pickedFilter === "react"
                        ? "portfolio__nav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("react")}
                  >
                    REACT
                  </li>
                  <li
                    className={
                      this.state.pickedFilter === "react-native"
                        ? "portfolio__nav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("react-native")}
                  >
                    REACT NATIVE
                  </li>
                  <li
                    className={
                      this.state.pickedFilter === "express"
                        ? "portfolio__nav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("express")}
                  >
                    EXPRESS
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3}>
              <div
                className="portfolio__filter"
                onMouseEnter={() => this.filterMenuHover(true)}
                onMouseLeave={() => this.filterMenuHover(false)}
              >
                <p className="font12">
                  {this.state.pickedFilterDropdown} FIRST
                </p>
                <img src={Arrow} alt="arrow" />
                {filterDroppDown}
              </div>
            </Col>
          </Row>
          <Masonry
            breakpointCols={portfolioBreakpoints}
            className="my-masonry-grid"
            columnClassName="mint__gallery"
          >
            {projectsRender}
          </Masonry>
          <Row className="flex-center padding40">
            <Button label="Get in Touch" target={"contact"} />
          </Row>
        </div>
      </div>
    );
  }
}

export default Portfolio;
