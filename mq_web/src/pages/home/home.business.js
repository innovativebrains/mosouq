import React from "react";
import { Row, Col } from "react-bootstrap";

const HomeBusiness = () => {
    return (
        <div style={{ backgroundColor: "#F2F2F2", height: "90px" }} className="d-flex justify-content-center align-items-center">
            <Row className="w-100 text-center">
                <Col className="d-flex justify-content-end align-items-center" style={{ marginRight: "10px" }}>
                    <h2>
                        Featured Business?
                    </h2>
                </Col>
                <Col className="d-flex justify-content-start align-items-center">
                    <button className="business-button-header">
                        Get Started
                    </button>
                </Col>
            </Row>
        </div>
    );
}

export default HomeBusiness;
