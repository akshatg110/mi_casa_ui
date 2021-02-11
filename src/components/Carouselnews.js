import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}></div>
    );
  }
}

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      autoPlay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 5000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="slick slicknews">
        <Slider {...settings}>
          <CustomSlide className="itm" index={1}>
            <div className="bg">
              <img
                src="./img/news/office.png"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="date"> Jan 08, 2021</div>
              <div className="name">Designing best office place</div>
              <div className="content">
                A dedicated work space in your home helps you set aside
                household distractions and focus on work. Here, we’ve gathered
                65 home office ideas that will inspire you to design a
                work-friendly space in your own home. These home offices,
                located everywhere from Lagos Nigeria, have one thing in common.
              </div>
            </div>
            <div className="icon">
              <span onClick={() => window.open("#", "_self")}>Read More</span>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={2}>
            <div className="bg">
              <img
                src="./img/news/news1.png"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="date"> Feb 2, 2021</div>
              <div className="name">Abuja interior decorations</div>
              <div className="content">
                Design in an urban city like Abuja could be very tough. We
                recently made a design in a superb abiance envirinment in Abuja.
              </div>
            </div>
            <div className="icon">
              <span onClick={() => window.open("#", "_self")}>Read More</span>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={3}>
            <div className="bg">
              <img
                src="./img/news/news2.png"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="date"> Jan 23rd, 2021</div>
              <div className="name">The busines of interior decoration</div>
              <div className="content">
                Home and offices are becoming well designed and modernized with
                new architechture. Do doubt, the new designs are made with stat
                of the art facility.
              </div>
            </div>
            <div className="icon">
              <span onClick={() => window.open("#", "_self")}>Read More</span>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={4}>
            <div className="bg">
              <img
                src="./img/news/news3.png"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="date"> Jan 19, 2021</div>
              <div className="name">Why homes new to be redesigned</div>
              <div className="content">
                Home design a becoming a norm. Giving a best touch touch design to your home could 
                be a good idea. A dedicated work space in your home helps you set aside
                household distractions and focus on work.
              </div>
            </div>
            <div className="icon">
              <span onClick={() => window.open("#", "_self")}>Read More</span>
            </div>
          </CustomSlide>
        </Slider>
      </div>
    );
  }
}
