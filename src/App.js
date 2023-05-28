/** @format */

import { EditPage, Header, MyChart } from "./components";
import React, { useEffect } from "react";
import * as apis from "./apis";
import { AddQuestions, Home, List } from "./pages";
import { Routes, Route } from "react-router-dom";
import AddPage from "./components/addPage";
import Login from "./pages/Login";
function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>

      <div className="w-full h-[50px]">
        <Header />
      </div>
      <div className="w-full h-full px-[10%]">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/add" element={<AddPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
