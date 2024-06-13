import React, { useEffect, useState } from "react";

import { Card, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom"

import "./index.css"

import { GET } from "../../apicontroller/ApiController"

import { BiStats } from 'react-icons/bi';
import { IoMdStats } from 'react-icons/io';
import { AiOutlineUserAdd, AiOutlineShoppingCart } from 'react-icons/ai';
import { MdQueryStats } from 'react-icons/md';

import { Line, TimeScale } from 'react-chartjs-2';

const Dashboard = () => {
 
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sample Chart',
                data: [12, 19, 3, 5, 2, 3, 15],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1,
            },
        ],
    };

    // Optional configuration options for the chart
    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    // const [supercategory, setSuperCategory] = useState([]);
    // const [category, setCategory] = useState([]);
    // const [subcategory, setSubCategory] = useState([]);

    // const [user, setUser] = useState([]);

    // const [request, setRequest] = useState([]);

    // const [shop, setShop] = useState([]);

    // const [staff, setStaff] = useState([]);


    // useEffect(() => {
    //     GET("supercategory/count").then((result) => {
    //         setSuperCategory(result[0]);
    //     });

    //     GET("category/count").then((result) => {
    //         setCategory(result[0]);
    //     });

    //     GET("subcategory/count").then((result) => {
    //         setSubCategory(result[0]);
    //     });

    //     GET("auth/count").then((result) => {
    //         setUser(result[0]);
    //     });

    //     GET("jobrequest/count").then((result) => {
    //         setRequest(result[0]);
    //     });

    //     GET("listing/count").then((result) => {
    //         setShop(result[0]);
    //     });

    //     GET("auth/count/staff").then((result) => {
    //         setStaff(result[0]);
    //     });
    // }, [])

    return ( 
        <Row>
            <Col sm={4}>
                <Link to="/main_product">
                    <Card className="mt-5">
                        <div className="card-head1">
                            <Card.Body>
                                <div className="">
                                    <img src="/stats.png" style={{ height: "30px", width: "30px" }} />
                                    <div className="total-head"> Category </div>

                                    <div className="total-no"> total Cats </div>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </Link>
            </Col>

            <Col sm={4}>
                <Link to="/product">
                    <Card className="mt-5">
                        <div className="card-head2">
                            <Card.Body>
                                <div className="text-dark">
                                    <BiStats style={{ height: "30px", width: "30px" }} />
                                    <div className="total-head"> Sub CAtergory </div>
                                    <div className="total-no"> Total Sub Category  </div>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </Link>
            </Col>

            <Col sm={4}>
                <Link to="/product_details">
                    <Card className="mt-5">
                        <div className="card-head3">
                            <Card.Body>
                                <div className="">
                                    <IoMdStats style={{ height: "30px", width: "30px" }} />
                                    <div className="total-head"> Total Business Users </div>
                                    <div className="total-no"> TOtal Business Users  </div>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </Link>
            </Col>

            <Col sm={4}>
                <Link to="/users">
                    <Card className="mt-5">
                        <div className="card-head4">
                            <Card.Body>
                                <div className="">
                                    <AiOutlineUserAdd style={{ height: "30px", width: "30px" }} />
                                    <div className="total-head"> Users </div>

                                    <div className="total-no"> TOtal Users  </div>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </Link>
            </Col>

        </Row>
    )
}

export default Dashboard