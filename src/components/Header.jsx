import React from "react";
import { Link } from "react-router-dom";
import search from "../assets/images/icons/search.png";

const Header = () => {
  return (
    <div className="w-full border-b">
      <div className="py-4 flex justify-between">
        <div>
          <p>나의 여행일기</p>
          <p className="text-4xl font-bold">Travary</p>
        </div>
        <div className="w-48 flex justify-between">
          <button className="btn btn-outline">로그인</button>
          <button className="btn btn-outline">회원가입</button>
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
        <div className="w-12 border flex justify-center items-center">
          <img className="w-8 h-8" src={search} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
