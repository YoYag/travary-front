import React from "react";

const Marker = ({ activatedLocation }) => {
  // const icon = props.activatedLocation
  //   ? { name: "fas fa-location-dot text-xl" }
  //   : { name: "fas fa-circle" };

  return (
    <div className="cursor-pointer" onClick={console.log(activatedLocation)}>
      {activatedLocation ? (
        <i className="text-2xl fas fa-location-dot" />
      ) : (
        <i className="fas fa-circle" />
      )}
    </div>
  );
};

export default Marker;
