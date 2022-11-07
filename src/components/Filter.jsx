import React from "react";

function Filter(props) {
  return (
    <div>
      <select
        class="form-select w-75 m-3"
        aria-label="Default select example"
        onChange={(e) => props.setSelected(e.target.value)}>
        <option value="Pascal">Pascal</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Php">Php</option>
        <option value="laravel">laravel</option>
        <option value="React">React</option>
      </select>
    </div>
  );
}

export default Filter;
