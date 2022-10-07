import React from "react";
import Category from "./Category";
import SearchBar from "./SearchBar";
import SearchBox from "./SearchBox";

const SearchMap = ({ mapData, mapApiData }) => {
  return (
    <div className="w-full">
      {/* <SearchBox mapData={mapData} mapApiData={mapApiData} /> */}
      <SearchBar mapData={mapData} mapApiData={mapApiData} />
      <Category />
    </div>
  );
};

export default SearchMap;
