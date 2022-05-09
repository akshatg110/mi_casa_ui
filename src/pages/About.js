import React from "react";
import { withRouter } from "react-router-dom";

import { Efect, Efect1, Efect2  } from "../styles/effect.styles";
  

const About = ({ history }) => {

  return (
    <div>
      <Efect />
      <Efect1 />
      <Efect2 />

      <div className="jumbotron head" />
      <div className='heading'>
            <h2>About Us</h2>
          </div>
          <div className='text-side'>
             <p>Mi Casa is a dedicated home interior design company that work with you tirelessly 
             to tie your style with their design expertise, creating 
             the perfect interior design concept.</p>
          </div>
    </div>
  );
};

export default withRouter(About);
