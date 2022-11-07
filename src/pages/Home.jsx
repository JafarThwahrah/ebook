import React, { useEffect } from "react";
import Search from "../components/Search";
import Filter from "../components/Filter";
import Cards from "../components/Cards";
import Jsondata from "../data.json";
import { useState } from "react";


function Home() {
    const [data, setData] = useState(Jsondata);
    const [searched, setSearched] = useState(null);
    const [selected, setSelected] = useState(null);   
    const [filteredData, setFilteredData] = useState(data);


    // useEffect(()=>{
    //     let newData =
    //     !(searched || selected)
    //     ? data.eBooks
    //     :""
    //     setFilteredData(newData)
    //   },[]);

    useEffect(()=>{
        let newData={};
        newData.eBooks= data.eBooks.filter((book)=> {return book.language===selected});
        
    
        setFilteredData(newData)
      },[selected])

useEffect(()=>{

    let newData ={};
    newData.eBooks= searched
   ?data.eBooks.filter((book)=> {return book.language.includes(searched)})
   :data.eBooks;

  setFilteredData(newData)

},[searched])




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
        
      <Cards data={filteredData}/>
      </div>
    </div>
  );
}

export default Home;
