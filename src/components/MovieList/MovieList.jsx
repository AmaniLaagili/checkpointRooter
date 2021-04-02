import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import Rate from "../Rate/Rate";
import "./MovieList.css";
function MovieList({ movies, myName, myRate }) {
    console.log();

    const [name, setName] = useState("");
    return (
        <div>
            <div className="liste">
                {movies
                    .filter(
                        (movie) =>
                            movie.title
                                .toLowerCase()
                                .includes(myName.toLowerCase()) &&
                            movie.rate >= myRate
                    )
                    .map((el) => (
                        <MovieCard list={el} />
                    ))}

                {/* {props.movies.map((el) => (
                //     <MovieCard list={el} />
                // ))}*/}
            </div>
        </div>
    );
}

export default MovieList;
