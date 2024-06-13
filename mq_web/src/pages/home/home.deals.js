import React from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

import ReactStars from "react-stars";

const HomeDeals = () => {
  return (
    <div style={{ marginTop: "7rem", overflow: "hidden" }}>
      <Row
        className="justify-content-between mt-5"
        style={{ marginLeft: "3rem" }}
      >
        <Col sm="6" className="">
          <h2>Top Deals</h2>
          <p>Offers you dont want to miss</p>
        </Col>

        <Col sm="auto" style={{ marginRight: "4rem" }}>
          <Link
            to="/"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              fontSize: "14px",
              color: "#fff",
              backgroundColor: "#404EED",
              borderRadius: "62px",
              textDecoration: "none",
              textAlign: "center",
              borderRadius: "62px",
            }}
          >
            View All
          </Link>
        </Col>
      </Row>

      <Container>
      <Link to="deals">

        <Row>
            <Card style={{ width: "315px", marginRight: "2rem" }}>
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
                        Resturants & Bars
                      </div>
                    </Col>

                    <Col>
                      <div
                        style={{
                          marginTop: "-1rem",
                          backgroundColor: "#B9DCFF99",
                        }}
                      >
                        <div className="d-flex" style={{ fontSize: "" }}>
                          <ReactStars
                            count={1} // Static number of stars
                            value={1} // Static rating value
                            size={35} // Size of the stars
                            edit={false} // Disable editing
                          />

                          <div
                            style={{ fontSize: "17px", marginTop: "0.7rem" }}
                          >
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
                  {" "}
                  Request Consultation{" "}
                </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "315px", marginRight: "2rem" }}>
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
                        Resturants & Bars
                      </div>
                    </Col>

                    <Col>
                      <div
                        style={{
                          marginTop: "-1rem",
                          backgroundColor: "#B9DCFF99",
                        }}
                      >
                        <div className="d-flex" style={{ fontSize: "" }}>
                          <ReactStars
                            count={1} // Static number of stars
                            value={1} // Static rating value
                            size={35} // Size of the stars
                            edit={false} // Disable editing
                          />

                          <div
                            style={{ fontSize: "17px", marginTop: "0.7rem" }}
                          >
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
                  {" "}
                  Request Consultation{" "}
                </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "315px", marginRight: "2rem" }}>
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
                        Resturants & Bars
                      </div>
                    </Col>

                    <Col>
                      <div
                        style={{
                          marginTop: "-1rem",
                          backgroundColor: "#B9DCFF99",
                        }}
                      >
                        <div className="d-flex" style={{ fontSize: "" }}>
                          <ReactStars
                            count={1} // Static number of stars
                            value={1} // Static rating value
                            size={35} // Size of the stars
                            edit={false} // Disable editing
                          />

                          <div
                            style={{ fontSize: "17px", marginTop: "0.7rem" }}
                          >
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
                  {" "}
                  Request Consultation{" "}
                </Button>
              </Card.Body>
            </Card>
        </Row>
        </Link>

      </Container>
    </div>
  );
};

export default HomeDeals;
