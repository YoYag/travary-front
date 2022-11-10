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
  count,
  setCount,
  dayCurrentIndex,
  setDayCurrentIndex,
  placeSchedule,
  setPlaceSchedule,
  dayPlaceSchedule,
  setDayPlaceSchedule,
}) => {
  return (
    <div className="w-1/2 flex">
      <PlanRoute
        count={count}
        setCount={setCount}
        dayCurrentIndex={dayCurrentIndex}
        setDayCurrentIndex={setDayCurrentIndex}
        placeSchedule={placeSchedule}
        dayPlaceSchedule={dayPlaceSchedule}
        setDayPlaceSchedule={setDayPlaceSchedule}
      />
      <SearchMap
        mapData={mapData}
        mapApiData={mapApiData}
        addPlace={addPlace}
        places={places}
        activatedLocation={activatedLocation}
        setActivatedLocation={setActivatedLocation}
        dayCurrentIndex={dayCurrentIndex}
        setDayCurrentIndex={setDayCurrentIndex}
        placeSchedule={placeSchedule}
        setPlaceSchedule={setPlaceSchedule}
        dayPlaceSchedule={dayPlaceSchedule}
        setDayPlaceSchedule={setDayPlaceSchedule}
      />
    </div>
  );
};

export default PlanBox;
