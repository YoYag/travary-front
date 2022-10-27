import React from "react";
import SearchMap from "./SearchMap";
import PlanRoute from "./PlanRoute";

const PlanBox = ({
  mapData,
  mapApiData,
  addPlace,
  places,
  activatedLocation,
  setActivatedLocation,
}) => {
  return (
    <div className="w-1/2 flex">
      <PlanRoute />
      <SearchMap
        mapData={mapData}
        mapApiData={mapApiData}
        addPlace={addPlace}
        places={places}
        activatedLocation={activatedLocation}
        setActivatedLocation={setActivatedLocation}
      />
    </div>
  );
};

export default PlanBox;
