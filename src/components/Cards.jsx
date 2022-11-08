import React from "react";
import Card from "./Card";

function Cards(props) {
  return (
    <div className="d-flex justify-content-around flex-wrap">
      {console.log(props)}
      {props.data?.data.map((movie) => {
        return (
          <Card
            key={Math.random()}
            image={movie.image}
            title={movie.title}
            director={movie.director}
            description={movie.description}
          />
        );
      })}
    </div>
  );
}

export default Cards;
