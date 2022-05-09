import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/vertical.css';

const content = [
  {
    title: "Interior Design",
    description:
      "With precision",
    button: "More Detail",
    link: "/#",
    image: "./img/aboutImage.png"
  },
  {
    title: "Interior Expertise",
    description:
      "Stylish living",
    button: "More Detail",
    link: "/#",
    image: "./img/slider-4.png"
  },
  {
    title: "Land of Residence",
    description:
      "According lifestyle",
    button: "More Detail",
    link: "/#",
    image: "./img/slider-3.png"
  }
];

export default () => (
  <Slider className="slider-wrapper" autoplay={2000}>
            {content.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center` }}
              >
                {/* <div className="inner">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <button onClick={()=> window.open(item.link, "_self")}>
                    <span className="shine"></span>
                    <span>
                      {item.button}
                    </span>
                  </button>
                </div> */}
              </div>
            ))}
        </Slider>
);
