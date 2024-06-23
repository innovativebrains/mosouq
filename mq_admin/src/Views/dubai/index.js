import React, { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { POST, GET } from '../../apicontroller/ApiController';
import { InputGroup, FormControl, Form, Card, Row, Col, Table, Button, Breadcrumb } from "react-bootstrap";

const Dubai = () => {

    const [image, setImage] = useState(null);

    const nameRef = useRef();
    const descriptionRef = useRef();

    const [dubai, setDubai] = useState([]);


    const submit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("name", nameRef.current.value);
        formData.append("description", descriptionRef.current.value);


        if (image) {
            formData.append("dubai_image", image);
        }

        try {
            const res = await POST("dubai/add-dubai", formData);
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
        GET("dubai/get-dubai").then((result) => {
            setDubai(result);
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
                    <Breadcrumb.Item active> Companies </Breadcrumb.Item>
                </Breadcrumb>
            </Col>

            <Row>
                <Col sm={4}>
                    <Card className="mt-3">
                        <Card.Body>
                            <Form>
                                <div className="row">
                                    <Col md={12}>
                                        <Form.Label htmlFor="basic-url"> Name </Form.Label>
                                        <InputGroup className="mb-3" required >
                                            <FormControl type="text" ref={nameRef} />
                                        </InputGroup>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Label htmlFor="basic-url"> Description </Form.Label>
                                        <InputGroup className="mb-3" required >
                                            <FormControl type="text" ref={descriptionRef} />
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
                                        <th> Name </th>
                                        <th> Description </th>
                                        <th> Image </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dubai.map((dubai) => (
                                        <tr key={dubai._id}>
                                            <td>{dubai.name}</td>
                                            <td>{dubai.description}</td>
                                            <td>
                                                <img src={`${dubai.dubai_image}`} style={{width:"50px", height:"50px"}} />
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

export default Dubai;
