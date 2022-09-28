import React from "react";
import { Link, useNavigate } from "react-router-dom";
import search from "../assets/images/icons/search.png";

const Header = () => {
  const navigate = useNavigate();

  const showMain = () => {
    navigate(`/`);
  };

  return (
    <div className="w-full border-b">
      <div className="py-4 flex border-b justify-between">
        <div className="cursor-pointer" onClick={showMain}>
          <p>나의 여행일기</p>
          <p className="text-4xl font-bold">Travary</p>
        </div>
        <div className="w-48 flex justify-between items-center">
          <Link to={`/sign_in`}>
            <button className="btn btn-outline">로그인</button>
          </Link>
          <Link to={`/sign_up`}>
            <button className="btn btn-outline">회원가입</button>
          </Link>
        </div>
      </div>
      <div className="flex">
        <nav className="flex w-full justify-center">
          <ul className="menu menu-horizontal bg-base-100">
            <li>
              <Link to={`/`}>메인</Link>
            </li>
            <li>
              <Link to={`/plan`}>계획</Link>
            </li>
            <li>
              <Link to={`/meet`}>만남</Link>
            </li>
            <li>
              <Link to={`/diary`}>일기</Link>
            </li>
          </ul>
        </nav>
        <div className="w-12 border flex justify-center items-center cursor-pointer">
          <img className="w-6 h-6" src={search} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
