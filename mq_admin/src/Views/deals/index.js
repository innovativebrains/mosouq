import React, { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { POST, GET } from '../../apicontroller/ApiController';
import { InputGroup, FormControl, Form, Card, Row, Col, Table, Button, Breadcrumb } from "react-bootstrap";

const Deals = () => {

    const [image, setImage] = useState(null);

    const nameRef = useRef();
    const typeRef = useRef();
    const locationRef = useRef();
    const descriptionRef = useRef();
    const consultationRef = useRef();

    const [business, setBusiness] = useState([]);


    const submit = async (event) => {
        event.preventDefault();

        if (!nameRef.current.value) {
            toast.error(' link field is required.', {
                className: 'custom-toast-container',
                bodyClassName: 'custom-toast-message'
            });
            return; // Prevent form submission
        }

        const formData = new FormData();
        formData.append("name", nameRef.current.value);
        formData.append("type", typeRef.current.value);
        formData.append("location", locationRef.current.value);
        formData.append("description", descriptionRef.current.value);
        formData.append("consultation", consultationRef.current.value);


        if (image) {
            formData.append("deal_image", image);
        }

        try {
            const res = await POST("deal/add-deal", formData);
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
        GET("company/get-companies").then((result) => {
            setBusiness(result);
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
                    <Breadcrumb.Item active> Deals </Breadcrumb.Item>
                </Breadcrumb>
            </Col>

            <Row>
                <Col sm={4}>
                    <Card className="mt-3">
                        <Card.Body>
                            <Form>
                                <div className="row">

                                    <Col md={12}>
                                        <Form.Label htmlFor="basic-url"> Deal Name </Form.Label>
                                        <InputGroup className="mb-3" required >
                                            <FormControl type="text" ref={nameRef} />
                                        </InputGroup>
                                    </Col>


                                    <Col md={12}>
                                        <Form.Label htmlFor="basic-url"> Deal Type </Form.Label>
                                        <InputGroup className="mb-3" required >
                                            <FormControl type="text" ref={typeRef} />
                                        </InputGroup>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Label htmlFor="basic-url"> Deal Location </Form.Label>
                                        <InputGroup className="mb-3" required >
                                            <FormControl type="text" ref={locationRef} />
                                        </InputGroup>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Label htmlFor="basic-url">Deal Description</Form.Label>
                                        <InputGroup className="mb-3" required>
                                            <FormControl as="textarea" ref={descriptionRef} />
                                        </InputGroup>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Label htmlFor="basic-url"> Deal Consultation </Form.Label>
                                        <InputGroup className="mb-3" required >
                                            <FormControl type="text" ref={consultationRef} />
                                        </InputGroup>
                                    </Col>


                                    <Col md={12}>
                                        <Form.Label htmlFor="basic-url"> Deal Image </Form.Label>
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
                                        <th> Company Link </th>
                                        <th> Image </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {business.map((company) => (
                                        <tr key={company._id}>
                                            <td>{company.link}</td>
                                            <td>
                                                <img src={`${company.companies_image}`} style={{ width: "50px", height: "50px" }} />
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

export default Deals;
