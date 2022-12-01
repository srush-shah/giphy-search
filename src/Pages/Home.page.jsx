import { useState } from "react";
import GifCard from "../components/GifCard/GifCard.component";

//Component
import SearchBar from "../components/SearchBar/SearchBar.component";

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [inpValue, setInpValue] = useState("");
  const [gifData, setGifData] = useState([]);

  // const requestGifData = async () => {
  //   const getGIFS = await axios.get(
  //     `https://api.giphy.com/v1/gifs/search?q=${inpValue}&api_key=${process.env.REACT_APP_API_KEY}`
  //   );
  //   setGifData(getGIFS.data.data);
  //   console.log(getGIFS.data);
  // };
  if (gifData !== []) {
    console.log(gifData);
  }
  return (
    <>
      <div
        className={`container py-24 w-screen px-12 bg-gray-200 max-w-screen-2xl max-h-screen-2xl ${
          isClicked ? "h-max-fit" : "h-screen"
        }`}
      >
        <div
          className={`container mx-auto bg-white ${
            isClicked ? "w-2/3" : "w-1/2"
          } h-max px-4 py-4 rounded-lg flex flex-col gap-3`}
        >
          <div className="w-full h-12">
            <SearchBar
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              inpValue={inpValue}
              setInpValue={setInpValue}
              gifData={gifData}
              setGifData={setGifData}
            />
          </div>
          <div
            className={`w-full h-full flex flex-wrap ${
              isClicked ? "" : "hidden"
            }`}
          >
            {gifData.map((gif) => (
              <GifCard
                image={gif.images.preview_gif.url}
                title={gif.username}
                subtitle={gif.username}
                alt={gif.title}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
