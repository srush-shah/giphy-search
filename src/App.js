import { useState } from "react";
import GifCard from "./components/GifCard/GifCard.component";

//Component
import SearchBar from "./components/SearchBar/SearchBar.component";

function App() {
  const [isClicked, setIsClicked] = useState(false);
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
            <SearchBar isClicked={isClicked} setIsClicked={setIsClicked} />
          </div>
          <div
            className={`w-full h-full flex flex-col ${
              isClicked ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-wrap">
              <GifCard
                image="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif"
                title="Viktoria Bolonina"
                subtitle="@viktoriaphotographs"
              />
              <GifCard
                image="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif"
                title="Viktoria Bolonina"
                subtitle="@viktoriaphotographs"
              />
              <GifCard
                image="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif"
                title="Viktoria Bolonina"
                subtitle="@viktoriaphotographs"
              />
              <GifCard
                image="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif"
                title="Viktoria Bolonina"
                subtitle="@viktoriaphotographs"
              />
              <GifCard
                image="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif"
                title="Viktoria Bolonina"
                subtitle="@viktoriaphotographs"
              />
              <GifCard
                image="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif"
                title="Viktoria Bolonina"
                subtitle="@viktoriaphotographs"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
