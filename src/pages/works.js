import React from "react";
import { withRouter } from "react-router-dom";
import Reveal from 'react-reveal/Reveal';


import { Efect, Efect1, Efect2  } from "../styles/effect.styles";
  

const Works = ({ history }) => {

  return (
    <div>
      <Efect />
      <Efect1 />
      <Efect2 />

      <div className="jumbotron head" />

      <Reveal effect="fadeInUp">
        <section className="container-fluid pb-0">
          <div className="row m-2-hor">
            <div className="col-md-12">
              <h1 className="heading mt-5">
                Find design ideas from our design gallery
              </h1>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className="container-fluid">
          <div className="row m-2-hor">
            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                        <div className="bg">
                          <img
                            src="./img/projects/proj-1.png"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        {/* <div className="desc">
                          <div className="tag">Interior</div>
                          <div className="name">Entertainment Unit</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
                        </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                        <div className="bg">
                          <img
                            src="./img/projects/proj-2.png"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        {/* <div className="desc">
                          <div className="tag">Furniture</div>
                          <div className="name">Mounted Unit</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
                        </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                        <div className="bg">
                          <img
                            src="./img/projects/proj-3.png"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        {/* <div className="desc">
                          <div className="tag">Interior</div>
                          <div className="name">Contemporary Wall</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
                        </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                        <div className="bg">
                          <img
                            src="./img/projects/proj-4.png"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        {/* <div className="desc">
                          <div className="tag">Interior</div>
                          <div className="name">Crockery Wall</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
                        </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                        <div className="bg">
                          <img
                            src="./img/projects/project.png"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        {/* <div className="desc">
                          <div className="tag">Interior</div>
                          <div className="name">Entertainment Unit</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
                        </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                        <div className="bg">
                          <img
                            src="./img/projects/proj-1.png"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        {/* <div className="desc">
                          <div className="tag">Furniture</div>
                          <div className="name">Mounted Unit</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
                        </div> */}
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

      {/* <Footer /> */}
    </div>
  );
};

export default withRouter(Works);
