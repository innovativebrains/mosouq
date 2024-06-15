import React from "react";
import { Row, Col } from "react-bootstrap";

const HomeBusiness = () => {
    return (
        <div style={{ backgroundColor: "#F2F2F2", height: "88px" }} className="d-flex justify-content-center align-items-center">
            <Row className="w-100 text-center">
                <Col className="d-flex justify-content-end align-items-center" style={{ marginRight: "10px" }}>
                    <h2>
                        Featured Business?
                    </h2>
                </Col>
                <Col className="d-flex justify-content-start align-items-center" style={{ marginLeft: "10px" }}>
                    <button
                        style={{
                            backgroundColor: '#0056B3',
                            color: 'white',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '20px',
                            cursor: 'pointer',
                            fontSize: '16px'
                        }}
                    >
                        Business SignUp
                    </button>
                </Col>
            </Row>
        </div>
    );
}

export default HomeBusiness;
