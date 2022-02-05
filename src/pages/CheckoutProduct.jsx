import React from "react";
import { useDispatch } from "react-redux";
import {
  AiFillStar,
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { removeFromBasket } from "../redux/action/Action";

const CheckoutProduct = ({
  id,
  title,
  image,
  rating,
  price,
  hideButton,
  count,
}) => {
  let dispatch = useDispatch();
  let onIncreaseCount = count => {
    count = count + 1;
  };
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(id));
  };

  return (
    <div className="flex mt-[20px] mb-[20px] ">
      <div className="basis-[20%]">
        <img
          src={image}
          alt=""
          className=" max-h-[200px] object-contain  h-[200px] m-auto"
        />
      </div>
      <div className="pl-[20px] basis-[70%]">
        <p className="text-[20px] font-semibold">{title}</p>
        <p className="checkout-product-price flex">
          <strong>
            <BiRupee className="mt-[6px]" />
          </strong>
          <strong>{price}</strong>
        </p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button
            className=" cursor-pointer border-orange bg-amber-400 flex items-center px-2 py-1 border-2  mt-3 border-white hover:border-amber-500 rounded-sm"
            onClick={removeItemFromBasket}
          >
            <i className="align-middle">
              <AiOutlineShoppingCart />
            </i>
            Remove from Basket
          </button>
        )}
      </div>
      <div className="flex justify-center items-center border border-stone-300 h-full px-2">
        <button className="hover:bg-stone-200 p-2">
          <AiOutlineMinus />
        </button>
        <p className="p-2">{count}</p>
        <button
          className="hover:bg-stone-200 p-2"
          onClick={onIncreaseCount(count)}
        >
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
