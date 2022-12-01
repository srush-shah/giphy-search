import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ isClicked, setIsClicked }) => {
  const setClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <div className="flex items-center gap-3 w-full h-full">
        <div className="bg-gray-200 flex items-center justify-between rounded-lg w-5/6 h-full">
          <BiSearch className="w-1/6 h-2/5" />
          <input
            className="bg-gray-200 w-full h-full rounded-lg"
            type="search"
          />
        </div>
        <div className="w-1/5 h-full">
          <button
            className="bg-black w-full h-full text-white rounded-lg"
            onClick={setClick}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
