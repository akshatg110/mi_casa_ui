import React from 'react';

export default () => (
  <section className="container-fluid">
    <div className="row m-2-hor">
      <div className="col-md-6 pt-5">
        <div className="col-home">
          <div className="thumb">
            <img src="./img/about-2.png" className="img-fluid" alt="#" />
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="dflex-center">
          <div className="col-home mt-md-0 mt-5">
            <div className="heading">We Are Interior Design</div>
            <div className="content">
              We are a renowned interior design consultancy and
              project Management Company that has offered interior design
              services for corporate, residential and retail clients for 10
              years and counting.<br />
               We believe that interior design is more than
              great functionality and beautiful aesthetics. 
              spend time in.
            </div>
            <ul className="list-home">
              <li>Office Interior</li>
              <li>Residential Interior Designs</li>
              <li>Wardrobe Design Interior</li>
              <li>Space Saving Furniture</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);
