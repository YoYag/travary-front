import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const SearchList = ({ places }) => {
  // const [activated, setActivated] = useState(Array(places.length).fill(false));
  const [currentIndex, setCurrentIndex] = useState("");
  const [selectPlace, setSelectPlace] = useState("");

  // function searchListCheck(event) {
  //   const newArr = Array(activated.length).fill(false);
  //   newArr[event.target.value] = true;
  //   setActivated(newArr);
  //   setSelectPlace(places);
  // }

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
      // onClick={searchListCheck}
      onClick={(e) => {
        setCurrentIndex(i);
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

  // useEffect(() => {
  //   setActivated(Array(places.length).fill(false));
  // }, [places]);

  return (
    <ul className="menu h-list-custom overflow-y-auto scrollbar">
      {places && showList}
      {/* <button onClick={showData}>클릭</button> */}
    </ul>
  );
};

export default SearchList;
