import React from 'react';
import './auth.business.css';

import { Row, Col } from "react-bootstrap"

const BusinessSignUp = () => {
  return (
    <div className="business-signup-container" style={{ marginLeft: "2rem", marginRight: "2rem", marginTop: "7rem", marginBottom: "7rem" }}>

      <div className="sbusiness-ignup-left">
        <h1>Sign Up for Mosoq</h1>
        <p>Lorem Ipsum Dolor Sit Amet Consectetur. Mi Ipsum Diam</p>
        <div className="illustration">
          <img src="business.png" style={{ width: '627px', height: "550px" }} />
        </div>
      </div>

      <div className="business-signup-right">
        <h2 className='mt-5'>Sign Up for Mosoq.</h2>
        <p>Connect with businesses</p>
        <button className="social-button google" style={{ fontWeight: '400', fontSize: "12px", backgroundColor: 'white', color: "black", border: "1px solid #CECECE" }}>
          <img src="/Social media logo.png" style={{ width: '24px', height: "24px", marginRight: '0.5rem' }} /> Continue with Google
        </button>

        <button className="social-button apple" style={{ fontWeight: '400', fontSize: "12px", backgroundColor: 'white', color: "black", border: "1px solid #CECECE" }}>
          <img src="/apple.png" style={{ width: '24px', height: "24px", marginRight: '0.5rem' }} />  Continue with Apple
        </button>

        <Row className="align-items-center mt-4 mb-5">
    

          <Col lg={2} className="text-center">
            OR
          </Col>
        </Row>

        <form>

          <Row>
            <Col>
              <input style={{ width: '100%' }} type="text" name="name" placeholder="Name" />
            </Col>

            <Col>
              <input type="text" name="company" placeholder="Company Name" style={{ width: '100%' }} />
            </Col>
          </Row>

          <input type="email" name="email" placeholder="Email Address" style={{ width: '100%', marginTop: "2rem" }} />


          <Row>
            <Col>
              <input type="text" name="country" placeholder="Country" style={{ width: '100%', marginTop: "2rem" }} />
            </Col>

            <Col>
              <input type="text" name="phone" placeholder="Phone Number" style={{ width: '100%', marginTop: "2rem" }} />
            </Col>
          </Row>

          <input type="password" name="password" placeholder="Password" style={{ marginTop: "2rem" }} />

          <Row>
            <Col lg={12}>
              <input type="text" name="url" placeholder="Website URL" style={{ width: '100%', marginTop: "2rem" }} />
            </Col>

            <Col lg={12}>
              <input type="text" name="title" placeholder="Job Title" style={{ width: '100%', marginTop: "2rem" }} />
            </Col>
          </Row>

          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              By creating an account, I agree to our <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a>
            </label>
          </div>
          <button type="submit" className="signup-button"> Create Free Account </button>
        </form>

      </div>
    </div>
  );
};

export default BusinessSignUp;
