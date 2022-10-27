import React from "react";
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
}) => {
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
      />
      <button className="btn btn-sm w-full">일정에 추가</button>
    </div>
  );
};

export default SearchMap;
