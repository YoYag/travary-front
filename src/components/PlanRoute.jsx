import React, { useEffect } from "react";
import { useState } from "react";

const PlanRoute = ({
  count,
  setCount,
  dayCurrentIndex,
  setDayCurrentIndex,
  dayPlaceSchedule,
  setDayPlaceSchedule,
}) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  // 날짜 계산
  const startDate = new Date(start.split("-"));
  const endDate = new Date(end.split("-"));
  const dif = endDate - startDate;
  const timeSchedule = dif / 24 / 60 / 60 / 1000; // 시 * 분 * 초 * 밀리세컨

  const countDate = () => {
    let newArr = [];
    let newDayArr = [];
    for (let i = 0; i <= timeSchedule; i++) {
      newArr.push(i);
      newDayArr.push([]);
    }
    setCount(newArr);
    setDayPlaceSchedule(newDayArr);
  };

  useEffect(() => {
    countDate();
  }, [start, end]);

  const countList = count.map((day, i) => (
    <li
      key={i}
      className={i == dayCurrentIndex ? "bordered" : ""}
      onClick={() => {
        setDayCurrentIndex(i);
      }}
    >
      <button className="px-px active:bg-base-content border-black">
        {day + 1}일차
      </button>
    </li>
  ));

  const planPage = count.map((day, i) => (
    <li
      key={i}
      className={
        i == dayCurrentIndex
          ? "absolute w-191px h-list-custom bg-base-100 z-10"
          : "absolute w-191px h-list-custom bg-base-100"
      }
    >
      <ul className="steps steps-vertical">
        {dayPlaceSchedule[day].map((place, i) => (
          <li key={i} className="step step-neutral list">
            {place}
          </li>
        ))}
      </ul>
    </li>
  ));

  const showData = () => {
    console.log("test");
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
      <div className="flex w-full h-list-custom">
        <ul className="menu bg-base-100 w-6">{countList}</ul>
        <ul className="w-full">{planPage}</ul>
      </div>
      <button className="btn btn-outline btn-sm w-full" onClick={showData}>
        작업완료
      </button>
    </div>
  );
};

export default PlanRoute;
