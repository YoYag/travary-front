import React from "react";
import Category from "./Category";
import SearchBox from "./SearchBox";

const SearchMap = ({ mapData, mapApiData, addPlace }) => {
  return (
    <div className="w-full">
      <SearchBox
        mapData={mapData}
        mapApiData={mapApiData}
        addPlace={addPlace}
      />
      <Category />
    </div>
  );
};

export default SearchMap;
