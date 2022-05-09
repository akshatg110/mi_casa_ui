import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Reveal from 'react-reveal/Reveal';
import Slider from '../components/Sliderhome';
import Featurehome from '../components/Featurehome';
import Abouthome from '../components/Abouthome';
import Carouselfeature from '../components/Carouselfeature';
import Carouselclient from '../components/Carouselclient';
import Carouselclientb from '../components/Carouselclientb';
import Carouselprojects from '../components/Carouselprojects';
import Carouselteam from '../components/Carouselteam';
import Accomplish from '../components/Accomplish';
import Carouselnews from '../components/Carouselnews';
import Footer from '../components/Footer';
import {
  LinkWrap,
  Overlay
} from "../styles/Work.styles";
import emailjs from 'emailjs-com';
import { Efect, Efect1, Efect2  } from "../styles/effect.styles";

const Home = ({ history }) => {
  const [toCase, setCase] = useState("");
const [coord, setCoords] = useState();

useEffect(() => {
    toCase &&
      setTimeout(() => {
        history.push(toCase);
      }, 600);
  }, [toCase, history]);
  function sendEmail(e) {
    const success = document.getElementById("success");
    const button = document.getElementById("buttonsent");
    const failed = document.getElementById("failed");
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_csfdEZiA', e.target, 'user_zu7p2b3lDibMCDutH5hif')
      .then((result) => {
          console.log(result.text);
          success.classList.add('show');
          button.classList.add('show');
          failed.classList.remove('show');
      }, (error) => {
          console.log(error.text);
          failed.classList.add('show');
      });
  }
  const handleCaseSwap = (e, uri) =>
  e.x < coord + 15 && e.x > coord - 15 && setCase(uri);
  return (
    <div>

      <Efect/>
      <Efect1/>
      <Efect2/>
      {/* <header id="header">
        <div id="logo" data-content-field="site-title">
          <h1 class="logo">
              MI CASA
          </h1>
        </div>

      </header> */}

      {/* <Reveal effect="fadeIn">
        <section className="jumbotron jumbomain">
            <Slider />
        </section>
      </Reveal> */}
      
      {/* <Featurehome/> */}

      <Reveal effect="fadeInUp">
        <section className='container-fluid'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Our Expertnesses</div>
            </div>
            <div className='col-12'>
              <Carouselfeature/>
            </div>
          </div>
        </section>
      </Reveal>

      {/* <Reveal effect="fadeInUp">
        <section className='container-fluid py-0'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <Carouselclient/>
            </div>
          </div>
        </section>
      </Reveal> */}
      
      {/* <Reveal effect="fadeInUp">
        <section className='container-fluid'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <Carouselclientb/>
            </div>
          </div>
        </section>
      </Reveal> */}

      {/* <Reveal effect="fadeInUp">
        <section className='container-fluid py-0'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Our Projects</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 p-0'>
              <Carouselprojects/>
            </div>
          </div>
        </section>
      </Reveal> */}

      {/* <Reveal effect="fadeInUp">
        <section className='container-fluid'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Our Team</div>
            </div>
            <div className='col-12'>
              <Carouselteam/>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <Accomplish/>
      </Reveal> */}

      {/* <Reveal effect="fadeInUp">
        <section className='container-fluid pt-0'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Latest News</div>
            </div>
            <div className='col-12'>
              <Carouselnews/>
            </div>
          </div>
        </section>
      </Reveal> */}
      <div>
      <Reveal effect="fadeInUp">
        <section className="container-fluid">
          <div className="row m-2-hor">
            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                    {/* <LinkWrap active={toCase === "/detailcase"}> */}
                      {/* <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailcase")
                        }
                      > */}
                        <div className="bg">
                          <img
                            src="./img/projects/proj-1.png"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        <div className="desc">
                          <div className="tag">Interior</div>
                          <div className="name">Entertainment Unit</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
                        </div>
                      {/* </Overlay> */}
                    {/* </LinkWrap> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                    <LinkWrap active={toCase === "/detailcase1"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailcase1")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/projects/proj-2.png"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        <div className="desc">
                          <div className="tag">Furniture</div>
                          <div className="name">Mounted Unit</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                    <LinkWrap active={toCase === "/detailcase2"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailcase2")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/projects/proj-3.png"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        <div className="desc">
                          <div className="tag">Interior</div>
                          <div className="name">Contemporary Wall</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                    <LinkWrap active={toCase === "/detailcase3"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailcase3")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/projects/proj-4.png"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        <div className="desc">
                          <div className="tag">Interior</div>
                          <div className="name">Crockery Wall</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                    <LinkWrap active={toCase === "/detailcase"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailcase")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/projects/project.png"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        <div className="desc">
                          <div className="tag">Interior</div>
                          <div className="name">Entertainment Unit</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                    <LinkWrap active={toCase === "/detailcase1"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailcase1")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/projects/proj-1.png"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        <div className="desc">
                          <div className="tag">Furniture</div>
                          <div className="name">Mounted Unit</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <div className="page-link">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                </li>
                <li className="page-item">
                  <div className="page-link active">1</div>
                </li>
                <li className="page-item">
                  <div className="page-link">2</div>
                </li>
                <li className="page-item">
                  <div className="page-link">3</div>
                </li>
                <li className="page-item">
                  <div className="page-link">
                    <i className="fa fa-chevron-right"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Reveal>
      </div>
  
      <div className="jumbotron head"/>

      <Reveal effect="fadeInUp">
       <section className='container'>
          <div className='row'>
            <div className='col-12'>
              <h1>Get in touch with us to design <br/>your <span className='color'>dream</span> home</h1>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
       <section className='container pt-0'>
          <div className='row'>
            {/* <div className='col-12'>
              <SimpleMap/>
            </div> */}
            <div className='col-md-6'>
            <div className="text-side">
              <h3 className="heading">Talk with our expert designers </h3>
              <p>Vestibulum volutpat, lacus a ultrices sagittis, 
              mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. <br/>
              Phasellus pede arcu, dapibus eu, fermentum et, 
              dapibus sed, urna.</p>
              <div className='address'>
                <div className='heading'>Our Office</div>
                <div className='list'>
                  <i className="fa fa-map-marker"></i>
                 Plot 9A, Admiralty, Lekki phase 1
                </div>
                <div className='list'>
                  <i className="fa fa-envelope-o"></i>
                  <a href='mailto:engrjayt200@gmail.com' target='_blank' rel='noopener noreferrer'>
                    info@micasa.com
                  </a>
                </div>
                <div className='list'>
                  <i className="fa fa-phone"></i>
                  +234 8030384958
                </div>
                </div>
              </div>
            </div>

            <div className='col-md-6'>
            <div className="form-side">
              <form className="formcontact" onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" required />
                <label>Email</label>
                <input type="email" name="user_email" required />
                <label>Message</label>
                <textarea name="message" required />
                <div id='success' className='hide'>Your message has been sent...</div>
                <div id='failed' className='hide'>Message failed...</div>
                <button type="submit" id='buttonsent'>
                  <span className="shine"></span>
                  <span>Send</span>
                </button>
              </form>
            </div>
          </div>


          </div>
       </section>
      </Reveal>

      

      {/* <Footer /> */}

      {/* <Footer /> */}

    </div>
  );
};

export default withRouter(Home);
