/** @format */

import { useRef, useState } from "react";
import * as apis from "../apis";
import { motion } from "framer-motion";
import React from "react";

const AddPage = () => {
  const [question, setQuestion] = useState("");
  const [answerA, setAnswerA] = useState("");
  const [answerB, setAnswerB] = useState("");
  const [answerC, setAnswerC] = useState("");
  const [answerD, setAnswerD] = useState("");
  const [correct, setCorrect] = useState("");
  const inputRefA = useRef();
  const inputRefB = useRef();
  const inputRefC = useRef();
  const inputRefD = useRef();
  const inputRefQuestion = useRef();
  const inputRefAnswer = useRef();
  const handleClick = () => {
    inputRefQuestion.current.value = "";
    inputRefA.current.value = "";
    inputRefB.current.value = "";
    inputRefC.current.value = "";
    inputRefD.current.value = "";
    inputRefAnswer.current.value = "";
    setQuestion("");
    setAnswerA("");
    setAnswerB("");
    setAnswerC("");
    setAnswerD("");
    setCorrect("");
    inputRefQuestion.current.focus();
    if (question === "") {
      alert("Vui lòng nhập câu hỏi");
      return;
    }
    if (answerA === "") {
      alert("Vui lòng nhập câu trả lời A");
      return;
    }
    if (answerB === "") {
      alert("Vui lòng nhập câu trả lời B");
      return;
    }
    if (answerC === "") {
      alert("Vui lòng nhập câu trả lời C");
      return;
    }
    if (answerD === "") {
      alert("Vui lòng nhập câu trả lời D");
      return;
    }
    if (correct === "") {
      alert("Vui lòng nhập đáp án đúng");
      return;
    }
    if (
      correct !== "A" &&
      correct !== "B" &&
      correct !== "C" &&
      correct !== "D"
    ) {
      alert("Đáp án đúng phải là A, B, C hoặc D");
      return;
    }
    const formData = {
      name: question,
      answers: [
        {
          id: "A",
          content: answerA,
        },
        {
          id: "B",
          content: answerB,
        },
        {
          id: "C",
          content: answerC,
        },
        {
          id: "D",
          content: answerD,
        },
      ],
      correct: correct,
    };
    console.log(JSON.stringify(formData));
    const addQuestion = async (formData) => {
      try {
        const response = await apis.addQuestion(JSON.stringify(formData));
        console.log(response);
      } catch {
        console.log("Error");
      }
    };
    addQuestion(formData);
    alert("Thêm câu hỏi thành công!");
  };

  {
    if (sessionStorage.getItem("admin") !== null) {
      return (
        <div className="w-full h-full flex">
          <motion.div
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.5 },
            }}
            initial={{ opacity: 0, scale: 0.6, y: 200 }}
            className="m-auto flex flex-col justify-between gap-[20px] w-[500px]"
          >
            <input
              className="border p-[10px]"
              placeholder="Nhập câu hỏi"
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
              value={question}
              ref={inputRefQuestion}
            />
            <input
              className="border p-[10px]"
              onChange={(e) => {
                setAnswerA(e.target.value);
              }}
              placeholder="Nhập câu trả lời A"
              value={answerA}
              ref={inputRefA}
            />
            <input
              className="border p-[10px]"
              onChange={(e) => {
                setAnswerB(e.target.value);
              }}
              placeholder="Nhập câu trả lời B"
              value={answerB}
              ref={inputRefB}
            />
            <input
              className="border p-[10px]"
              onChange={(e) => {
                setAnswerC(e.target.value);
              }}
              placeholder="Nhập câu trả lời C"
              value={answerC}
              ref={inputRefC}
            />
            <input
              className="border p-[10px]"
              onChange={(e) => {
                setAnswerD(e.target.value);
              }}
              placeholder="Nhập câu trả lời D"
              value={answerD}
              ref={inputRefD}
            />
            <input
              className="border p-[10px]"
              onChange={(e) => {
                setCorrect(e.target.value);
              }}
              placeholder="Nhập đáp án đúng"
              value={correct}
              ref={inputRefAnswer}
            />
            <motion.button
              className="bg-black text-white p-[10px]"
              onClick={handleClick}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              Submit
            </motion.button>
          </motion.div>
        </div>
      );
    } else {
      window.location.href = "/";
      return null;
    }
  }
};

export default AddPage;
