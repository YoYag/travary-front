import React from "react";

const Login = () => {
  return (
    <div className="text-center my-4">
      <h1 className="text-2xl font-bold">로그인 페이지</h1>
      <form action="">
        <label className="input-group input-group-sm my-4">
          <span className="w-16">ID</span>
          <input
            type="text"
            name="username"
            placeholder="ID를 입력해주세요"
            className="input input-bordered input-sm w-full"
          />
        </label>
        <label className="input-group input-group-sm my-4">
          <span className="w-16">PW</span>
          <input
            type="password"
            name="password"
            placeholder="Password를 입력해주세요"
            className="input input-bordered input-sm w-full"
          />
        </label>
        <div className="form-control">
          <button className="btn my-2">로그인</button>
          <button className="btn my-2">회원가입</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
