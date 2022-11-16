import React, { useState } from "react";
import Category from "./Category";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";

const SearchMap = ({
  mapData,
  mapApiData,
  addPlace,
  places,
  activatedLocation,
  setActivatedLocation,
  dayCurrentIndex,
  dayPlaceSchedule,
  setDayPlaceSchedule,
}) => {
  const [selectPlace, setSelectPlace] = useState("");

  const addSchedule = () => {
    let newArr = [...dayPlaceSchedule];
    newArr[dayCurrentIndex].push(selectPlace);
    setDayPlaceSchedule(newArr);
    // // setPlaceSchedule(placeSchedule.concat(selectPlace));
  };

  return (
    <div className="w-full">
      <SearchBar
        mapData={mapData}
        mapApiData={mapApiData}
        addPlace={addPlace}
      />
      {/* <Category /> */}
      <SearchList
        places={places}
        activatedLocation={activatedLocation}
        setActivatedLocation={setActivatedLocation}
        setSelectPlace={setSelectPlace}
      />
      <button className="btn btn-sm w-full" onClick={addSchedule}>
        일정에 추가
      </button>
    </div>
  );
};

export default SearchMap;
