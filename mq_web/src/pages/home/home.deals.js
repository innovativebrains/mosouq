import React from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

import ReactStars from "react-stars";

import "./responsive.css"

const HomeDeals = () => {
  return (
    <div style={{ marginTop: "7rem", overflow: "hidden" }}>

      <Row className="justify-content-between mt-5" style={{ marginLeft: '3rem' }}>
        <Col sm="6" className="">
          <h2>
            Top Deals
          </h2>
          <p>
            Offers you dont want to miss
          </p>
        </Col>

        <Col sm="auto" style={{ marginRight: '4rem' }}>
          <Link
            to="/deals"
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

      <div className="deal-cont">
        <Row>
          {[1, 2, 3, 4].map((category, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="h-100">
                <img
                  src="/deals.png"
                  style={{ objectFit: "contain", width: "100%", padding: "10px" }}
                  alt="Banner"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>
                    <Row>
                      <Col>
                        <div className="card-title-text" style={{ color: "#404EED", fontSize: "12px" }}>
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
                            height: "22px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <div className="d-flex align-items-center">
                            <ReactStars
                              count={1}
                              value={1}
                              size={20}
                              edit={false}
                            />
                            <div className="rating-text" style={{ fontSize: "12px", marginLeft: "10px" }}>
                              4.3 (200+)
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Card.Title>
                  <Card.Text>
                    <div className="card-text-title" style={{ fontSize: "18px", fontWeight: "600" }}>
                      Fish Bleach Taverna
                    </div>
                    <div
                      className="card-text-subtitle"
                      style={{
                        fontWeight: "400",
                        fontSize: "12px",
                        color: "#4D4D4D",
                      }}
                    >
                      Dubai Marina (Marisa Dubai)
                    </div>
                  </Card.Text>
                  <Button className="mt-auto" style={{ width: "100%" }} variant="primary">
                    Request Consultation
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

    </div>
  );
};

export default HomeDeals;
