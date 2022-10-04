import React from "react";
import SearchMap from "./SearchMap";
import PlanRoute from "./PlanRoute";

const PlanBox = () => {
  return (
    <div className="h-full">
      <SearchMap />
      <PlanRoute />
    </div>
  );
};

export default PlanBox;
