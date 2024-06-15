import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./index.css";
import { CiBank } from "react-icons/ci";
import { Link } from "react-router-dom";

import { GET } from "../../apicontrollers/apiController"

import "./index.css"

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

    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedCategories = categories.slice(startIndex, startIndex + itemsPerPage);

    const totalPages = Math.ceil(categories.length / itemsPerPage);

    return (
        <div style={{ marginTop: "7rem", overflow: "hidden", backgroundColor: "#FAFAFA", height: '600px' }}>
            <Row className="justify-content-between mt-5" style={{ marginLeft: '3rem' }}>
                <Col sm="6" className="">
                    <h2>
                        Explore Categories
                    </h2>
                    <p>
                        Trusted Companies with user Reviews
                    </p>
                </Col>

                <Col sm="auto" style={{ marginRight: '4rem' }}>
                    <Link
                        to="/"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '10px 20px',
                            fontSize: '14px',
                            color: '#656565',
                            backgroundColor: '#FAFAFA',
                            borderRadius: '62px',
                            textDecoration: 'none',
                            textAlign: 'center',
                            width: '135px',
                            height: '49px',
                            border: '1px solid #0000004D',
                        }}
                    >
                        View All
                    </Link>
                </Col>
            </Row>

            <Row className="justify-content-center mt-4" style={{ marginLeft: '3rem' }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12].map((category, index) => (
                    <Col sm="3" key={index}>
                        <Card style={{ width: "18rem", marginBottom: "1rem", height: "80px" }}>
                            <Card.Body className="d-flex align-items-center">
                                <Card.Text className="d-flex align-items-center" style={{ fontSize: "16px", fontWeight: "500" }}>
                                    <div className="me-3">
                                        <CiBank />
                                    </div>
                                    <div>test category</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div className="pagination">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default HomeCategory;
