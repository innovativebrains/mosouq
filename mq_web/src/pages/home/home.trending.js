import React from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

import ReactStars from "react-stars";

const HomeTrending = () => {
  return (
    <div style={{ marginTop: "7rem", overflow: "hidden" }}>
      <Row className="justify-content-between mt-5" style={{ marginLeft: '3rem' }}>
        <Col sm="6" className="">
          <h2>
            Trending Businesses
          </h2>
          <p>
            Busines that people vists the most
          </p>
        </Col>

        <Col sm="auto" style={{ marginRight: '4rem' }}>
          <Link
            to="/"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px 20px',
              fontSize: '14px',
              color: 'white',
              backgroundColor: '#404EED',
              borderRadius: '62px',
              textDecoration: 'none',
              textAlign: 'center',
              width: '135px',
              height: '49px',
              border: '1px solid #0000004D',
            }}
          >
            View All
          </Link>
        </Col>
      </Row>

      <Container fluid>
        <Row>
          {[1, 2, 3, 4].map((category, index) => (
            <Col key={index} md="3" className="mb-4">
              <Card style={{ width: "100%", marginRight: "2rem" }}>
                <img
                  src="banner1.jpg"
                  style={{ objectFit: "contain", padding: "10px" }}
                  alt="Banner"
                />
                <Card.Body>
                  <Card.Title>
                    <Row>
                      <Col>
                        <div style={{ color: "#404EED", fontSize: "12px" }}>
                          Restaurants & Bars
                        </div>
                      </Col>

                      <Col className="d-flex justify-content-center align-items-center">
                        <div
                          style={{
                            marginTop: "-1rem",
                            backgroundColor: "#B9DCFF99",
                            padding: "10px",
                            borderRadius: "5px",
                            height: "22px", // Adjusted minimum height for the container
                            display: "flex",
                            alignItems: "center", // Center items vertically
                          }}
                        >
                          <div className="d-flex align-items-center">
                            <ReactStars
                              count={1} // Static number of stars
                              value={1} // Static rating value
                              size={20} // Size of the stars
                              edit={false} // Disable editing
                            />
                            <div style={{ fontSize: "12px", marginLeft: "10px" }}>
                              4.3 (200+)
                            </div>
                          </div>
                        </div>
                      </Col>


                    </Row>
                  </Card.Title>
                  <Card.Text>
                    <div style={{ fontSize: "18px", fontWeight: "600" }}>
                      Fish Bleach Taverna
                    </div>

                    <div
                      style={{
                        fontWeight: "400",
                        fontSize: "12px",
                        color: "#4D4D4D",
                      }}
                    >
                      Dubai Marina (Marisa Dubai)
                    </div>
                  </Card.Text>
                  <Button style={{ width: "100%" }} variant="primary">
                    Request Consultation
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeTrending;
