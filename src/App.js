import Home from "./Pages/Home.page";
import SignIn from "./Pages/SignIn.page";
import SignUp from "./Pages/SignUp.page";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<SignUp />} />
        <Route path="/login" exact element={<SignIn />} />
        <Route path="/home/:id" exact element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
