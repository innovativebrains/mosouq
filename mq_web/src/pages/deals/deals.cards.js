import React from "react";

import { Row, Col, Card, Button } from "react-bootstrap";

import ReactStars from "react-stars";

const DealCards = () => {
  return (
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

                    <div style={{ fontSize: "17px", marginTop: "0.7rem" }}>
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

                    <div style={{ fontSize: "17px", marginTop: "0.7rem" }}>
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

                    <div style={{ fontSize: "17px", marginTop: "0.7rem" }}>
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
  );
};

export default DealCards;
