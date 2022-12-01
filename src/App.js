import { useState } from "react";

//Component
import SearchBar from "./components/SearchBar/SearchBar.component";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div className="container py-12 w-screen px-12 bg-gray-200 max-w-screen-2xl max-h-screen h-screen">
        <div className="container mx-auto bg-white w-1/2 h-max p-4 rounded-lg flex flex-col gap-3">
          <div className="w-full h-12">
            <SearchBar isClicked={isClicked} setIsClicked={setIsClicked} />
          </div>
          <div className="w-full h-full">{isClicked ? <>Hello</> : ""}</div>
        </div>
      </div>
    </>
  );
}

export default App;
