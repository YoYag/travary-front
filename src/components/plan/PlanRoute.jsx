import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { URL } from "../../util/url";

const PlanRoute = ({
  countDate,
  setCountDate,
  dayCurrentIndex,
  setDayCurrentIndex,
  dayPlaceSchedule,
  setDayPlaceSchedule,
  planInfo,
  setPlanInfo,
}) => {
  const [startPlan, setStartPlan] = useState("");
  const [endPlan, setEndPlan] = useState("");
  const [error, setError] = useState(null);

  const postData = async () => {
    try {
      const data = await axios({
        url: `${URL}/api/plan/create`,
        method: "POST",
        data: {
          planStartDate: planInfo.planStartDate,
          planEndDate: planInfo.planEndDate,
          countDate: planInfo.countDate,
          dayPlaceSchedule: planInfo.dayPlaceSchedule,
        },
      });
    } catch (e) {
      setError(e);
    }
  };

  const showData = () => {
    console.log("planInfo : ", planInfo);
  };

  // 날짜 계산
  const startDate = new Date(startPlan.split("-"));
  const endDate = new Date(endPlan.split("-"));
  const dif = endDate - startDate;
  const timeSchedule = dif / 24 / 60 / 60 / 1000; // 시 * 분 * 초 * 밀리세컨

  const countDatePlan = () => {
    let newArr = [];
    let newDayArr = [];
    for (let i = 0; i <= timeSchedule; i++) {
      newArr.push(i);
      newDayArr.push([]);
    }
    setCountDate(newArr);
    setDayPlaceSchedule(newDayArr);
    setPlanInfo({
      ...planInfo,
      countDate: JSON.stringify(newArr),
    });
  };

  useEffect(() => {
    countDatePlan();
  }, [startPlan, endPlan]);

  const countList = countDate.map((day, i) => (
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

  const planPage = countDate.map((day, i) => (
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

  return (
    <div className="w-full border-r">
      <input
        type="date"
        name="start"
        onChange={(e) => {
          setStartPlan(e.target.value);
          setPlanInfo({
            ...planInfo,
            planStartDate: e.target.value,
          });
          countDatePlan();
        }}
        className="w-1/2 h-8"
      />
      <input
        type="date"
        name="end"
        onChange={(e) => {
          setEndPlan(e.target.value);
          setPlanInfo({
            ...planInfo,
            planEndDate: e.target.value,
          });
          countDatePlan();
        }}
        className="w-1/2 h-8"
      />
      <div className="flex w-full h-list-custom">
        <ul className="menu bg-base-100 w-6">{countList}</ul>
        <ul className="w-full">{planPage}</ul>
      </div>
      <button className="btn btn-outline btn-sm w-full" onClick={postData}>
        작업완료
      </button>
    </div>
  );
};

export default PlanRoute;
