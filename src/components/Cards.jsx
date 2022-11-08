import React from "react";
import Card from "./Card";

function Cards(props) {
  return (
    <div className="d-flex justify-content-around flex-wrap">
      {console.log(props)}
      {props.data.eBooks.map((book) => {
        return (
          <Card
            key={Math.random()}
            language={book.language}
            edition={book.edition}
            price={book.price}
          />
        );
      })}
    </div>
  );
}

export default Cards;
