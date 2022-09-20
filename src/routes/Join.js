import React from "react";

const Join = () => {
  return (
    <div className="text-center my-4 w-1/2">
      <h1 className="text-2xl font-bold">회원가입 페이지</h1>
      <form action="">
        <label className="input-group input-group-sm my-4">
          <span className="w-1/3">이름</span>
          <input
            type="text"
            name="username"
            placeholder="이름을 입력해주세요"
            className="input input-bordered input-sm w-full"
          />
        </label>
        <label className="input-group input-group-sm my-4">
          <span className="w-1/3">아이디</span>
          <input
            type="text"
            name="identifier"
            placeholder="ID를 입력해주세요"
            className="input input-bordered input-sm w-full"
          />
        </label>
        <label className="input-group input-group-sm my-4">
          <span className="w-1/3">비밀번호</span>
          <input
            type="password"
            name="password"
            placeholder="Password를 입력해주세요"
            className="input input-bordered input-sm w-full"
          />
        </label>
        <label className="input-group input-group-sm my-4">
          <span className="w-1/3">비밀번호 확인</span>
          <input
            type="password"
            name="confirm_password"
            placeholder="Password를 입력해주세요"
            className="input input-bordered input-sm w-full"
          />
        </label>
        <label className="input-group input-group-sm my-4">
          <span className="w-1/3">이메일</span>
          <input
            type="text"
            name="email"
            placeholder="email를 입력해주세요"
            className="input input-bordered input-sm w-full"
          />
        </label>
        <div className="form-control">
          <button className="btn my-2">회원가입</button>
        </div>
      </form>
    </div>
  );
};

export default Join;
