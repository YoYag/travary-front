import React from "react";
import mainbanner from "../assets/images/main/travel_1.jpg";

const Main = () => {
  return (
    <div className="w-full">
      <div className="h-96 overflow-hidden relative">
        <img className="img-absolute-center" src={mainbanner} alt="" />
      </div>
      <div></div>
    </div>
  );
};

export default Main;
