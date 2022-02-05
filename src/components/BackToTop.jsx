import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [isVisible, setVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 900) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div>
      {isVisible && (
        <button
          className="border border-gray-500  rounded-sm bg-gray px-3 py-1 hover:bg-zinc-100 hover:shadow-lg"
          onClick={scrollToTop}
        >
          Back To Top
        </button>
      )}
    </div>
  );
};

export default BackToTop;
