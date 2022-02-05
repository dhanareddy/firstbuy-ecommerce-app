import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useHandleChange from "../hooks/useHandleChange";
import { InitiateRegister } from "../redux/action/Action";
const Signup = () => {
  let [userName, updateUsename, resetUsername] = useHandleChange("");
  let [email, updateEmail, resetEmail] = useHandleChange("");
  let [password, updatePassword, resetPassword] = useHandleChange("");
  let [phoneNumber, updatePhoneNumber, resetPhoneNumber] = useHandleChange("");
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let rawData = [email, password, userName, phoneNumber];
  let handleSubmit = e => {
    e.preventDefault();
    resetEmail();
    resetPassword();
    resetPhoneNumber();
    resetUsername();
    dispatch(InitiateRegister(rawData));
  };
  let User = useSelector(state => state.data.user);
  useEffect(() => {
    User ? navigate("/") : navigate("/signup");
  }, [User]);

  return (
    <div className="">
      <div className="flex items-center justify-center min-h-screen bg-gray-100  ">
        <div className="mx-4 mt-4 text-left bg-white shadow-lg shadow-gray-400  md:w-1/4 lg:w-1/3 sm:w-1/3 p-[50px]">
          <form onSubmit={handleSubmit}>
            <h1 className="text-3xl  font-bold text-center text-orange-500">
              Register to First Buy
            </h1>
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="Name">
                  Name
                  <label>
                    <input
                      type="text"
                      placeholder="Please Enter Your Name"
                      {...updateUsename}
                      className="w-full px-4 py-2 mt-2 border rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </label>
                </label>
              </div>
              <div className="mt-4">
                <label className="block" htmlFor="email">
                  Email
                  <label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      {...updateEmail}
                      className="w-full px-4 py-2 mt-2 shadow-sm border rounded-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </label>
                </label>
              </div>
              <div className="mt-4">
                <label className="block">
                  Password
                  <label>
                    <input
                      type="password"
                      placeholder="Enter A Password"
                      {...updatePassword}
                      className="w-full px-4 py-2 shadow-sm mt-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </label>
                </label>
              </div>
              <div className="mt-4">
                <label className="block">
                  Phone Number
                  <label>
                    <input
                      type="tel"
                      placeholder="Enter Phone Number"
                      {...updatePhoneNumber}
                      className="w-full px-4 py-2 mt-2 shadow-sm border rounded-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </label>
                </label>
              </div>

              <div className="flex">
                <button className="w-full px-6 py-2 mt-4 border border-orange-500 text-orange-500 rounded-3xl hover:bg-orange-500 hover:text-white">
                  Create Account
                </button>
              </div>
              <div className="mt-6 text-grey-dark">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="text-blue-500 hover:hover:text-orange-500"
                >
                  Log in
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
