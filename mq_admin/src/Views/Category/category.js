import React, { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { POST, GET } from '../../apicontroller/ApiController';
import { InputGroup, FormControl, Form, Card, Row, Col, Table, Button, Breadcrumb } from "react-bootstrap";

const Category = () => {

    const [image, setImage] = useState(null);

    const nameRef = useRef();
    const [categories, setCategories] = useState([]);

    const submit = async (event) => {
        event.preventDefault();

        if (!nameRef.current.value) {
            toast.error('Category Name field is required.', {
                className: 'custom-toast-container',
                bodyClassName: 'custom-toast-message'
            });
            return; // Prevent form submission
        }

        const formData = new FormData();
        formData.append("name", nameRef.current.value);

        if (image) {
            formData.append("category_image", image);
        }

        try {
            const res = await POST("category/add-category", formData);
            if (!res.error) {
                toast("Added Done");

                fetchData();

            } else {
                toast.error(res.sqlMessage);
            }
            
        } catch (error) {
            console.error('Error adding category:', error);
            toast.error('Failed to add category. Please try again.');
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        console.log("Selected image:", file);
    };

    const fetchData = async () => {
        GET("category/get-categories").then((result) => {
            setCategories(result);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);


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
                                            <FormControl type="file" onChange={handleFileChange} />
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
                                        <th> Image </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map((category) => (
                                        <tr key={category._id}>
                                            <td>{category.name}</td>
                                            <td>
                                                <img src={`${category.category_image}`} style={{width:"50px", height:"50px"}} />
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
    );
}

export default Category;
