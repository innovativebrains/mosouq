import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";

import SearchBar from "../../components/searchbar";

const HomeBanner = () => {
    return (
        <div id="home-banner" className="mt-5">

            <Row>
                <Col lg={5} style={{ marginTop: "5rem" }}>
                    <div className="banner-text">
                        Your <span style={{ color: "#404EED" }}> Trusted </span> Company Guide.
                    </div>

                    <div className="banner-descrp">
                        Find, assess and connect! Your Trusted Companion in Company Exploration.
                    </div>

                    <SearchBar />

                    <div style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#9199A3' }}>
                        <p style={{ fontWeight: '400', marginRight: '8px', marginTop: "1rem" }}>
                            Suggestion:
                        </p>
                        <p style={{ margin: 0, color: '#000' }}>
                            Designer, Programming, Digital Marketing.
                        </p>
                    </div>
                </Col>

                <Col lg={7} className="d-flex justify-content-center">
                    <img
                        src="/banner.jpg"
                        alt="Outer"
                        className="img-fluid mt-5"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </Col>
            </Row>

        </div>
    );
}

export default HomeBanner;
