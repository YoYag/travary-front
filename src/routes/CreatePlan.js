import React from "react";
import { useState } from "react";
import Map from "../components/map/Map.jsx";
import PlanBox from "../components/PlanBox.jsx";

const CreatePlan = () => {
  const [apiReady, setApiReady] = useState(false);
  const [mapData, setMapData] = useState("");
  const [mapApiData, setMapApiData] = useState("");
  const [places, setPlaces] = useState([]);

  const addPlace = (places) => {
    if (places) {
      setPlaces(places);
    }
  };

  const showData = () => {
    console.log("places : ", places);
  };

  // console.log("apiReady : ", apiReady);
  // console.log("mapData : ", mapData);
  // console.log("mapApiData : ", mapApiData.places);

  return (
    <div className="w-full flex">
      {apiReady ? (
        <PlanBox
          mapData={mapData}
          mapApiData={mapApiData}
          addPlace={addPlace}
        />
      ) : (
        ""
      )}
      <Map
        setApiReady={setApiReady}
        setMapData={setMapData}
        setMapApiData={setMapApiData}
        places={places}
      />
      <button onClick={showData}>클릭</button>
    </div>
  );
};

export default CreatePlan;
