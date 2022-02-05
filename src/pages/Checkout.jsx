import React from "react";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import SubTotal from "../components/SubTotal";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const { basket, user } = useSelector(state => state.data);
  return (
    <div className="flex p-[20px] bg-white justify-between">
      <div className=" w-full mt-[10px] ">
        <div>
          <div className="flex justify-between">
            <div className="basis-1/2 py-11 px-2 my-1">
              <h3>
                Hello,{" "}
                <strong>
                  {user ? user.displayName : <Link to="/signin">SignIn</Link>}
                </strong>
              </h3>
              <h2 className="mr-[10px] p-[10px] border-1 border-gray-400">
                {basket.length === 0
                  ? "Your Shopping Basket is Empty"
                  : "Your Shopping Basket"}
              </h2>
              {basket.length === 0 ? (
                <Link
                  to="/"
                  className="cursor-pointer border-orange bg-amber-400 flex items-center px-2 py-1 border-2  mt-3 border-white hover:border-amber-500 rounded-sm w-1/6 justify-center min-w-[170px]"
                >
                  Continue Shopping
                </Link>
              ) : (
                ""
              )}
            </div>
            <div className="flex basis-1/2 justify-end">
              <SubTotal />
            </div>
          </div>
          {basket &&
            basket.map(item => (
              <div className="border-2 border-bg-[#efefef] shadow-md p-5 mb-5">
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  count={item.count}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
