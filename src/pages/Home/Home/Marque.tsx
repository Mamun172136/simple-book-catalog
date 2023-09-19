import Marquee from "react-fast-marquee";

import book2 from "../../../assets/book2.jpg";
import book3 from "../../../assets/book3.jpg";
import book4 from "../../../assets/book4.jpg";
import book8 from "../../../assets/book8.jpg";
import book9 from "../../../assets/book9.jpg";
import book10 from "../../../assets/book10.png";
import book5 from "../../../assets/book5.jpg";
import book6 from "../../../assets/book6.jpg";

const Marque = () => {
  return (
    <div>
      <Marquee className=" mb-4 ">
        <div className="w-[100px] mx-8">
          <img src={book2} alt="" />
        </div>
        <div className="w-[100px] mx-8">
          <img src={book3} alt="" />
        </div>
        <div className="w-[100px] mx-8">
          <img src={book4} alt="" />
        </div>
        <div className="w-[100px] mx-8">
          <img src={book8} alt="" />
        </div>
        <div className="w-[100px] mx-8">
          <img src={book9} alt="" />
        </div>
        <div className="w-[100px] mx-8">
          <img src={book10} alt="" />
        </div>
        <div className="w-[100px] mx-8">
          <img src={book5} alt="" />
        </div>
        <div className="w-[100px] mx-8">
          <img src={book6} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default Marque;
