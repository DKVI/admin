/** @format */

import React from "react";
import { Route, Routes, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-full bg-black text-white py-[10px] px-[80px] flex justify-between">
      <Link to={"/home"}>Home</Link>
      <div className="flex justify-between gap-5">
        <Link to={"/list"}>Questions list</Link>
        <Link to={"/add"}>Add Questions</Link>
      </div>
    </div>
  );
};

export default Header;
