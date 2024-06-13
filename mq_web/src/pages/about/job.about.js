import React from "react";

import { Container, Row, Col } from "react-bootstrap"

const Jobs = () => {
    return (
        <div id="jobs">

            <div style={{ backgroundColor: '#F0F1F5', height: "400px" }}>
                test
            </div>

            <Container>
                <Row>
                    <Col className="mt-3">
                        <img src="/banner3.jpg" />
                    </Col>

                    <Col style={{marginTop:'7rem'}}>
                        <p>
                            What is Lorem Ipsum?
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                            including versions of Lorem Ipsum.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Jobs