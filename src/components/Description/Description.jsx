import React from "react";
import { Container, Jumbotron, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import list from "../../Assets/MoviesData";
import "./Description.css";
function description(props) {
    //console.log(list);
    //console.log(props.match.params);
    const moviesId = props.match.params.moviesId;
    const movie = list.find((movie) => movie.id === Number(moviesId));

    return (
        <Container>
            <Jumbotron className="description">
                <Row>
                    <p className="para">{movie.description}</p>

                    <div className="video">
                        <iframe
                            width="560"
                            height="315"
                            src={movie.vedio}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </Row>

                <Button variant="primary" className="button">
                    <Link to="/">Go Back</Link>
                </Button>
            </Jumbotron>
        </Container>
    );
}

export default description;
