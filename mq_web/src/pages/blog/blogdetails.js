import React from 'react';
import './blog.css';

import {Row,Col} from "react-bootstrap"


import { FaLink } from 'react-icons/fa'

function BlogDetails() {
  return (
    <div className="blog-details-container">
      <p className='text-center title' style={{width:'1200px', hieght:'77px', fontWeight:"700", fontSize:"64px", paddingLeft:"8rem"}}> 
        Jumeriah Beach: e& Beach Canteen
      </p>

      <p className='text-center subtitle'>
        Great daily deals, disuiunts and offeres with Mosouq
      </p>

      <Row >
        <Col sm={8}>
          <img  className="main-image" src="/Image Login page.png" style={{width:"100%", height:"376px"}} />

          <Row className="event-details" style={{paddingLeft:"12rem", marginTop:'2rem'}}>
            <Col xs={6} className="event-type">
              <span>Event</span>
            </Col>
            <Col xs={6} className="event-rating">
              <span>Rating:</span> <span className="stars">★★★★★</span> <span className="rating-value">4.8</span>
            </Col>

            <Row className='mt-5'>
              <Col sm={6}>
                <div style={{ height:"38px", fontWeight:"700", fontSize:"29px"}}>
                Jumeriah Beach: e& Beach Canteen
                </div>
              </Col>

              <Col sm={6}>
                <div className="visit-site-button">
                  <FaLink className="icon" />
                  <span>Visit Site</span>
                </div>
              </Col>

              <Col sm={12}>
                <div style={{textAlign:"justify", width: "776px", fontWeight:'400', fontSize:"24px", marginTop:"2rem"}}>
                  Lorem ipsum dolor sit amet consectetur. Tortor tortor sit quisque morbi elit odio fames suscipit. Id elementum 
                  volutpat dignissim purus phasellus arcu enim ultrices pellentesque. Aliquet elementum dictum dictum lorem lectus 
                  sollicitudin orci. 
                </div>
              </Col>
            </Row>
          </Row>
        </Col>

        <Col sm={4}>
        <div className="quote-availability-card">
      <h2>Request quote & availability</h2>
      <p>Request your quote right away and availability</p>
      <div className="response-info">
        <div className="response-time">
          <p className="response-value">10 min</p>
          <p className="response-label">Response time</p>
        </div>
        <div className="response-rate">
          <p className="response-value">100%</p>
          <p className="response-label">Response rate</p>
        </div>
      </div>
      <button className="quote-button">Request a quote & availability</button>
      <div className="guarantee-info">
        <p>Backed by yelp Guaranteed</p>
        <p>
          Aardy.com Travel Insurance Marketplace allows you to compare and purchase the best Travel Insurance from all major providers. Would you like to visit each travel protection carrier directly? Of course not. So, enjoy an easy experience and find the best travel insurance with Aardy...
          <a href="#" className="learn-more"> Learn more</a>
        </p>
      </div>
    </div>
        </Col>
      </Row>
    </div>
  );
}

export default BlogDetails;
