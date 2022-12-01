import React, { useState } from "react";
import { IoStarOutline, IoStar } from "react-icons/io5";
import { IconContext } from "react-icons";

const GifCard = (props) => {
  const [star, setStar] = useState(false);
  const setStarValue = () => {
    setStar(!star);
  };
  return (
    <>
      <div className="flex flex-col items-start gap-2 my-2">
        <div className="h-52 w-72">
          <img
            src={props.image}
            alt={props.alt}
            className="w-full h-full rounded-xl"
          />
        </div>
        <div className="flex items-start justify-between w-72 p-1">
          <div className="flex flex-col w-2/3">
            <h3 className="text-lg font-medium">{props.title}</h3>
            <p className="text-xs text-gray-400 font-extralight">
              @{props.subtitle}
            </p>
          </div>
          <button onClick={setStarValue}>
            {star ? (
              <IconContext.Provider value={{ color: "#F4CF08" }}>
                <div>
                  <IoStar className="w-6 h-6" />
                </div>
              </IconContext.Provider>
            ) : (
              <IconContext.Provider value={{ color: "black" }}>
                <div>
                  <IoStarOutline className="w-6 h-6" />
                </div>
              </IconContext.Provider>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default GifCard;
