import React, { useState } from "react";
import Carousel from "./../components/Carousel";
import Banner1 from "../bannerImages/Banner1.jpg";
import Banner2 from "../bannerImages/Banner2.jpg";
import Banner3 from "../bannerImages/Banner3.jpg";
import Banner4 from "../bannerImages/Banner4.jpg";
import Banner5 from "../bannerImages/Banner5.jpg";
import Banner6 from "../bannerImages/Banner6.jpg";
import Product from "../components/Product";
import { products } from "../utils/ProductsData";
import Menubar from "../components/Menubar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import BackToTop from "../components/BackToTop";

const Home = () => {
  const bannerImages = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];
  let data = useSelector(state => state.isUser);
  let [nos, setNos] = useState(6);
  let handleShowMore = () => {
    setNos(nos + 6);
  };
  return (
    <>
      <div>
        <Menubar />
        <div
          id="home"
          className="mx-auto flex justify-center max-w-[1500px] bg-gray-50"
        >
          <div id="home-vcontainer">
            <Carousel images={bannerImages} />
            <div id="home-row" className="flex z-10 mx-[5px] flex-wrap">
              {products.slice(0, nos).map(item => (
                <Product
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                  specification={item.specification}
                  detail={item.detail}
                  count={item.count}
                />
              ))}
            </div>{" "}
            <div className="flex justify-center my-3">
              {nos < products.length ? (
                <button
                  className="border border-gray-500  rounded-sm bg-gray px-3 py-1 hover:bg-zinc-100 hover:shadow-lg mr-5"
                  onClick={handleShowMore}
                >
                  Load more...
                </button>
              ) : (
                ""
              )}{" "}
              <div
                onClick={() => {
                  setNos(6);
                }}
              >
                <BackToTop />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
