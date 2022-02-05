import React, { useEffect, useRef, useState } from "react";
import { BsCart } from "react-icons/bs";
import { BiSearchAlt2, BiUserCircle } from "react-icons/bi";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutInitiate } from "./../redux/action/Action";

const Navbar = () => {
  let dispatch = useDispatch();
  let childRef = useRef();
  let toggleElement = useRef();
  const { user, basket } = useSelector(state => state.data);
  let [clicked, setClicked] = useState(false);
  let handleClick = () => {
    setClicked(!clicked);
  };
  const handleClickOutside = e => {
    if (
      childRef.current &&
      toggleElement.current &&
      !toggleElement.current.contains(e.target) &&
      !childRef.current.contains(e.target)
    ) {
      setClicked(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  let handleLogout = () => {
    dispatch(logOutInitiate());
  };
  return (
    <div className=" bg-gray-800 ">
      <nav className="flex items-center justify-between w-[90%] m-auto h-14 ">
        <div className="basis-1/5">
          <a href="/">
            <img className="h-12 w-32 " src="first_buy.png" alt="First Buy" />
          </a>
        </div>

        <div className="flex basis-4/5 justify-end">
          <div className="flex  w-full basis-7/12">
            <input
              type="text"
              placeholder="Search for products and grocery"
              className="w-full rounded-l-sm px-2 h-10"
            />
            <button className="bg-orange-500 text-white rounded-r-sm px-3 h-10 flex items-center">
              <BiSearchAlt2 className="text-2xl" />
            </button>
          </div>
          <div className="flex justify-end items-center w-full basis-4/12 ">
            {user && user.emailVerified === true ? (
              <ul className="list-none text-white flex items-center font-semibold">
                <h1
                  className="flex items-center cursor-pointer"
                  onClick={handleClick}
                  ref={toggleElement}
                >
                  <p className="font-thin text-sm -mr-[8px] italic">Hello</p>
                  <li className="px-3 hover:text-orange-500">
                    {user.displayName}
                    {clicked ? (
                      <ul
                        className="p-3 absolute bg-white shadow-md w-[180px] z-10 top-[56px] text-black "
                        ref={childRef}
                      >
                        <li className="p-1 px-2 font-normal hover:bg-gray-200 flex justify-between items-center border rounded-sm my-2">
                          Profile <BiUserCircle className="text-2xl" />
                        </li>
                        <li className="p-1 px-2 font-normal hover:bg-gray-200 items-center   flex justify-between border rounded-sm my-2">
                          Settings <FiSettings className="text-xl" />
                        </li>
                        <li
                          className="p-1 px-2 font-normal hover:bg-gray-200 flex items-center  justify-between border rounded-sm my-2"
                          onClick={handleLogout}
                        >
                          Logout <FiLogOut className="text-xl" />
                        </li>
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                </h1>
                <Link to="">
                  <li className="px-3 hover:text-orange-500">Orders</li>
                </Link>
                <Link to="/checkout">
                  <li className="flex px-3 items-center hover:text-orange-500 relative">
                    Cart <BsCart className=" text-4xl text-white" />
                    <p className="absolute left-[58px] mb-1 text-sm text-orange-500">
                      {basket && basket.length}
                    </p>
                  </li>
                </Link>
              </ul>
            ) : (
              <ul className="list-none text-white flex items-center font-semibold">
                <Link to="/signin">
                  <li className="px-3 hover:text-orange-500">SignIn</li>
                </Link>
                <Link to="/signup">
                  <li className="px-3 hover:text-orange-500">SignUp</li>
                </Link>
                <Link to="/checkout">
                  <li className="flex px-3 items-center hover:text-orange-500 relative">
                    Cart <BsCart className=" text-4xl text-white" />
                    <p className="absolute left-[58px] mb-1 text-sm text-orange-500">
                      {basket && basket.length}
                    </p>
                  </li>
                </Link>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
