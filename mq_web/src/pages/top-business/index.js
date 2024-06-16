import React from "react";

import BusinessHeader from "./business.header"
import BusinessCards from "./business.cards";
import BusinessSearch from "./business.search";

import { Row, Col, Container } from "react-bootstrap";

const Business =()=>{
    return(
        <div>
            <BusinessHeader/>

            <div style={{marginTop:"5rem", marginLeft:"4rem", marginRight:"4rem", marginBottom:"7rem"}}>
                <Row>
                    <Col lg={3}>
                        <BusinessSearch />
                    </Col>
 
                    <Col lg={9}>
                        <BusinessCards />
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default Business