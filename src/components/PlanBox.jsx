import React from "react";
import SearchMap from "./SearchMap";
import PlanRoute from "./PlanRoute";

const PlanBox = ({ map, mapApi }) => {
  return (
    <div className="h-full">
      <SearchMap map={map} mapApi={mapApi} />
      <PlanRoute />
    </div>
  );
};

export default PlanBox;
