import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAuth } from "firebase/auth";
import { loggedInUser } from "./redux/action/Action";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import SingleProduct from "./pages/SingleProduct";
import Payment from "./pages/Payment";
import PageNotFound from "./pages/PageNotFound";
const App = () => {
  let [state, setState] = useState(null);
  let data = useSelector(state => state.data.user);
  let dispatch = useDispatch();
  dispatch(loggedInUser(state));
  getAuth().onAuthStateChanged(user => {
    if (user) {
      setState(user);
    } else {
      setState(null);
    }
  });

  return (
    <Router>
      <section>
        <article>
          <header>
            <Navbar />
            <ToastContainer />
          </header>
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/signin" element={<LoginForm />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route exact path="/payment" element={<Payment />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
        </article>
      </section>
    </Router>
  );
};

export default App;
