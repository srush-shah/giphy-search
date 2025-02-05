import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

//Component
import SearchBar from "../components/SearchBar/SearchBar.component";
import GifCard from "../components/GifCard/GifCard.component";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [inpValue, setInpValue] = useState("");
  const [gifData, setGifData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
        toast(error, {position: 'top-center', theme:'colored', type:'error'});
      });
  };

  useEffect(() => {
    toast("Logged In Successfully!", {position: 'top-center', type: 'success', theme:'colored'})
  },[])

  return (
    <>
      <div
        className={`container py-24 w-screen px-12 bg-gray-200 max-w-screen-2xl max-h-screen-2xl ${
          isClicked ? "h-max-fit" : "h-screen"
        }`}
      >
        <div className="my-12">
          <button
            onClick={handleLogout}
            className="bg-black text-white p-2 rounded"
          >
            Log Out
          </button>
        </div>
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
              loading={loading}
              setLoading={setLoading}
            />
          </div>
          <div
            className={`w-full h-96 px-96 py-40 ${
              loading ? "block" : "hidden"
            }`}
          >
            <ClipLoader className="w-full h-full" />
          </div>
          <div
            className={`w-full h-full flex flex-wrap ${
              loading ? "hidden " : isClicked ? "" : "hidden"
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
      <ToastContainer/>
    </>
  );
};

export default Home;
