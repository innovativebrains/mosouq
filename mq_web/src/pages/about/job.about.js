import React from "react";

import { Container, Row, Col } from "react-bootstrap"

const Jobs = () => {
    return (
        <div id="jobs">

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: "7rem" }}>
                <div style={{ fontWeight: "700", fontSize: "62px" }}>About Us</div>
                <p style={{ color: "#686868", fontSize: "24px", fontWeight: '400' }}>
                    Find the best companies in this category!
                </p>

            </div>

            <Container>
                <Row className="mt-5">
                    <Col lg={6}>
                        <p style={{ fontWeight: "700", fontSize: "32px", color: "#000000" }}>
                            About Mosouq.
                        </p>
                        <p style={{ fontWeight: "400", fontSize: "24px", color: "#2F2F2F" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum.
                        </p>
                    </Col>

                    <Col lg={6}>
                        <div style={{ fontWeight: "600", fontSize: "24px", color: "#686868", textAlign: "center" }}>
                            Consumers:
                        </div>

                        <div style={{ fontWeight: "600", fontSize: "32px", color: "#161616", textAlign: "center" }}>
                            Share their Experiences
                        </div>

                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src="/Arrow 1.png" />
                        </div>

                        <div style={{ fontSize: "24px", fontWeight: "400", textAlign: "center", color: "#686868" }}>
                            Mosouq. connects people with your businesses
                        </div>

                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src="/Arrow 1.png" />
                        </div>

                        <div style={{ fontWeight: "600", fontSize: "24px", color: "#686868", textAlign: "center" }}>
                            Business:
                        </div>

                        <div style={{ fontWeight: "600", fontSize: "32px", color: "#161616", textAlign: "center" }}>
                            Create better Experience
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Jobs