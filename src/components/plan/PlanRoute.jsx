import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { URL } from "../../util/url";
import Modal from "../Modal";

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
  const [error, setError] = useState(null);

  const postData = async () => {
    try {
      const data = await axios({
        url: `${URL}/api/plan/create`,
        method: "POST",
        data: {
          startPlan: planInfo.startPlan,
          endPlan: planInfo.endPlan,
          countDate: planInfo.countDate,
          dayPlaceSchedule: planInfo.dayPlaceSchedule,
        },
      });
    } catch (e) {
      setError(e);
    }
  };

  // 날짜 계산
  const startDate = new Date(planInfo.startPlan.split("-"));
  const endDate = new Date(planInfo.endPlan.split("-"));
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
  }, [planInfo.startPlan, planInfo.endPlan]);

  const countList = countDate.map((day, i) => (
    <li
      key={i}
      className={i == dayCurrentIndex ? "bordered" : "p-0.5"}
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
          ? "absolute w-191px h-list-custom bg-base-100 z-10 overflow-y-auto scrollbar"
          : "absolute w-191px h-list-custom bg-base-100 overflow-y-auto scrollbar"
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
          // setPlanInfo({
          //   ...planInfo,
          //   startPlan: e.target.value,
          // });
          planInfo.startPlan = e.target.value;
          countDatePlan();
        }}
        className="w-1/2 h-8"
      />
      <input
        type="date"
        name="end"
        onChange={(e) => {
          // setPlanInfo({
          //   ...planInfo,
          //   endPlan: e.target.value,
          // });
          planInfo.endPlan = e.target.value;
          countDatePlan();
        }}
        className="w-1/2 h-8"
      />
      <div className="flex w-full h-list-custom">
        <ul className="menu bg-base-100 w-8 overflow-y-auto scrollbar">
          {countList}
        </ul>
        <ul className="w-full">{planPage}</ul>
      </div>
      <label htmlFor="my-modal" className="btn btn-outline btn-sm w-full">
        작업완료
      </label>
      <Modal
        modalTitle="여행 일정을 저장하시겠습니까?"
        modalContent="작성하신 여행일정은 상세페이지에서 수정 및 삭제 가능합니다."
        postData={postData}
      />
    </div>
  );
};

export default PlanRoute;
