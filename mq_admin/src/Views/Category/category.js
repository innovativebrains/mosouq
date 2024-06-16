import React, { useRef, useState, useEffect, useMemo } from "react";

import { toast } from "react-toastify";

import { POST, GET, DELETE, GETID, PATCH } from '../../apicontroller/ApiController'

import { useTable, useFilters, useGlobalFilter } from "react-table";

import {
    InputGroup,
    FormControl,
    Form,
    Card,
    Row,
    Col, Table, Button, Modal, Breadcrumb
} from "react-bootstrap";

import { AiFillDelete } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';

import "./listing.css"

import { FaTshirt } from "react-icons/fa";

import { Auth } from "../../context/Auth.Context";

const Category = () => {

    const [image, setImage] = useState();
    const resetFileInput = () => {
        setImage(null);
    };


    const nameRef = useRef();

    const etitleRef = useRef();

    const [categories, setCategories] = useState([]);

    const submit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append("name", nameRef.current.value);
    
        if (image) {
            formData.append("category_image", image); // Ensure 'image' state is correctly set
            resetFileInput(); // Reset file input after appending image
        }
    
        if (!nameRef.current.value) {
            toast.error('Category Name field is required.', {
                // Use custom class for toast container
                className: 'custom-toast-container',
                // Use custom class for toast message
                bodyClassName: 'custom-toast-message'
            });
            return; // Prevent form submission
        }
    
        // Use async/await for cleaner code
        try {
            const res = await POST("category/add-category", formData);
    
            if (res.error === false) {
                toast("Added Done");
                nameRef.current.value = '';
    
                // Fetch updated categories after adding a new category
                const updatedCategories = await fetchData();
                setCategories(updatedCategories);
            } else {
                toast.error(res.sqlMessage);
            }
        } catch (error) {
            console.error('Error adding category:', error);
            toast.error('Failed to add category. Please try again.');
        }
    };
    
    



    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // const [supercategoryid, setSuperCategoryId] = useState({});

    // //Edit FUNCTION
    // const edit = async (event, id) => {

    //     GETID("supercategory", id, "").then((result) => {
    //         setSuperCategoryId(result[0]);
    //     });
    //     handleShow();
    // };

    // // Send edited data to the databse finction
    // const eSubmit = (event, id) => {
    //     event.preventDefault();

    //     const formData = new FormData();
    //     formData.append("title", etitleRef.current.value);
    //     formData.append("header", eheaderRef.current.checked ? '1' : '0');
    //     formData.append("top", etopRef.current.checked ? '1' : '0');

    //     if (image) { formData.append("supercategory", image) };

    //     PATCH("supercategory/update", id, formData).then((res) => {
    //         fetchData();
    //         toast("Super Category Updated Successfully");
    //         handleClose();
    //         setImage(null);
    //     });
    // };
    const fetchData = async () => {
        GET("category/get-categories").then((result) => {
            setCategories(result);
        });
    };


    // const [delShow, setDelShow] = useState(false);
    // const handleCloseDel = () => setDelShow(false);
    // const handleShowDel = () => setDelShow(true);

    // const delView = async (event, id) => {
    //     GETID("supercategory", id, '').then((result) => {
    //         setSuperCategoryId(result[0]);
    //     });
    //     handleShowDel();
    // };

    // const remove = async (event, id) => {
    //     DELETE("supercategory/delete", id, "").then((result) => {
    //         fetchData();
    //         toast("Your Category is deleted");
    //     });
    //     handleCloseDel();
    // };

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div>

            <Col sm={12} className="mt-3">
                <Breadcrumb>
                    <Breadcrumb.Item href="/dashboard"> Dashboard </Breadcrumb.Item>
                    <Breadcrumb.Item active> Category </Breadcrumb.Item>
                </Breadcrumb>
            </Col>

            <Row>
                <Col sm={4}>
                    <Card className="mt-3">
                        <Card.Body>
                            <Form>
                                <div className="row">

                                    <Col md={12}>
                                        <Form.Label htmlFor="basic-url"> Category Name </Form.Label>
                                        <InputGroup className="mb-3" required >
                                            <FormControl type="text" ref={nameRef} />
                                        </InputGroup>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Label htmlFor="basic-url"> Image </Form.Label>
                                        <InputGroup className="mb-3">
                                         <FormControl type="file" onChange={(e) => setImage(e.target.files[0])} />
                                        </InputGroup>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Group controlId="submit">
                                            <Button onClick={submit} variant="primary" type="submit" size="lg" block>
                                                Submit
                                            </Button>
                                        </Form.Group>
                                    </Col>

                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={8} className="mt-3">
                    <div className="card">
                        <div className="card-body">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map((category) => (

                                        <tr>
                                            <td>
                                                {category.name}
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Category