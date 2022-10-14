import React from "react";
import Category from "./Category";
import SearchBox from "./SearchBox";
import SearchList from "./SearchList";

const SearchMap = ({ mapData, mapApiData, addPlace, places }) => {
  return (
    <div className="w-full">
      <SearchBox
        mapData={mapData}
        mapApiData={mapApiData}
        addPlace={addPlace}
      />
      {/* <Category /> */}
      <SearchList places={places} />
    </div>
  );
};

export default SearchMap;
