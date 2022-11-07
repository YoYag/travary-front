import React, { useEffect } from "react";
import { useState } from "react";

const PlanRoute = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [count, setCount] = useState([]);
  const [currentIndex, setCurrentIndex] = useState("");

  // 날짜 계산
  const startDate = new Date(start.split("-"));
  const endDate = new Date(end.split("-"));
  const dif = endDate - startDate;
  const schedule = dif / 24 / 60 / 60 / 1000; // 시 * 분 * 초 * 밀리세컨

  const countDate = () => {
    let newArr = [];
    for (let i = 1; i <= schedule + 1; i++) {
      newArr.push(i);
    }
    setCount(newArr);
  };

  useEffect(() => {
    countDate();
  }, [start, end]);

  const countList = count.map((number, i) => (
    <li
      key={i}
      className={i == currentIndex ? "bordered" : ""}
      onClick={() => {
        setCurrentIndex(i);
      }}
    >
      <button className="px-px active:bg-base-content border-black">
        {number}일차
      </button>
    </li>
  ));

  const showData = () => {
    let newArr = [];
    for (let i = 1; i <= schedule; i++) {
      newArr.push(i);
    }
    setCount(newArr);
    console.log("count", count);
  };

  return (
    <div className="w-full border-r">
      <input
        type="date"
        name="start"
        onChange={(e) => {
          setStart(e.target.value);
          countDate();
        }}
        className="w-1/2 h-8"
      />
      <input
        type="date"
        name="end"
        onChange={(e) => {
          setEnd(e.target.value);
          countDate();
        }}
        className="w-1/2 h-8"
      />
      <ul className="menu bg-base-100 w-6">{countList}</ul>
      <div></div>
      <button className="btn btn-sm" onClick={showData}>
        클릭
      </button>
    </div>
  );
};

export default PlanRoute;
