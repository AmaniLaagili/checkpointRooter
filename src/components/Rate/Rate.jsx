import React from "react";
import ReactStars from "react-stars";
function Rate({ rateInput }) {
    const ratingChanged = (newRating) => {
        console.log("message from rate component", newRating);
        rateInput(newRating);
    };
    return (
        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            color2={"#ffd700"}
            half={false}
        />
    );
}

export default Rate;
