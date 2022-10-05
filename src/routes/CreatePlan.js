import React from "react";
import { useState } from "react";
import Map from "../components/map/Map.jsx";
import PlanBox from "../components/PlanBox.jsx";

const CreatePlan = () => {
  const [mapData, setMapData] = useState(null);
  const [mapApiData, setMapApiData] = useState(null);

  console.log(mapData);
  console.log(mapApiData);

  return (
    <div className="w-full flex">
      <div className="w-1/5 mr-2">
        <PlanBox map={mapData} mapApi={mapApiData} />
      </div>
      <Map setMapData={setMapData} setMapApiData={setMapApiData} />
    </div>
  );
};

export default CreatePlan;
