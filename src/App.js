import "./App.css";
import React, { useState } from "react";

import MyNvbar from "./components/MyNavbar/MyNavbar";
import MovieCard from "./components/MovieCard/MovieCard";
import MyFooter from "./components/MyFooter/MyFooter";
import MovieList from "./components/MovieList/MovieList";
import MoviesData from "./Assets/MoviesData";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Description from "./components/Description/Description";

function App() {
    //console.log(MoviesData);
    const [movies, setMovies] = useState(MoviesData);
    const [searchValue, setsearchValue] = useState("");
    const [rate, setRate] = useState(1);

    const [newMovie, setNewMovie] = useState({});

    const getNewMovie = (input) => {
        setNewMovie(input);
    };
    const addNewMovie = () => {
        setMovies([...movies, newMovie]);
    };

    const getsearchValue = (nom) => {
        setsearchValue(nom);
    };
    console.log("message from App", rate);
    const addMovie = (ajoute) => {};
    return (
        <BrowserRouter>
            <div className="App">
                <MyNvbar
                    nameInput={getsearchValue}
                    rateInput={setRate}
                    movies={MoviesData}
                    getNewMovie={getNewMovie}
                    newMovie={newMovie}
                    addNewMovie={addNewMovie}
                />
                <Switch>
                    <Route exact path="/">
                        <MovieList
                            movies={movies}
                            myName={searchValue}
                            myRate={rate}
                        />
                    </Route>

                    <Route
                        path="/description/:moviesId"
                        component={Description}
                    />
                </Switch>

                <MyFooter />
            </div>
        </BrowserRouter>
    );
}

export default App;
