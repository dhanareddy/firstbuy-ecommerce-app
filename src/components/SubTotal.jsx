import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
const SubTotal = () => {
  let { basket, user } = useSelector(state => state.data);
  let navigate = useNavigate();
  const handleCheckout = () => {
    {
      user ? navigate("/payment") : navigate("/signin");
    }
  };
  const totalValue = basket =>
    basket.reduce((amount, item) => item.price + amount, 0);
  return (
    <div className="bg-gray-100 p-4 shadow-md absolute z-0 border">
      <p className="flex items-center">
        Sub Total {basket.length} items :{" "}
        <strong className="flex items-center">
          <BiRupee /> {totalValue(basket)}
        </strong>
      </p>
      {basket.length !== 0 ? (
        <>
          {" "}
          <button
            onClick={handleCheckout}
            className=" cursor-pointer border-orange bg-amber-400 flex items-center px-4 py-1 border-2  mt-3 border-gray-100  hover:border-amber-500 rounded-sm min-w-full"
          >
            Proceed To Checkout
          </button>
          <button
            onClick={() => navigate("/")}
            className=" cursor-pointer border-orange bg-amber-400 flex items-center px-4 py-1 border-2  mt-3 border-gray-100  hover:border-amber-500 rounded-sm min-w-full"
          >
            Continue Shopping
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default SubTotal;
