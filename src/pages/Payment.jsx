import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
// import { db } from "./../utils/firebase";
import { BiRupee } from "react-icons/bi";

const Payment = () => {
  let navigate = useNavigate();
  const { basket, user } = useSelector(state => state.data);
  const totalValue = basket =>
    basket.reduce((amount, item) => item.price + amount, 0);
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="">
        <h1 className="w-full text-center text-2xl p-2 bg-neutral-200 font-semibold">
          Checkout{" "}
          {
            <Link
              to="/checkout"
              className="text-orange-500 hover:text-amber-500"
            >
              {basket.length} items
            </Link>
          }
        </h1>
        <div className="flex border-b-2 w-[95%] m-auto p-2">
          <div className="basis-1/3 ">
            <h1 className="font-bold text-lg p-2 px-4">
              Review items and Delivery
            </h1>
          </div>
          <div className="w-full basis-2/3">
            {basket &&
              basket.map(item => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
          </div>
        </div>
        <div className="border-b-2 w-[95%] m-auto mb-4">
          <form onSubmit={handleSubmit}>
            <div className="flex border-b-2 py-10 p-2">
              <div className="basis-1/3">
                <h3 className="font-bold text-lg p-2 px-4">Delivery Address</h3>
              </div>
              <div className="flex flex-col w-4/12 ">
                <label htmlFor="name" className="py-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="py-1 px-2 "
                />
                <label htmlFor="phone" className="py-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="py-1 px-2"
                />{" "}
                <label htmlFor="address" className="py-1">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your full address"
                  className="py-1 px-2"
                />
                <label htmlFor="pinCode" className="py-1">
                  Pin Code
                </label>
                <input
                  type="text"
                  name="pinCode"
                  placeholder="Enter Pin Code"
                  className="py-1 px-2"
                />
              </div>
            </div>
            <div className="flex p-2">
              <div className="basis-1/3">
                <h3 className="font-bold text-lg p-2 px-4">Payment Method</h3>
              </div>
              <div>
                <h3 className="flex items-center font-bold text-lg p-2 px-4">
                  Order Total : <BiRupee className="" />
                  {totalValue(basket)}
                </h3>
                <button className=" max-w-md w-60 justify-center cursor-pointer bg-amber-400 flex items-center px-5 py-2 border-2  mt-3 border-amber-500 hover:border-orange-500 rounded">
                  Order Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
