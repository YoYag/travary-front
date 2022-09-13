import React from "react";
import { Link } from "react-router-dom";
import search from "../assets/images/icons/search.png";

const Header = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between ...">
        <div>
          <p>나의 여행일기</p>
          <p>Travary</p>
        </div>
        <div>
          <button className="btn btn-outline">로그인</button>
          <button className="btn btn-outline">회원가입</button>
        </div>
      </div>
      <nav className="flex justify-center ...">
        <ul className="menu menu-horizontal bg-base-100">
          <li>
            <a>
              <Link to={`/`}>메인</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to={`/plan`}>계획</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to={`/meet`}>만남</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to={`/diary`}>일기</Link>
            </a>
          </li>
        </ul>
        <img className="w-8 justify-self-end" src={search} alt="" />
      </nav>
    </div>
  );
};

export default Header;
