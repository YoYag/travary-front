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
  //   console.log("places : ", places.length);
  //   console.log("activated : ", activated);
  // };

  const showList = places.map((place, i) => (
    <li
      // className={activated[i] ? "bordered w-16 h-12" : "w-12 h-12"}
      className={currentIndex === i ? "bordered w-16 h-12" : "w-12 h-12"}
      key={i}
      value={i}
      // onClick={searchListCheck}
      onClick={(e) => {
        setCurrentIndex(e.target.value);
        // console.log(e.target.value);
      }}
    >
      {/* <button className="block text-left h-full active:bg-base-content border-black">
        <p>{place.name}</p>
        <p className="text-xs mt-1">주소 : {place.formatted_address}</p>
        <p className="text-xs mt-1">⭐ {place.rating}</p>
        <p>{i}</p>
      </button> */}
    </li>
  ));

  // useEffect(() => {
  //   setActivated(Array(places.length).fill(false));
  // }, [places]);

  return (
    <ul className="menu mt-4">
      {places && showList}
      {/* <button onClick={showData}>클릭</button> */}
    </ul>
  );
};

export default SearchList;
