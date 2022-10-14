import React from "react";
import { useState } from "react";

const Test = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const datas = [
    {
      id: 1,
      text: "1번",
    },
    {
      id: 2,
      text: "2번",
    },
    {
      id: 3,
      text: "3번",
    },
    {
      id: 4,
      text: "4번",
    },
    {
      id: 5,
      text: "5번",
    },
  ];

  return (
    <div>
      <h1>테스트페이지입니다</h1>
      <ul>
        {datas.map((data, index) => (
          <li
            key={index}
            value={index}
            // style={
            //   currentIndex === index ? { borderLeft: "solid 2px black" } : {}
            // }
            onClick={(e) => {
              // setCurrentIndex(e.target.value);
              console.log(e.target.value);
            }}
          >
            {data.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
