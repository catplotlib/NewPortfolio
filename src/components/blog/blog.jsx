import React from "react";
import Swiper from "react-id-swiper";
// SCSS
import "./blog.scss";
import "swiper/css/swiper.css";
// Assets
import Preview01 from "../../assets/blog/story01/preview.png";
import Preview02 from "../../assets/blog/story02/preview.png";
import Preview03 from "../../assets/blog/story03/preview.png";
import Preview04 from "../../assets/blog/story04/preview.png";
import Preview05 from "../../assets/blog/story05/preview.png";
import Preview06 from "../../assets/blog/story06/preview.png";
// Components
import Title from "../ui-components/title/title";
import BlogBox from "./blogBox";

class Blog extends React.Component {
  state = {
    // LIST ARRAY OF BLOG STORIES
    stories: [
      {
        image: Preview01,
        id: "1",
        title: "Callbacks, Promises, and Async-Await",
        description:
          "In my last article, I talked about Synchronous and Asynchronous functions and we encountered an issue with...",
        date: "26 July 2021",
        link: "https://catplotlib.medium.com/callbacks-promises-and-async-await-18c27ad4ee8f",
      },
      {
        image: Preview02,
        id: "2",
        title: "But what is Synchronous and Asynchronous programming?",
        description:
          "Callbacks, Promises, and Async-Awaits…. What are these and why do we even need them? If you are a newbie...",
        date: "20 July 2021",
        link: "https://medium.com/geekculture/but-what-is-synchronous-and-asynchronous-programming-86d1e92471c",
      },
      {
        image: Preview03,
        id: "3",
        title: "MERN Stack Development Series",
        description:
          " I am really excited to announce that I will be starting a new article series on Web development focused...",
        date: "15 July 2021",
        link: "https://catplotlib.medium.com/mern-stack-development-series-38c49e6c6f6b",
      },
    ],
  };

  render() {
    // BLOG STORIES RENDER
    let storiesRender = null;
    if (this.state.stories) {
      storiesRender = this.state.stories.map((story) => (
        <div key={story.id}>
          <BlogBox article={story} />
        </div>
      ));
    }
    // OPTIONS FOR BLOG SLIDER
    const params = {
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    };

    return (
      <div className="blog" id="blog">
        <div className="wrapper">
          <Title title="MY BLOGS." />
          <p className="font12">Swipe to read more!</p>
          <div className="padding30">
            <Swiper {...params}>{storiesRender}</Swiper>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
