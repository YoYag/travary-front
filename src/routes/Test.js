import axios from "axios";
import React from "react";

const Test = () => {
  // const [userInfo, setUserInfo] = useState(null)

  const getUserList = async () => {
    const data = await axios({
      url: "http://localhost:8080/user/list",
      method: "GET",
    });
    console.log(data);
  };

  return (
    <div>
      <h1>테스트페이지입니다</h1>
      <button className="btn" onClick={getUserList}>
        클릭
      </button>
    </div>
  );
};

export default Test;
