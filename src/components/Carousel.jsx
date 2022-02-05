import React, { useEffect, useState } from "react";
import { CarouselData } from "./carouselData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Carousel = ({ images }) => {
  let [index, setIndex] = useState(0);
  const lastIndex = images.length - 1;
  useEffect(() => {
    if (index > lastIndex) {
      setIndex(0);
    }
    if (index < 0) {
      setIndex(lastIndex);
    }
  }, [index, images]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div>
      <div className="max-w-full rel">
        <img src={images[index]} alt="banner" />
        <span
          onClick={() => setIndex(index - 1)}
          className="absolute top-[320px] text-2xl border text-white rounded-3xl w-[1.25em] h-[1.25em] grid place-items-center cursor-pointer left-1 bg-black bg-opacity-70"
        >
          <p>
            <IoIosArrowBack />
          </p>
        </span>

        <span
          onClick={() => setIndex(index + 1)}
          className="absolute bg-black border text-white bg-opacity-70 top-[320px] w-[1.25em] h-[1.25em] rounded-3xl text-2xl right-1 font-bold grid place-items-center cursor-pointer  items-center justify-center"
        >
          <p>
            <IoIosArrowForward />
          </p>
        </span>
      </div>
    </div>
  );
};

export default Carousel;
