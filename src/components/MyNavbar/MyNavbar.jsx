import React, { useState } from "react";
import { Nav, Form, FormControl, Button, Navbar } from "react-bootstrap";
import Rate from "../Rate/Rate.jsx";
import MyModal from "../Modal/MyModal.jsx";
import { Link } from "react-router-dom";
import "./MyNavbar.css";
function MyNavbar({
    nameInput,
    rateInput,
    movies,
    getNewMovie,
    newMovie,
    setNewMovie,
    addNewMovie,
}) {
    console.log(rateInput);
    const [modalIsOpen, setIsOpen] = useState(false);

    {
        /*} function openModal() {
        console.log("amouna");
        setIsOpen(true);
    }*/
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="myNavBar">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/">
                        {" "}
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Link>
                    {/*<Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                </Nav>
                {/* <Button variant="danger" onClick={() => setIsOpen(true)}>
                    Add a new Movie
                </Button> */}
                {/*/ <div className="ratehooks">*/}

                <MyModal
                    getNewMovie={getNewMovie}
                    newMovie={newMovie}
                    addNewMovie={addNewMovie}
                />
                <Rate rateInput={rateInput} />

                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        onChange={(e) => nameInput(e.target.value)}
                    />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
}

export default MyNavbar;
