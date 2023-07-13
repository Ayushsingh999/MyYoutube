import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app?.isMenuOpen);

  //Early return pattern
  if (!isMenuOpen) return null;

  return (
    //w-48  is stand for width then   equal to  12rem
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Music</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold"> Subscripition </h1>
      <ul>
        <li>Home</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5"> Watch later </h1>
      <ul>
        <li>Home</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
