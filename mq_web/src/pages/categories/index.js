import React, { useState, useEffect } from 'react';
import './index.css';
import { AiOutlineSearch } from "react-icons/ai";
import { Row, Col, Card } from "react-bootstrap";
import { CiBank } from "react-icons/ci";
import { BsChevronDown } from "react-icons/bs";

import { GET } from '../../apicontrollers/apiController';

const Category = () => {

  const [categories, setCategories] = useState([]);

  const [subcategories, setSubCategories] = useState([]);

  useEffect(() => {
    GET("category/get-categories").then((result) => {
      setCategories(result);
      
    });

    GET("subcategory/get-subcategories").then((result) => {
      setSubCategories(result);
      
    });
    
  }, []);

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div style={{ overflow: "hidden", marginBottom: '7rem' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: "7rem" }}>
        <div style={{ fontWeight: "700", fontSize: "62px" }}>Categories</div>
        <p style={{ color: "#686868", fontSize: "24px", fontWeight: '400' }}>
          Find the best companies in this category!
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #E4E5E8",
            borderRadius: "8px",
            padding: "5px",
            backgroundColor: "#FFFFFF",
            position: "relative",
            marginTop: "2rem",
            width: "983px", // Adjusted to maxWidth for responsiveness
            marginBottom: '5rem'
          }}
        >
          <AiOutlineSearch
            style={{
              position: "absolute",
              left: "15px",
              color: "#0066FF",
              backgroundColor: "#FFFFFF",
            }}
          />
          <input
            type="text"
            placeholder="Search"
            style={{
              border: "none",
              outline: "none",
              padding: "10px 15px",
              flex: 1,
              backgroundColor: "transparent",
              marginLeft: "30px",
            }}
          />
          <button className="cate-search-button">Search</button>
        </div>
      </div>

      <Row className="justify-content-center mt-4" style={{ marginLeft: '3rem' }}>
        {categories.map((category, index) => (
          <Col sm="3" key={index}>
            <Card style={{ width: "18rem", marginBottom: "1rem", height: "80px" }}>
              <Card.Body className="d-flex align-items-center">
                <div className='d-flex' style={{ backgroundColor: "#FAFAFA" }} onClick={() => toggleExpand(index)} >
                  <div className="me-3">
                    <img src={category.category_image} style={{ width: '50px', height: "50px", borderRadius: "50%" }} />
                  </div>
                  <div>{category.name}</div>
                  <BsChevronDown className="ms-2" style={{ cursor: "pointer", marginTop: "0.5rem" }} />
                </div>
              </Card.Body>

              {expandedIndex === index && (
                <Card.Body>
                  {category.subcategories.map((subcategory, subIndex) => (
                    <div key={subIndex}>{subcategory}</div>
                  ))}
                </Card.Body>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Category;
