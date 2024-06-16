import React, { useRef, useState, useEffect, useMemo } from "react";

import { toast } from "react-toastify";

import { POST, GET, DELETE, GETID, PUT } from '../../apicontroller/ApiController'

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

const SubCategory = () => {

    const [image, setImage] = useState();

    // Submit Values
    const categoryRef = useRef();
    
    const sub_nameRef = useRef();


    // Submit Functions
    const submit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("category", categoryRef.current.value);
        formData.append("sub_name", sub_nameRef.current.value);

        if (image) formData.append("subcategory", image);

        if (!sub_nameRef.current.value) {
            toast.error('Category Name field is required.', {
                // Use custom class for toast container
                className: 'custom-toast-container',
                // Use custom class for toast message
                bodyClassName: 'custom-toast-message'
            });
            return; // Prevent form submission
        }

        POST("subcategory/add-subcategory", formData).then((res) => {
            if (res.error === false) {
                toast("Added Done")

                categoryRef.current.value = '';
                sub_nameRef.current.value = '';
                fetchData();
            } else {
                toast.error(res.sqlMessage)
            }
        });

        setImage(null);
    };

    // Model Handle close and open
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [category, setCategoryId] = useState([]);

    // //Edit FUNCTION
    // const edit = async (event, id) => {

    //     GETID("category/edit", id, "").then((result) => {
    //         setCategoryId(result);
    //     });
    //     handleShow();
    //     setCategoryId(null);
    // };

    // // Edit Ref Submit Values
    // const esupercategoryRef = useRef();
    // const etitleRef = useRef();
    // const epriceRef = useRef();
    // const efeatureRef = useRef();
    // const eupcomingRef = useRef();
    // const ecurrencyRef = useRef();
    // const eserialnoRef = useRef();
    // const ediscountRef = useRef();

    // const eSubmit = (event, id) => {
    //     event.preventDefault();
    //     const formData = new FormData();
    //     formData.append("supercategory", esupercategoryRef.current.value);
    //     formData.append("title", etitleRef.current.value);
    //     formData.append("price", epriceRef.current.value);
    //     formData.append("feature", efeatureRef.current.checked ? '1' : '0');
    //     formData.append("upcoming", eupcomingRef.current.checked ? '1' : '0');
    //     formData.append("serialno", eserialnoRef.current.value);
    //     formData.append("discount", ediscountRef.current.value);
    //     formData.append("currency", ecurrencyRef.current.value);


    //     if (image) formData.append("category", image);

    //     PUT("category/update", id, formData).then((res) => {

    //         fetchData();
    //         toast("Product Updated Successfully");
    //         handleClose();
    //     });
    // };

    // ---------------- Get Data ------------------------
    const [categories, setCategories] = useState([]);

    const [subcategories, setSubCategories] = useState([]);

    const fetchData = async () => {
        GET("category/get-categories").then((result) => {
            setCategories(result);
        });

        // GET("subcategory").then((result) => {
        //     setSubCategories(result);
        // });
    };


    useEffect(() => {
        fetchData();
    }, [])

    // const [delShow, setDelShow] = useState(false);
    // const handleCloseDel = () => setDelShow(false);
    // const handleShowDel = () => setDelShow(true);

    // const delView = async (event, id) => {
    //     GETID("category/finddelete", id, '').then((result) => {
    //         setCategoryId(result);
    //     });
    //     handleShowDel();
    // };

    // const remove = async (event, id) => {
    //     await DELETE("category/delete", id, "").then((result) => {
    //         toast("Product deleted! ")
    //         fetchData();
    //     })
    // };


    return (
        <div>

            <Col sm={12} className="mt-3">
                <Breadcrumb>
                    <Breadcrumb.Item href="/dashboard"> Dashboard </Breadcrumb.Item>
                    <Breadcrumb.Item active> Sub Categories </Breadcrumb.Item>
                </Breadcrumb>
            </Col>

            <Row>
                <Col sm={12}>
                    <Card className="">
                        <Card.Body>
                            <Form>
                                <div className="row">

                                    <Col md={4}>
                                        <Form.Group className="">
                                            <Form.Label> Category </Form.Label>
                                            <Form.Control className="form-control" as="select" ref={categoryRef}>
                                                <option value=""> --- Select --- </option>
                                                {categories.map((category) => (
                                                    <option value={category._id}>{category.name}</option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>

                                    <Col md={4}>
                                        <Form.Group className="">
                                            <Form.Label> Sub Category </Form.Label>
                                            <Form.Control ref={sub_nameRef} type="text" placeholder="Product" />
                                        </Form.Group>
                                    </Col>

                                    <Col md={3}>
                                        <Form.Group className="">
                                            <Form.Label> Image </Form.Label>
                                            <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} />
                                        </Form.Group>
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

                <Col sm={12} className="mt-3">
                    <div className="card">
                        <div className="card-body">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Sr #</th>
                                        <th>Category</th>
                                        <th>Sub Category</th>
                                        <th>Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>3</td>
                                        <td>Larry the Bird</td>
                                        <td>@twitter</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default SubCategory