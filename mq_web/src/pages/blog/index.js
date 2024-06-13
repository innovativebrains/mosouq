import React from 'react';
import './index.css';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogSection = () => {
    return (
        <div className="blog-section">

          <Row style={{overflowX:'hidden', marginLeft:'5rem'}}>
            <Col>
              <p className='' style={{marginTop:'5rem', fontSize:"40px",  fontWeight:'500', overflowX:'hidden'}}>
                The Best spa saloon for your
                relasxtions?
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur em adipiscing  elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet consectetur em adipiscing elit,
              </p>
            </Col>

            <Col>
              <img src="/Image Login page.png" alt="blog" style={{width:"671px", height:"306px", radius:"12px"}} />
            </Col>
          </Row>

            <Row style={{marginTop:'5rem'}}>
                {[1, 2, 3, 4, 5].map((categ) => (
                    <Col lg={3} md={4} sm={6} className="mb-4" key={categ}>
                        <Link to="/">
                            <Card className="mb-3" style={{ borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
                                <Card.Img variant="top" src="/Image Login page.png" alt="blog" style={{ borderRadius: '10px', width: '100%', height: 'auto' }} />
                                <Card.Body style={{borderRadius: '0 0 10px 10px' }}>
                                    <Card.Title className="d-flex justify-content-between">
                                        <span>
                                            <strong>Title</strong>
                                        </span>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default BlogSection;
