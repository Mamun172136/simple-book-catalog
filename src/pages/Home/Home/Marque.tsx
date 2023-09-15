import React from "react";
import Marquee from "react-fast-marquee";
import book1 from "../../../assets/book1.jpg";

const Marque = () => {
  return (
    <div>
      <Marquee className=" mb-4 ">
        <div className="w-[100px] mx-8">
          <img src={book1} alt="" />
        </div>
        <div className="w-[100px] mx-8">
          <img src={book1} alt="" />
        </div>
        <div className="w-[100px] mx-8">
          <img src={book1} alt="" />
        </div>
        <div className="w-[100px] mx-8">
          <img src={book1} alt="" />
        </div>
        <div className="w-[100px] mx-8">
          <img src={book1} alt="" />
        </div>
        <div className="w-[100px] mx-8">
          <img src={book1} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default Marque;
