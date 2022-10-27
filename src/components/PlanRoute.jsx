import React from "react";
import { useState } from "react";

const PlanRoute = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const showData = (e) => {
    console.log(e);
  };

  return (
    <div className="w-full border-r">
      <input type="date" name="start" className="w-1/2 h-8" />
      <input type="date" name="end" className="w-1/2 h-8" />
      <button className="btn btn-sm" onClick={showData}>
        클릭
      </button>
    </div>
  );
};

export default PlanRoute;
