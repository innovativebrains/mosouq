import React, { useState } from 'react';
import './index.css';
import { Row, Col } from "react-bootstrap";
import { POST } from '../../apicontrollers/apiController';

import { toast } from "react-toastify";

import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {


  const navigation = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    phone: '',
    password: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      role: 'user',
    };
    try {
      const response = await POST('user/add-user', dataToSend);
      toast("Your Account Successfully Created")
      navigation("/login");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h1>Sign Up for Mosoq</h1>
        <p>Lorem Ipsum Dolor Sit Amet Consectetur. Mi Ipsum Diam</p>
        <div className="illustration">
          {/* Add your illustration here, either as an image or SVG */}
        </div>
      </div>

      <div className="signup-right">
        <h2>Sign Up for Mosoq.</h2>
        <p>Connect with businesses</p>
        <button className="social-button google">Continue with Google</button>
        <button className="social-button apple">Continue with Apple</button>
        <p>OR</p>

        <form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <input
                style={{ width: '100%' }}
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                style={{ width: '100%' }}
                value={formData.company}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            style={{ width: '100%', marginTop: "2rem" }}
            value={formData.email}
            onChange={handleChange}
          />

          <Row>
            <Col>
              <input
                type="text"
                name="country"
                placeholder="Country"
                style={{ width: '100%', marginTop: "2rem" }}
                value={formData.country}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                style={{ width: '100%', marginTop: "2rem" }}
                value={formData.phone}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <input
            type="password"
            name="password"
            placeholder="Password"
            style={{ marginTop: "2rem" }}
            value={formData.password}
            onChange={handleChange}
          />

          <div className="terms">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />
            <label htmlFor="terms">
              By creating an account, I agree to our <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a>
            </label>
          </div>
          <button type="submit" className="signup-button">Sign up</button>
        </form>

        <p className="business-link">Are you a <a href="#" style={{ fontWeight: "500" }}>business?</a></p>
      </div>
    </div>
  );
};

export default SignUpForm;
