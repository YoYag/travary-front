import React from "react";
import Category from "./Category";
import SearchBox from "./SearchBox";

const SearchMap = ({ mapData, mapApiData }) => {
  return (
    <div className="w-full">
      <SearchBox mapData={mapData} mapApiData={mapApiData} />
      <Category />
    </div>
  );
};

export default SearchMap;
