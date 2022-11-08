import React, { useEffect } from "react";
import { useState } from "react";

const PlanRoute = ({ placeSchedule }) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [count, setCount] = useState([]);
  const [currentIndex, setCurrentIndex] = useState("");

  // 날짜 계산
  const startDate = new Date(start.split("-"));
  const endDate = new Date(end.split("-"));
  const dif = endDate - startDate;
  const timeSchedule = dif / 24 / 60 / 60 / 1000; // 시 * 분 * 초 * 밀리세컨

  const countDate = () => {
    let newArr = [];
    for (let i = 1; i <= timeSchedule + 1; i++) {
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

  const planPage = count.map((number, i) => (
    <li
      key={i}
      className={
        i == currentIndex ? "absolute bg-base-100 z-10" : "absolute bg-base-100"
      }
    >
      {number}일차 페이지
      <ul>
        {placeSchedule.map((place, i) => (
          <li key={i}>{place}</li>
        ))}
      </ul>
    </li>
  ));

  const showData = () => {
    console.log("placeSchedule", placeSchedule);
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
      <div className="flex h-list-custom">
        <ul className="menu bg-base-100 w-6">{countList}</ul>
        <ul className="w-full">{planPage}</ul>
      </div>
      <button className="btn btn-sm" onClick={showData}>
        클릭
      </button>
    </div>
  );
};

export default PlanRoute;
