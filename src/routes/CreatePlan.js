import React from "react";
import { useState } from "react";
import Map from "../components/map/Map.jsx";
import PlanBox from "../components/PlanBox.jsx";

const CreatePlan = () => {
  const [apiReady, setApiReady] = useState(false);
  const [mapData, setMapData] = useState("");
  const [mapApiData, setMapApiData] = useState("");

  console.log(apiReady);
  console.log(mapData);
  console.log(mapApiData.places);

  return (
    <div className="w-full flex">
      <PlanBox mapData={mapData} mapApiData={mapApiData} />
      <Map
        setMapData={setMapData}
        setMapApiData={setMapApiData}
        setApiReady={setApiReady}
      />
    </div>
  );
};

export default CreatePlan;
