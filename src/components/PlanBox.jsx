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
  placeSchedule,
  setPlaceSchedule,
}) => {
  return (
    <div className="w-1/2 flex">
      <PlanRoute placeSchedule={placeSchedule} />
      <SearchMap
        mapData={mapData}
        mapApiData={mapApiData}
        addPlace={addPlace}
        places={places}
        activatedLocation={activatedLocation}
        setActivatedLocation={setActivatedLocation}
        placeSchedule={placeSchedule}
        setPlaceSchedule={setPlaceSchedule}
      />
    </div>
  );
};

export default PlanBox;
