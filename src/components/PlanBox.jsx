import React from "react";
import SearchMap from "./SearchMap";
import PlanRoute from "./PlanRoute";

const PlanBox = ({ mapData, mapApiData, addPlace }) => {
  return (
    <div className="w-1/2 flex">
      <PlanRoute />
      <SearchMap
        mapData={mapData}
        mapApiData={mapApiData}
        addPlace={addPlace}
      />
    </div>
  );
};

export default PlanBox;
