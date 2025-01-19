import React, { useState } from "react";
import {
  Emailpasswordsignin,
  Emailpasswordsignup,
} from "../../Components/Firebase/Auth";
function Login() {
  const [signup, setsignup] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  function HandleSubmit(e) {
    e.preventDefault();
    if (signup) {
      Emailpasswordsignup(email, password);
    } else {
      Emailpasswordsignin(email, password);
    }
    setname("");
    setemail("");
    setpassword("");
  }
  return (
    <div className="max-w-full h-screen relative">
      <img
        src="https://c4.wallpaperflare.com/wallpaper/75/280/56/black-the-world-map-wallpaper-preview.jpg"
        alt=""
        className="w-full h-screen object-cover absolute"
      />
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-gray-50 w-lg h-fit px-5 pt-5 rounded-sm shadow-md">
        <div>
          <h1 className="text-2xl font-medium mb-2">
            {signup ? "Signup" : "Login"}
          </h1>
          <p className="text-gray-700 text-xs font-medium mb-2">
            {`Hey, Enter your Details to get ${
              signup ? "signup" : "sign"
            } in to your acccount`}
          </p>
        </div>
        <form className="flex flex-col gap-2" onSubmit={HandleSubmit}>
          {signup && (
            <input
              className="outline-none border p-2 pl-2 border-gray-500 placeholder:text-sm"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          )}
          <input
            className="outline-none border p-2 pl-2 border-gray-500 placeholder:text-sm"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            className="outline-none border p-2 pl-2 border-gray-500 placeholder:text-sm"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <p className="text-xs sm:text-sm">{`Having trouble in ${
            signup ? "sign up" : "sign in"
          } ?`}</p>
          <button className="p-2 border text-sm font-medium bg-total text-white">
            {signup ? "Sign up" : " Sign in"}
          </button>
        </form>
        <div>
          <p className="text-center py-2 text-xs text-gray-600">
            {`Or ${signup ? "Sign up" : " Sign in"} with`}
          </p>
          <div className="text-sm text-center border border-gray-500 py-2 font-medium cursor-pointer">
            Gooogle
          </div>
          <p className="text-xs text-center py-5">
            {signup ? "already have an account " : "Don't have an acccount ?"}{" "}
            <span
              className="text-sm font-medium cursor-pointer"
              onClick={() => {
                setsignup(!signup);
                setname("");
                setemail("");
                setpassword("");
              }}
            >
              {signup ? "Sign In" : "Signup Now"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
