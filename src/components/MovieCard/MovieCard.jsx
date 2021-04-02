import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard({ list }) {
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={list.posterUrl}
                    style={{ height: "330px" }}
                />
                <Card.Body>
                    <Card.Title>{list.title}</Card.Title>
                </Card.Body>
                <h2>{"⭐".repeat(list.rate)}</h2>
                <Card.Footer>
                    <Link to={`/description/${list.id}`}>
                        <Button variant="primary">Go somewhere</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default MovieCard;
