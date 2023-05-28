/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_QUESTIONS } from "../redux/actions";
import { PopUp } from "../components";
import { motion } from "framer-motion";
const List = () => {
  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [click, setClick] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({});
  useEffect(() => {
    dispatch(GET_QUESTIONS);
  }, []);
  
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
              QUESTIONS LIST
            </motion.div>
            <div className="overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
              <motion.div
                animate={{
                  scale: [0, 1],
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                initial={{ opacity: 0 }}
                className="gap-4 w-full flex flex-col px-[80px]"
              >
                {questions.map((item, index) => {
                  return (
                    <div
                      onClick={() => {
                        setClick(!click);
                        console.log(show);
                        setCurrentQuestion(item);
                      }}
                      key={index}
                      className=" mt-[4px] px-[20px] cursor-pointer hover:scale-[1.1] transition-[all_0.5s] relative shadow-2xl flex justify-between border-[1px] border-gray-400 h-[50px] overflow-hidden rounded-md"
                    >
                      <p className="my-auto">{item.name}</p>
                      <div className="absolute h-full bg-white opacity-[0.5] backdrop-blur-sm w-[50px] right-0 flex"></div>
                    </div>
                  );
                })}
              </motion.div>
              {click ? (
                <PopUp
                  show={click}
                  question={currentQuestion}
                  method={setClick}
                />
              ) : null}
            </div>
          </div>
        </div>
      );
    } else {
      window.location.href = "/";
      return null;
    }
  }
};

export default List;
