import React from 'react';

export default () => (
  <footer className='container-fluid black_more'>
  <div className='bg-footer'>
    <img src='./img/footer-img.png' alt='bg-footer'/>
  </div>
    <div className='row m-2-hor'>
      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading'>
            <h2>About Us</h2>
          </div>
          <div className='content'>
             <p>Mi Casa is a dedicated home interior design company that work with you tirelessly 
             to tie your style with their design expertise, creating 
             the perfect interior design concept.</p>
          </div>
          <div className='link-call' onClick={()=> window.open("mailto:support@micasa.com", "_self")}>support@micasa.com</div>
        </div>
      </div>
      <div className='col-md-2'>
        <div className='footer-col'>
          <div className='heading'>
            Usefull link
          </div>
          <div className='content'>
             <div className='link'>Frequently Asked</div>
             <div className='link'>Terms & Conditions</div>
             <div className='link'>Help Center</div>
             <div className='link'>Contact Us</div>
          </div>
        </div>
      </div>
      <div className='col-md-2'>
        <div className='footer-col'>
          <div className='heading'>
            Features
          </div>
          <div className='content'>
            <div className='link'>Career</div>
            <div className='link'>Brand Identity</div>
            <div className='link'>Investment</div>
            <div className='link'>Agency Patner</div>
          </div>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading'>
            Follow Us
          </div>
          <div className='content'>
            <p>Explore thousands of inspiring interior designs, 
            from our best team here.</p>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa fa-facebook-f"></i>
            </div>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa fa-linkedin"></i>
            </div>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa fa-twitter"></i>
            </div>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa  fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='subfooter'>
      <div className='row m-2-hor'>
        <div className='col-md-6'>
          <div className='content'>© Copyrights 2021 Neshdecor All rights reserved.</div>
        </div>
      </div>
    </div>
  </footer>
);
