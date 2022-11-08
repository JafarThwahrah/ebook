import React, { useEffect } from "react";
import Search from "../components/Search";
import Filter from "../components/Filter";
import Cards from "../components/Cards";
import Jsondata from "../data.json";
import { useState } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState(null);
  const [searched, setSearched] = useState(null);
  const [selected, setSelected] = useState(null);
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    const URL = "https://ghibliapi.herokuapp.com/films";

    let newData = async () => {
      try {
        axios.get(URL).then((response) => {
          setFilteredData(response);
          console.log(data);
          console.log(response);

        });
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    newData();
  }, []);

  // useEffect(() => {
  //   let newData = {};
  //   newData.eBooks = data.eBooks.filter((book) => {
  //     return book.language === selected;
  //   });

  //   setFilteredData(newData);
  // }, [selected]);

  // useEffect(() => {
  //   let newData = {};
  //   newData.eBooks = searched
  //     ? data.eBooks.filter((book) => {
  //         return book.language.includes(searched);
  //       })
  //     : data.eBooks;

  //   setFilteredData(newData);
  // }, [searched]);

  console.log(filteredData);

  return (
    <div>
      <div className="row">
        <div className="ms-4 col-3">
          <Search searched={searched} setSearched={setSearched} />
        </div>
        <div className="col-3">
          <Filter selected={selected} setSelected={setSelected} />
        </div>
      </div>
      <div className="m-4">
        <Cards data={filteredData} />
      </div>
    </div>
  );
}

export default Home;
