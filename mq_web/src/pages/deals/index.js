import React from "react";

import DealsHeader from "./deals.header"
import DealCards from "./deals.cards";
import DealSearch from "./deals.search";

import { Row, Col, Container } from "react-bootstrap";

const Deals =()=>{
    return(
        <div>
            <DealsHeader/>

            <Container fluid style={{marginTop:"2rem"}}>
                <Row>
                    <Col lg={3}>
                        <DealSearch />
                    </Col>

                    <Col lg={9}>
                        <DealCards />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Deals