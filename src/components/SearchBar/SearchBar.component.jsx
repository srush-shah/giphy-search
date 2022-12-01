import axios from "axios";
import React, { useRef } from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({
  isClicked,
  setIsClicked,
  inpValue,
  setInpValue,
  gifData,
  setGifData,
}) => {
  const inputRef = useRef(null);
  const handleClick = () => {
    const value = inputRef.current.value;
    if (value !== "") {
      setIsClicked(true);
      setInpValue(value);
    }
    const getGifData = async () => {
      const data = await axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${value}&api_key=${process.env.REACT_APP_API_KEY}&limit=20`
      );
      setGifData(data.data.data);
    };
    getGifData();
  };
  return (
    <>
      <div className="flex items-center gap-3 w-full h-full">
        <div className="bg-gray-200 flex items-center justify-between rounded-lg w-5/6 h-full">
          <BiSearch className="w-1/6 h-2/5" />
          <input
            ref={inputRef}
            className="bg-gray-200 w-full h-full rounded-lg border-none focus:outline-none"
            type="search"
            placeholder="Article name or keywords..."
          />
        </div>
        <div className="w-1/5 h-full">
          <button
            className="bg-black w-full h-full text-white rounded-lg"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
