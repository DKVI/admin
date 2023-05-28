/** @format */

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import * as apis from "../apis";
import { GET_ADMIN } from "../redux/actions";
const Login = () => {
  const admins = useSelector((state) => state.admins);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    dispatch(GET_ADMIN);
  }, []);
  useEffect(() => {
    console.log(admins);
  }, [admins]);
  const handleClick = () => {
    if (admins) {
      if (username === "") {
        alert("Vui lòng nhập tên tài khoản!");
        return;
      }
      if (password === "") {
        alert("Vui lòng nhập mật khẩu!");
        return;
      }
      if (username !== admins.users) {
        alert("Tên tài khoản không đúng!");
        return;
      }
      if (password !== admins.password) {
        alert("Mật khẩu không đúng!");
        return;
      }
      sessionStorage.setItem("admin", JSON.stringify(admins));
      alert("Đăng nhập thành công!");
      window.location.href = "/home";
    }
  };
  return (
    <div className="w-screen h-screen bg-black flex">
      <div
        className="m-auto w-[400px] 
       bg-white rounded-xl p-[20px] flex flex-col gap-4"
      >
        <h1 className="text-center text-[32px]">LOGIN</h1>
        <motion.input
          whileFocus={{ borderRadius: "20px" }}
          className="w-full border-[2px] border-black px-[20px] py-[10px]"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <motion.input
          whileFocus={{ borderRadius: "20px" }}
          className="w-full border-[2px] border-black px-[20px] py-[10px]"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <motion.div
          className="py-[10px] px-[20px] bg-black text-white flex"
          whileHover={{
            borderRadius: "20px",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          <p className="m-auto text-[20px]">Sign in</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
