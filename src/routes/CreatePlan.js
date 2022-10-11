import React from "react";
import { useState } from "react";
import Map from "../components/map/Map.jsx";
import PlanBox from "../components/PlanBox.jsx";

const CreatePlan = () => {
  const [apiReady, setApiReady] = useState(false);
  const [mapData, setMapData] = useState("");
  const [mapApiData, setMapApiData] = useState("");
  // const [place, setPlace] = useState([]);

  console.log("apiReady : ", apiReady);
  console.log("mapData : ", mapData);
  console.log("mapApiData : ", mapApiData.places);

  return (
    <div className="w-full flex">
      {apiReady ? <PlanBox mapData={mapData} mapApiData={mapApiData} /> : ""}
      <Map
        setApiReady={setApiReady}
        setMapData={setMapData}
        setMapApiData={setMapApiData}
        // setPlace={setPlace}
      />
    </div>
  );
};

export default CreatePlan;
