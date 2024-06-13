import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./index.css";
import { CiBank } from "react-icons/ci";
import { Link } from "react-router-dom"; 

import {GET} from "../../apicontrollers/apiController"

const HomeCategory = () => {

    const [categories, setCategories] = useState([]);

    const fetchData = async () => {
        GET("category/get-categories").then((result) => {
            setCategories(result);
        });
    };

    
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div style={{ marginTop: "7rem", overflow: "hidden", backgroundColor:"#FAFAFA", height:'600px' }}>
            <Row className="justify-content-between mt-5" style={{marginLeft:'3rem'}}>
                <Col sm="6" className="">
                    <h2>
                        Explore Categories
                    </h2>
                    <p>
                        Trusted Companies with user Reviews
                    </p>
                </Col>

                <Col sm="auto" style={{ marginRight: '4rem' }}>
                    <Link to="/" style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        fontSize: '14px',
                        color: '#fff',
                        backgroundColor: '#656565',
                        borderRadius: '62px',
                        textDecoration: 'none',
                        textAlign: 'center',
                    }}>
                        View All
                    </Link>
                </Col>
            </Row>

            <Row className="justify-content-center mt-4" style={{marginLeft:'3rem'}}>
                {categories.map((category, index) => (
                    <Col sm="3" key={index}>
                        <Card style={{ width: "18rem", marginBottom: "1rem" }}>
                            <Card.Body>
                                <Card.Text>
                                    <div className="d-flex">
                                        <div className="me-3">
                                            <CiBank />
                                        </div>
                                        <div> {category.name} </div>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default HomeCategory;
