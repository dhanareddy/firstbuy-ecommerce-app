import React, { useEffect } from "react";
import useHandleChange from "./../hooks/useHandleChange";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { InitiateLogin } from "../redux/action/Action";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [email, updateUsername, resetUsername] = useHandleChange("");
  const [password, updatePassword, resetPassword] = useHandleChange("");
  let handleSubmit = e => {
    e.preventDefault();
    resetUsername();
    resetPassword();
    dispatch(InitiateLogin(email, password));
  };
  let User = useSelector(state => state.data.user);
  useEffect(() => {
    User && User.emailVerified ? navigate("/") : navigate("/signin");
  }, [User]);
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <div className="flex justify-center items-center mt-[6%] ">
            <div className="w-full max-w-xs">
              <Form className="bg-white border shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-3xl  font-bold text-center text-orange-500 mb-7">
                  Login to First Buy
                </h1>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    {...updateUsername}
                    className="shadow-sm  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-orange-500 "
                    placeholder="Enter your Email"
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    {...updatePassword}
                    placeholder="Enter password here"
                    className="shadow-sm  border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-orange-500 "
                  />
                  <ErrorMessage name="password" component="div" />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-8 rounded   mt-2"
                    type="button"
                  >
                    Submit
                  </button>
                  <Link
                    className=" font-bold text-sm text-blue-500 hover:text-orange-500"
                    to="/"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <p className="mt-2 text-center">
                  Not an user ?{" "}
                  <Link
                    to="/signup"
                    className=" font-bold text-sm text-blue-500 hover:text-orange-500"
                  >
                    Register
                  </Link>
                </p>
              </Form>
              <p className="text-center text-gray-500 text-xs">
                &copy;2020 First buy. All rights reserved.
              </p>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
