import React from 'react';
import './index.css'; 
import { Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

const ExploreDubai = () => {
    return (
        <div className="carousel-container">
            <Row className="justify-content-between mt-5" style={{ marginLeft: '3rem' }}>
                <Col sm="6" className="">
                    <h2>Explore Dubai</h2>
                    <p>Hear what our users have to say about us</p>
                </Col>
                <Col sm="auto" style={{ marginRight: '4rem' }}>
                    <Link to="/" className="view-all-link">
                        View All
                    </Link>
                </Col>
            </Row>
            <div className="image-row">
                <div className="image-container">
                    <img src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg" alt="Background 1" className="image" />
                    <div className="overlay">
                        <div className="text">Text 1</div>
                    </div>
                </div>
                <div className="image-container">
                    <img src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg" alt="Background 2" className="image" />
                    <div className="overlay">
                        <div className="text">Text 2</div>
                    </div>
                </div>
                <div className="image-container">
                    <img src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg" alt="Background 3" className="image" />
                    <div className="overlay">
                        <div className="text">Text 3</div>
                    </div>
                </div>
                <div className="image-container">
                    <img src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg" alt="Background 3" className="image" />
                    <div className="overlay">
                        <div className="text">Text 3</div>
                    </div>
                </div>
                <div className="image-container">
                    <img src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg" alt="Background 3" className="image" />
                    <div className="overlay">
                        <div className="text">Text 3</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreDubai;
