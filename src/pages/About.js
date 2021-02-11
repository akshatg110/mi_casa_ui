import React from "react";
import { withRouter } from "react-router-dom";
import Reveal from 'react-reveal/Reveal';

import Abouthome from '../components/Abouthome';
import Carouselclient from '../components/Carouselclient';
import Carouselclientb from '../components/Carouselclientb';
import Carouselteam from '../components/Carouselteam';
import Accomplish from '../components/Accomplish';
import Carouselprojects from '../components/Carouselprojects';
import Footer from '../components/Footer';

import { Efect, Efect1, Efect2  } from "../styles/effect.styles";
  

const About = ({ history }) => {

  return (
    <div>
      <Efect />
      <Efect1 />
      <Efect2 />

      <div className="jumbotron head" />

      <Reveal effect="fadeIn">
        <section className="jumbotron imgtop">
          <img src="./img/aboutImage.png" className="img-fluid" alt="#" />
        </section>
      </Reveal>

      <Reveal effect="fadeIn">
        <section className="container-fluid pb-0">
          <div className="row m-2-hor">
            <div className="col-md-4">
              <h1>About Interior Designs</h1>
            </div>
            <div className="col-md-8">
              <div className="content">
                A good office interior design is key in helping your company to
                reach new heights. By thinking intelligently about your scheme,
                you can foster a positive workplace culture, attract and retain
                talented employees, improve working practices and strengthen
                your brand identity.
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <Abouthome />
      </Reveal>

      <section className="container-fluid bggray mt-5 pb-0">
        <div className="row m-2-hor">
          <div className="col-12">
            <Carouselclient />
          </div>
        </div>
      </section>

      <section className="container-fluid bggray">
        <div className="row m-2-hor">
          <div className="col-12">
            <Carouselclientb />
          </div>
        </div>
      </section>

      <Reveal effect="fadeInUp">
        <section className="container-fluid">
          <div className="row m-2-hor">
            <div className="col-12">
              <div className="heading">Our Team</div>
            </div>
            <div className="col-12">
              <Carouselteam />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <Accomplish />
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className="container-fluid py-0">
          <div className="row m-2-hor">
            <div className="col-12">
              <div className="heading">Our Projects</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-0">
              <Carouselprojects />
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </div>
  );
};

export default withRouter(About);
