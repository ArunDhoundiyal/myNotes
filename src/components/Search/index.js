import React from "react";
import { FiSearch } from "react-icons/fi";
import "./index.css";
const Search = (props) => {
  const { clickSearchIcon, searchCondition } = props;
  console.log(searchCondition);
  const onClickSearchLogo = () => {
    clickSearchIcon();
  };
  return (
    <>
      <input
        type="search"
        placeholder="Search myNotes..."
        className="search-input"
      />
      <>
        {searchCondition ? (
          <input
            type="search"
            placeholder="Search myNotes..."
            className="search-result"
          />
        ) : (
          <button className="search-icon-button" onClick={onClickSearchLogo}>
            <FiSearch className="search" />
          </button>
        )}
      </>
    </>
  );
};

export default Search;
