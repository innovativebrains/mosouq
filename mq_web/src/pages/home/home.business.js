import React from "react";

import { Container, Row, Col} from "react-bootstrap"

const HomeBusiness = () => {
    return (
        <Container>
            <Row style={{ height: '200px'}}>
            <Col className="text-center">
                <h2 className="mt-5">
                    Featured Business?
                </h2>
            </Col>

            <Col>
                <button  className="mt-5"
                    style={{
                        backgroundColor: '#0056B3', 
                        color: 'white', 
                        padding: '10px 20px', 
                        border: 'none', 
                        borderRadius: '20px', 
                        cursor: 'pointer',
                        fontSize: '16px',
                        marginTop: '1rem'
                    }}
                >
                    Business SignUp
                </button>
            </Col>
        </Row>
        </Container>
    )
}

export default HomeBusiness;
