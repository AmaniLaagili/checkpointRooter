import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

function MyModal({ getNewMovie, newMovie, addNewMovie }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const handleSubmit = () => {
        addNewMovie();
        handleClose();
    };
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add New Movie
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ marginLeft: "20px" }}>
                        Add a new Movie ...
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>title:</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                onChange={(e) =>
                                    getNewMovie({
                                        ...newMovie,
                                        title: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>posterUrl:</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) =>
                                    getNewMovie({
                                        ...newMovie,
                                        posterUrl: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>rate</Form.Label>
                            <Form.Control
                                as="select"
                                onClick={(e) =>
                                    getNewMovie({
                                        ...newMovie,
                                        rate: e.target.value,
                                    })
                                }
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(e) => handleSubmit()}>
                        Add Movie
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MyModal;
