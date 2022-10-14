import React from "react";
import SearchMap from "./SearchMap";
import PlanRoute from "./PlanRoute";

const PlanBox = ({ mapData, mapApiData, addPlace, places }) => {
  return (
    <div className="w-1/2 flex">
      <PlanRoute />
      <SearchMap
        mapData={mapData}
        mapApiData={mapApiData}
        addPlace={addPlace}
        places={places}
      />
    </div>
  );
};

export default PlanBox;
