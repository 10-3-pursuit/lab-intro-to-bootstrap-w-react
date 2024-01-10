import React, { useEffect, useState } from "react";
import posts from "../data/posts.json";
import { NoPostFound } from "./NoPostFound";

export const Search = (props) => {
  const [searchWord, setSearchWord] = useState("");

  function handleCancel() {
    setSearchWord("");
  }

  function handleChange(event) {
    setSearchWord(event.target.value);
  }

  function filterLocation(searchWord) {
    const result = posts.filter(
      (post) =>
        post.location &&
        post.location.toLowerCase().includes(searchWord.toLowerCase())
    );
    props.setFilteredPost(result);
  }

  useEffect(() => {
    filterLocation(searchWord);
  }, [searchWord]);

  return (
    <div>
      <form className="d-flex p-5" role="search">
        <label htmlFor="search">Search posts by location...</label>
        <input
          id="search"
          name="search"
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchWord}
          onChange={handleChange}
        />
        <button
          className="btn btn-warning"
          type="button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </form>
      {props.filteredPost.length === 0 && (
        <NoPostFound searchWord={searchWord} />
      )}
    </div>
  );
};
