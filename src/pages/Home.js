/** @format */

import React from "react";
import { useEffect } from "react";
import * as apis from "../apis";
import { GET_USERS } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
const Home = () => {
  const first = "bg-[#FFD700]";
  const second = "bg-[#c0c0c0]";
  const third = "bg-[#B87333]";
  const sort = (users) => {
    for (let i = 0; i < users.length - 1; i++) {
      for (let j = i + 1; j < users.length; j++) {
        if (users[i].score < users[j].score) {
          let temp = users[i];
          users[i] = users[j];
          users[j] = temp;
        }
      }
    }
    return [...users];
  };

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(GET_USERS);
    const callAPI = setInterval(() => {
      dispatch(GET_USERS);
    }, 5000);
    return () => {
      clearInterval(callAPI);
    };
  }, []);
  useEffect(() => {
    sort(users);
  }, [users]);

  useEffect(() => {
    const ranks = document.querySelectorAll(".rank");
    console.log(ranks);
    ranks[0]?.classList.add(first);
    ranks[0]?.classList.add("text-white");
    ranks[1]?.classList.add(second);
    ranks[1]?.classList.add("text-white");
    ranks[2]?.classList.add(third);
    ranks[2]?.classList.add("text-white");
  }, [users]);
  {
    if (sessionStorage.getItem("admin") !== null) {
      return (
        <div className="w-full h-full">
          <div className="py-[80px] w-full h-full flex flex-col gap-8">
            <motion.div
              animate={{ opacity: 1, transition: { duration: 0.5 } }}
              initial={{ opacity: 0 }}
              className="w-full text-center text-[50px]"
            >
              DASHBOARD
            </motion.div>
            <motion.div
              animate={{
                scale: [0, 1],
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              initial={{ opacity: 0 }}
              className="w-full overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            >
              <div className="gap-4 w-full flex flex-col px-[80px]">
                {sort(users).map((user, index) => {
                  return (
                    <div
                      key={index}
                      className="shadow-2xl flex justify-between border-[1px] border-gray-400 mt-[4px]"
                    >
                      <div className="rank w-[20%] text-center py-[10px]">
                        {index === 0
                          ? "1st"
                          : index === 1
                          ? "2nd"
                          : index === 2
                          ? "3rd"
                          : index + 1}
                      </div>
                      <div className="name py-[10px] flex-auto px-[20px]">
                        {user.name}
                      </div>
                      <div className="scores w-[10%] py-[10px]">
                        {user.score} {"/20"}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      );
    } else {
      window.location.href = "/";
      return null;
    }
  }
};

export default Home;
