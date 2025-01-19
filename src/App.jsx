import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import Video from "./Components/Video/Video";
import { onAuthStateChanged } from "firebase/auth";
import { Auth } from "./Components/Firebase/Auth";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
function App() {
  const Navgate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(Auth, (user) => {
      if (user) {
        Navgate("/");
      } else {
        Navgate("login");
      }
    });
  }, []);
  return (
    <div>
      <ToastContainer autoClose={1000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="video/:id" element={<Video />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
