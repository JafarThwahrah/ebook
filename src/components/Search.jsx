import React from "react";

function Search(props) {

  return (
    <div>
      <form class="d-flex m-3" role="search">
        <input
          class="form-control w-75 ms-3"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e)=> props.setSearched(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
