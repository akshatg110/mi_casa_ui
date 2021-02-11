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
      dots: true,
      infinite: false,
      speed: 500,
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
            infinite: true,
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
      <div className="slick slickteam">
        <Slider {...settings}>
          <CustomSlide className="itm" index={1}>
            <div className="bg">
              <img
                src="./img/team/jay-man.png"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="name">James Oyanna</div>
              <div className="title">Web Developer</div>
            </div>
            <div className="icon">
              <span onClick={() => window.open("//facebook.com/", "_blank")}>
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </span>
              <span onClick={() => window.open("//linkedin.com/", "_blank")}>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </span>
              <span onClick={() => window.open("//twitter.com/", "_blank")}>
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </span>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={2}>
            <div className="bg">
              <img
                src="./img/team/tolu.png"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="name">Alabi Toluwa</div>
              <div className="title">Head of Marketing</div>
            </div>
            <div className="icon">
              <span onClick={() => window.open("//facebook.com/", "_blank")}>
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </span>
              <span onClick={() => window.open("//linkedin.com/", "_blank")}>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </span>
              <span onClick={() => window.open("//twitter.com/", "_blank")}>
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </span>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={3}>
            <div className="bg">
              <img
                src="./img/team/ebun.png"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="name">Alabi Ebun</div>
              <div className="title">Director of operations</div>
            </div>
            <div className="icon">
              <span onClick={() => window.open("//facebook.com/", "_blank")}>
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </span>
              <span onClick={() => window.open("//linkedin.com/", "_blank")}>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </span>
              <span onClick={() => window.open("//twitter.com/", "_blank")}>
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </span>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={4}>
            <div className="bg">
              <img
                src="./img/team/bryant.png"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="name">Bryant Kalu</div>
              <div className="title">Interior Designer</div>
            </div>
            <div className="icon">
              <span onClick={() => window.open("//facebook.com/", "_blank")}>
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </span>
              <span onClick={() => window.open("//linkedin.com/", "_blank")}>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </span>
              <span onClick={() => window.open("//twitter.com/", "_blank")}>
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </span>
            </div>
          </CustomSlide>
        </Slider>
      </div>
    );
  }
}
