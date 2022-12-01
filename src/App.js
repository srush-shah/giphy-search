//Component
import SearchBar from "./components/SearchBar/SearchBar.component";

function App() {
  return (
    <>
      <div className="container py-12 w-screen px-12 bg-gray-200 max-w-screen-2xl max-h-screen h-screen">
        <div className="container mx-auto bg-white w-1/2 h-20 p-4 rounded-lg">
          <SearchBar />
        </div>
      </div>
    </>
  );
}

export default App;
