// SearchBar.js

import React, { useState } from "react";
import './search.css';
import Button from "./button";

function SearchBar(props) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call your backend API with the search query
    props.onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit} className="box">
      <input 
        type="text"
        placeholder="Search for podcast.."
        value={query}
        onChange={handleInputChange}
        className="m-4"
      />
      <Button text='Search' className='p-1'/>
    </form>
  );
}

export default SearchBar;
