import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import ReactStars from "react-stars";

const BusinessCards = () => {
  return (
    <Row style={{overflow: "hidden" }}>
      {[1, 2, 3, 4, 5, 6].map((category, index) => (
        <Col key={index} md="4" className="mb-4"> {/* Changed md="3" to md="4" to have 3 cards per row */}
          <Card style={{ width: "100%", marginRight: "0", overflow: "hidden" }}> {/* Set width to 100% and added overflow: hidden */}
            <div style={{ position: "relative", textAlign: "right", justifyContent: 'center' }}>
              <img
                src="/deals.png"
                style={{ objectFit: "contain", width: "100%", padding: "10px" }}
                alt="Banner"
              />
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "5px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  height: "27px",
                  width: '105px',
                  borderRadius: "79px",
                }}
              >
                <p style={{ margin: 0, fontSize: "12px", textAlign: "center", color: '#404EED' }}>
                  20% off
                </p>
              </div>
            </div>

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
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default BusinessCards;
