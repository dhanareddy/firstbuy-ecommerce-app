import React from "react";
import { headerItems } from "../utils/ProductsData";

const Menubar = () => {
  return (
    <div>
      <div className="flex text-white bg-gray-900 items-center justify-center">
        {headerItems &&
          headerItems.map((item, index) => (
            <p
              key={index}
              className="m-1  text-sm border border-gray-900 p-1 hover:border hover:border-white hover:cursor-pointer"
            >
              {item}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Menubar;
