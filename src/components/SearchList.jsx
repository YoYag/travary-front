import React from "react";
import { useState } from "react";

const SearchList = ({ places }) => {
  const [currentIndex, setCurrentIndex] = useState("");
  const [selectPlace, setSelectPlace] = useState("");

  // const showData = () => {
  //   console.log("places : ", places[0].place_id);
  //   console.log("activated : ", activated);
  //   console.log("currentIndex : ", currentIndex);
  // };

  const showList = places.map((place, i) => (
    <li
      className={currentIndex == i ? "bordered" : ""}
      key={place.place_id}
      value={i}
      onClick={(e) => {
        setCurrentIndex(i);
        setSelectPlace(place.name);
      }}
    >
      <button
        value={i}
        className="block text-left h-full active:bg-base-content border-black"
      >
        <p>{place.name}</p>
        <p className="text-xs mt-1">주소 : {place.formatted_address}</p>
        <p className="text-xs mt-1">⭐ {place.rating}</p>
      </button>
    </li>
  ));

  return (
    <ul className="menu h-list-custom overflow-y-auto scrollbar">
      {places && showList}
      {/* <button onClick={showData}>클릭</button> */}
    </ul>
  );
};

export default SearchList;
