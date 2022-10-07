import React from "react";
import Category from "./Category";
import SearchBar from "./SearchBar";

const SearchMap = ({ mapData, mapApiData }) => {
  return (
    <div className="w-full">
      <SearchBar mapData={mapData} mapApiData={mapApiData} />
      <Category />
    </div>
  );
};

export default SearchMap;
