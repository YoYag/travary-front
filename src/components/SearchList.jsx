import React from "react";
import { useState } from "react";

const SearchList = ({ places, activatedLocation, setActivatedLocation }) => {
  const [currentIndex, setCurrentIndex] = useState("");
  const [selectPlace, setSelectPlace] = useState("");

  // const showData = () => {
  //   console.log("places : ", places[0].place_id);
  //   console.log("activated : ", activated);
  //   console.log("currentIndex : ", currentIndex);
  // };

  const showList = places.map((place, i) => (
    <li
      className={activatedLocation == place.place_id ? "bordered" : ""}
      key={place.place_id}
      onClick={() => {
        setActivatedLocation(place.place_id);
        setSelectPlace(place.name);
      }}
    >
      <button className="block text-left h-full active:bg-base-content border-black">
        <p className="pointer-events-none">{place.name}</p>
        <p className="text-xs mt-1 pointer-events-none">
          주소 : {place.formatted_address}
        </p>
        <p className="text-xs mt-1 pointer-events-none">⭐ {place.rating}</p>
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
