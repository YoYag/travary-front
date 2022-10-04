import React from "react";
import Map from "../components/map/Map.jsx";
import { useState } from "react";
import PlanBox from "../components/PlanBox.jsx";

const CreatePlan = () => {
  const [apiReady, setApiReady] = useState(false);
  const [map, setMap] = useState(null);
  const [googlemaps, setGooglemaps] = useState(null);

  const handleApiLoaded = (map, maps) => {
    // map과 maps 개체가 로드됐다면, 각각의 state값에 넣어준다.
    if (map && maps) {
      setApiReady(true);
      setMap(map);
      setGooglemaps(maps);
    }
  };

  return (
    <div className="w-full flex">
      <div className="w-1/5 mr-2">
        <PlanBox />
      </div>
      <Map />
    </div>
  );
};

export default CreatePlan;
