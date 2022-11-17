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
  countDate,
  setCountDate,
  dayCurrentIndex,
  setDayCurrentIndex,
  dayPlaceSchedule,
  setDayPlaceSchedule,
  planInfo,
  setPlanInfo,
}) => {
  return (
    <div className="w-1/2 flex">
      <PlanRoute
        countDate={countDate}
        setCountDate={setCountDate}
        dayCurrentIndex={dayCurrentIndex}
        setDayCurrentIndex={setDayCurrentIndex}
        dayPlaceSchedule={dayPlaceSchedule}
        setDayPlaceSchedule={setDayPlaceSchedule}
        planInfo={planInfo}
        setPlanInfo={setPlanInfo}
      />
      <SearchMap
        mapData={mapData}
        mapApiData={mapApiData}
        addPlace={addPlace}
        places={places}
        activatedLocation={activatedLocation}
        setActivatedLocation={setActivatedLocation}
        dayCurrentIndex={dayCurrentIndex}
        dayPlaceSchedule={dayPlaceSchedule}
        setDayPlaceSchedule={setDayPlaceSchedule}
        planInfo={planInfo}
        setPlanInfo={setPlanInfo}
      />
    </div>
  );
};

export default PlanBox;
