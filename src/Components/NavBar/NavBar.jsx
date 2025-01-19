import { useEffect, useRef, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { BiSolidBell } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { signout } from "../Firebase/Auth";
function NavBar() {
  const [isshow, setisshow] = useState(false);
  const Navigate = useNavigate();
  const ref = useRef();
  const navref = useRef();
  function isOpen() {
    ref.current.classList.toggle("hidden");
  }
  function Navbarshow() {
    setisshow(false);
    if (scrollY >= 50) {
      navref.current.classList.add("bg-total");
    } else {
      navref.current.classList.remove("bg-total");
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", Navbarshow);
    return () => {
      window.removeEventListener("scroll", Navbarshow);
    };
  });
  return (
    <div
      className="max-w-full py-6 fixed top-0 left-0 w-full z-10"
      ref={navref}
    >
      <div className="flex items-center justify-between max-w-sm mx-auto px-4 sm:max-w-2xl md:max-w-6xl lg:max-w-7xl">
        <div id="left" className="flex items-center gap-5">
          <NavLink
            to="/"
            className="text-sm text-white hidden font-medium  sm:block"
          >
            Home
          </NavLink>
          <p className="text-sm text-white hidden font-medium sm:block">
            Country
          </p>
          <p className="text-sm text-white hidden font-medium sm:block">
            Movies
          </p>
          <p className="text-sm text-white hidden font-medium sm:block">
            series
          </p>
          <p className="text-sm text-white hidden font-medium sm:block">
            Animation
          </p>

          <HiMenuAlt2
            size={40}
            className="font-bold text-2xl p-2 rounded-xl text-gray-400 bg-icon sm:hidden"
            onClick={isOpen}
          />
        </div>
        <div
          id="center"
          className="sm:flex items-center bg-icon py-1 rounded-2xl hidden"
        >
          <input
            type="text"
            placeholder="Search movie ..."
            className="bg-transparent ml-2 placeholder:text-xs outline-none mr-2"
          />
          <IoSearchOutline
            size={20}
            className="text-white mr-2 cursor-pointer"
          />
        </div>
        <div id="right" className="flex gap-3">
          <IoSearchOutline
            size={40}
            className="font-bold text-2xl p-2 rounded-xl text-gray-400 bg-icon sm:hidden"
          />
          <BiSolidBell
            size={40}
            className="font-bold text-2xl p-2 rounded-xl text-gray-400 bg-icon sm:hidden"
          />
          <div className="hidden sm:block bg-icon p-2 rounded-2xl cursor-pointer relative group">
            <p className="text-white">
              <FaUserLarge className="text-gray-400" />
            </p>
            <p
              className="absolute text-white -right-5 top-8 bg-total text-sm p-3 rounded-lg hidden group-hover:block"
              onClick={() => signout()}
            >
              Logout
            </p>
          </div>
        </div>
      </div>
      <div
        className="fixed inset-0 bg-white from-pink-50 via-purple-50 hidden sm:hidden"
        ref={ref}
      >
        <div className="py-8 px-2 flex items-center justify-between">
          <p className="text-md font-medium">Account</p>
          <RxCross2 size={25} onClick={isOpen} />
        </div>
        <p>Exit to here</p>
      </div>
    </div>
  );
}

export default NavBar;
