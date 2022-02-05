import React from "react";
import { Link } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { addToBasket } from "./../redux/action/Action";
import { useDispatch } from "react-redux";

const Product = ({
  id,
  title,
  price,
  image,
  rating,
  specification,
  detail,
  count,
}) => {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const item = {
      id,
      title,
      price,
      image,
      rating,
      specification,
      detail,
      count,
    };
    dispatch(addToBasket(item));
  };
  return (
    <div className="basis-1/3">
      <div
        id="product"
        className="flex items-center flex-col justify-between max-w-[380px] min-w-[100px] m-[20px] p-2.5 w-full border border-white hover:border-gray-200 hover:shadow-xl bg-white z-10 shadow-md h-[450px] hover:h-[460px] hover:max-w-[390px] hover:m-[10px] "
      >
        <Link to={`/product/${id}`}>
          <div id="info" className="mb-[15pxx] h-[100px]">
            <p>{title} </p>

            <p id="price" className="mt-[5px] flex items-center">
              <strong>
                <BiRupee />
              </strong>
              <strong>{price}</strong>
            </p>
            <div id="rating" className="flex">
              {Array(rating)
                .fill()
                .map((_, index) => (
                  <p key={index}>
                    <AiFillStar className="text-amber-300" />
                  </p>
                ))}
            </div>
          </div>
          <img
            src={image}
            alt={title}
            className="w-full max-h-[200px] object-contain  mb-[15px] mx-3 my-1"
          />
        </Link>
        <button
          className=" cursor-pointer border-orange bg-amber-400 flex items-center px-3 py-1 border-2  mt-3 border-white hover:border-amber-500 rounded-sm"
          onClick={addItemToBasket}
        >
          <i className="align-middle">
            <AiOutlineShoppingCart />
          </i>
          Add To Basket
        </button>
      </div>
    </div>
  );
};

export default Product;
