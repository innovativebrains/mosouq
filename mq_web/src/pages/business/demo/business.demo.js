import React from "react";
import "./business.demo.css";

import { Row, Col } from "react-bootstrap";

const Demo = () => {
  return (
    <div className="business-demo-container">
      <div className="sbusiness-demo-left">
        <h1>
            Discover Mosouq incredible suite of tools
        </h1>
        <p style={{fontSize:"24px", color:'#454545'}}>
            Lorem ipsum dolor sit amet consectetur. Mi ipsum diam dictumst mole Lorem ipsum dolor sit amet 
            consectetur. Mi ipsum diam dictumst moleLorem ipsum dolor sit amet consectetur. Mi ipsum diam dictumst 
            mole
        </p>
        <div className="illustration">
          <img src="business.png" style={{ width: "627px", height: "550px" }} />
        </div>
      </div>

      <div className="business-demo-right">
        <h2> Request a Demo </h2>
        <p> Fill the form to request a demo </p>

        <form>
          <Row>
            <Col lg={12}>
              <input
                style={{ width: "100%" }}
                type="text"
                name="url"
                placeholder="Website URL"
              />
            </Col>

            <Col>
              <input
                style={{ width: "100%" }}
                type="text"
                name="name"
                placeholder="First Name"
              />
            </Col>

            <Col>
              <input
                style={{ width: "100%" }}
                type="text"
                name="name"
                placeholder="Last Name"
              />
            </Col>
          </Row>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            style={{ width: "100%", marginTop: "2rem" }}
          />

          <Row>
            <Col>
              <input
                type="text"
                name="country"
                placeholder="Country"
                style={{ width: "100%", marginTop: "2rem" }}
              />
            </Col>

            <Col>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                style={{ width: "100%", marginTop: "2rem" }}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <input
                type="text"
                name="company"
                placeholder=" Company Name "
                style={{ width: "100%", marginTop: "2rem" }}
              />
            </Col>

            <Col>
              <input
                type="text"
                name="employees"
                placeholder=" No of Employees "
                style={{ width: "100%", marginTop: "2rem" }}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <input
                type="text"
                name="revenue"
                placeholder="Annual Revenue"
                style={{ width: "100%", marginTop: "2rem" }}
              />
            </Col>

            <Col>
              <input
                type="text"
                name="transactions"
                placeholder=" Monthly Transactions "
                style={{ width: "100%", marginTop: "2rem" }}
              />
            </Col>
          </Row>

          <button type="submit" className="business-demo-button">
            Request a Demo
          </button>

          <p style={{fontSize:'16px', fontWeight:"400", textAlign:"center", paddingTop:'1rem'}}>
            By creating an account, I agree to our Terms of use
            and Privacy Policy 
          </p>
        </form>
      </div>
    </div>
  );
};

export default Demo;
