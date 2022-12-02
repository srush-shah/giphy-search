import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //Signed In
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <div className="absolute w-screen h-screen bg-gray-200">
        <div className="relative top-40 first-letter:container mx-auto px-8 w-1/2 max-h-max border bg-white py-40 rounded-xl shadow-lg shadow-gray-600">
          <h1 className="relative bottom-12 text-center text-5xl">
            Welcome to Giphy Search
          </h1>
          <div className="relative w-full max-h-max pl-40">
            <form className=" flex flex-col items-start gap-5 ">
              <div className="flex gap-5">
                <label htmlFor="email-address" className="text-xl">
                  Email Address
                </label>
                <input
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                  className="focus:outline-none text-xl border-b-2 focus:border-b-black"
                />
              </div>

              <div className="flex gap-14">
                <label htmlFor="password" className="text-xl pr-1">
                  Password
                </label>
                <input
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                  className="focus:outline-none text-xl border-b-2 focus:border-b-black"
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white p-2 rounded"
                onClick={handleSubmit}
              >
                Sign up
              </button>
            </form>
          </div>

          <div className="relative top-12 w-full max-h-max text-center">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="font-bold text-blue-600">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
