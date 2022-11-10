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
  setDayCurrentIndex,
  placeSchedule,
  setPlaceSchedule,
  dayPlaceSchedule,
  setDayPlaceSchedule,
}) => {
  const [selectPlace, setSelectPlace] = useState("");

  const addSchedule = () => {
    let newArr = [...dayPlaceSchedule[dayCurrentIndex]];
    newArr.push(selectPlace);
    dayPlaceSchedule[dayCurrentIndex] = newArr;
    console.log(dayPlaceSchedule[dayCurrentIndex]);
    // setPlaceSchedule(newArr);
    // // setPlaceSchedule(placeSchedule.concat(selectPlace));
    // console.log(dayCurrentIndex);
    // setDayPlaceSchedule(dayPlaceSchedule);
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
