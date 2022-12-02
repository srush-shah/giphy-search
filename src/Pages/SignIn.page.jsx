import React, { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        console.log(user);
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            navigate(`/home/${uid}`);
            // ...
            console.log("uid", uid);
          } else {
            // User is signed out
            // ...
            navigate("/login");
            console.log("user is logged out");
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };

  return (
    <>
      <div className="absolute w-screen h-screen bg-gray-200">
        <div className="relative top-40 first-letter:container mx-auto px-8 w-1/2 max-h-max border bg-white py-40 rounded-xl shadow-lg shadow-gray-600">
          <h1 className="relative bottom-12 text-center text-5xl">
            Log in to your Account
          </h1>
          <div className="relative w-full max-h-max pl-40">
            <form className=" flex flex-col items-start gap-5 ">
              <div className="flex gap-5">
                <label htmlFor="email-address" className="text-xl">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                  className="focus:outline-none text-xl border-b-2 focus:border-b-black"
                />
              </div>

              <div className="flex gap-14">
                <label htmlFor="password" className="text-xl pr-1">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="focus:outline-none text-xl border-b-2 focus:border-b-black"
                />
              </div>

              <div>
                <button
                  onClick={onLogin}
                  className="bg-black text-white p-2 rounded"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="relative top-12 w-full max-h-max text-center">
            <p>
              No account yet?{" "}
              <Link to="/" className="font-bold text-blue-600">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
