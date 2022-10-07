import React from "react";

const SearchBox = ({ mapData, mapApiData }) => {
  // componentDidMount({mapData, mapApiData}) {
  //   this.searchBox = new mapApiData.places.SearchBox(this.input);
  // };

  return (
    <div>
      <input id="pac-input" type="text" placeholder="Search Box" />
    </div>
  );
};

export default SearchBox;
