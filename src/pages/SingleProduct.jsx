import React from "react";

import { useParams } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { products } from "../utils/ProductsData";
import { addToBasket } from "../redux/action/Action";
import { toast } from "react-toastify";
const SingleProduct = () => {
  let { id } = useParams();
  let singleProduct = products.find(item => item.id === id);
  let dispatch = useDispatch();

  const addItemToBasket = () => {
    const item = {
      id: singleProduct.id,
      rating: singleProduct.rating,
      title: singleProduct.title,
      price: singleProduct.price,
      image: singleProduct.image,
      specification: singleProduct.specification,
      detail: singleProduct.detail,
      count: singleProduct.count,
    };
    dispatch(addToBasket(item));
    toast.success(`${item.title} successfully added to basket`);
  };
  return (
    <div className="p-[20px] bg-white">
      <div className="flex">
        <div className="flex mt-[20px] mb-[20px] basis-[35%] flex-col">
          <img
            src={singleProduct.image}
            className="w-full max-h-[400px] object-contain mb-[15px] mx-3 my-1 h-[400px] "
            alt=""
          />
          <div className="text-[20px] font-semibold">{singleProduct.title}</div>
        </div>
        <div className="pl-[20px] ml-[25px] basis-[65%]">
          <div className="text-[20px] font-semibold">{singleProduct.title}</div>
          <div className="mt-[10px] flex">
            {Array(singleProduct.rating)
              .fill()
              .map((_, index) => (
                <p key={index}>⭐</p>
              ))}
          </div>
          <p className="mt-[10px] flex">
            Price:
            <strong>
              <BiRupee className="mt-[6px] ml-[2px]" />
            </strong>
            <strong>{singleProduct.price}</strong>
          </p>
          <div className="mt-[20px]">
            <h4>
              <strong>Specification</strong>{" "}
            </h4>
            {singleProduct.specification &&
              singleProduct.specification.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </div>
          <div className="mt-[20px]">
            <h4>
              <strong>Product Description</strong>
            </h4>
            <p>{singleProduct.detail}</p>
          </div>
          <button
            className=" cursor-pointer border-orange bg-amber-400 flex items-center px-2 py-1 border-2  mt-3 border-white hover:border-amber-500 rounded-sm"
            onClick={addItemToBasket}
          >
            <i className="align-middle">
              <AiOutlineShoppingCart />
            </i>
            Add To Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
