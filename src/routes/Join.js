import React from "react";

const Join = () => {
  return (
    <div>
      <form className="text-center my-20" action="">
        <label className="input-group input-group-sm my-4">
          <span className="w-16">ID</span>
          <input
            type="text"
            name="username"
            placeholder="ID를 입력해주세요"
            className="input input-bordered input-sm"
          />
        </label>
        <label className="input-group input-group-sm my-4">
          <span className="w-16">PW</span>
          <input
            type="password"
            name="password"
            placeholder="Password를 입력해주세요"
            className="input input-bordered input-sm"
          />
        </label>
        <button className="btn mx-4">로그인</button>
        <button className="btn mx-4">회원가입</button>
      </form>
    </div>
  );
};

export default Join;
