/** @format */

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import * as apis from "../apis";
import { GET_QUESTIONS } from "../redux/actions";
import { useDispatch } from "react-redux";
import DeleteModal from "../components/deleteModal";
const PopUp = ({ show, question, method }) => {
  const name = question.name;
  const dispatch = useDispatch();
  const [questions, setQuestion] = useState(question.name);
  const [answerA, setAnswerA] = useState(question.answers[0].content);
  const [answerB, setAnswerB] = useState(question.answers[1].content);
  const [answerC, setAnswerC] = useState(question.answers[2].content);
  const [answerD, setAnswerD] = useState(question.answers[3].content);
  const [correct, setCorrect] = useState(question.correct);
  const [deleteModal, setDeleteModal] = useState(false);
  const [mode, setMode] = useState("read");
  const handleDelete = () => {
    setDeleteModal(!deleteModal);
  };
  const handleClick = () => {
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
      console.log(correct);
      alert("Đáp án đúng phải là A, B, C hoặc D");
      return;
    }
    console.log(question._id);
    const formData = {
      name: questions,
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
    console.log(formData);
    const postDetailQuestion = () =>
      new Promise(async (resolve, reject) => {
        const response = await apis.postDetailQuestion(question._id, formData);
        console.log(response.status);
        if (response.status === 201) {
          console.log(JSON.stringify(response.data));
          resolve(response);
        }
        reject(response);
      });
    postDetailQuestion();
    dispatch(GET_QUESTIONS);
    alert("Cập nhật thông tin thành công!");
    method(!show);
  };
  const activeMode =
    "px-[4px] read cursor-pointer flex bg-black text-white h-full";
  const normal = "px-[4px] read cursor-pointer flex h-full";
  const showItem =
    "fixed w-screen h-screen bg-[rgba(0,0,0,0.3)] left-0 right-0 top-0 bottom-0 flex";
  const hideItem =
    "fixed w-screen h-screen bg-[rgba(0,0,0,0.3)] left-0 right-0 top-0 bottom-0 hidden";
  return (
    <div className={show ? showItem : hideItem}>
      <div className="w-[50%] bg-white m-auto p-[20px] rounded-md shadow-2xl flex flex-col gap-4">
        {deleteModal ? (
          <DeleteModal
            method1={setDeleteModal}
            method2={method}
            id={question._id}
          />
        ) : null}
        <div className="w-full flex justify-between">
          <div className="mode flex gap-1 border-black border-[4px] items-center rounded-lg ">
            <div
              className={mode === "read" ? activeMode : normal}
              onClick={() => {
                setMode("read");
              }}
            >
              <p className="m-auto">Read</p>
            </div>
            <div
              className={mode === "edit" ? activeMode : normal}
              onClick={() => {
                setMode("edit");
              }}
            >
              <p className="m-auto">Edit</p>
            </div>
          </div>
          <div className="close">
            <motion.div
              whileHover={{ backgroundColor: "red" }}
              className="w-[50px] h-[50px] bg-black flex"
              onClick={() => {
                method(!show);
              }}
            >
              <div className="m-auto text-white text-[24px] cursor-pointer inline-block">
                x
              </div>
            </motion.div>
          </div>
        </div>
        {mode === "edit" ? (
          <input
            className="flex justify-between w-full p-[10px] border-[2px] border-gray-400 rounded-md"
            value={questions}
            onChange={(e) => setQuestion(e.target.value)}
          ></input>
        ) : (
          <div className="flex justify-between w-full p-[10px]">
            {question.name}
          </div>
        )}

        <div className="flex gap-1">
          <div className="flex w-[10%]">
            <p className="m-auto text-[24px]">A.</p>
          </div>
          {mode === "edit" ? (
            <input
              className="flex justify-between w-full p-[10px] border-[2px] border-gray-400 rounded-md"
              value={answerA}
              onChange={(e) => setAnswerA(e.target.value)}
            ></input>
          ) : (
            <div className="flex justify-between w-full p-[10px] border-gray-400 border">
              {question.answers[0]?.content}
            </div>
          )}
        </div>
        <div className="flex gap-1">
          <div className="flex w-[10%]">
            <p className="m-auto text-[24px]">B.</p>
          </div>
          {mode === "edit" ? (
            <input
              className="flex justify-between w-full p-[10px] border-[2px] border-gray-400 rounded-md"
              value={answerB}
              onChange={(e) => setAnswerB(e.target.value)}
            ></input>
          ) : (
            <div className="flex justify-between w-full p-[10px] border-gray-400 border">
              {question.answers[1]?.content}
            </div>
          )}
        </div>
        <div className="flex gap-1">
          <div className="flex w-[10%]">
            <p className="m-auto text-[24px]">C.</p>
          </div>
          {mode === "edit" ? (
            <input
              className="flex justify-between w-full p-[10px] border-[2px] border-gray-400 rounded-md"
              value={answerC}
              onChange={(e) => setAnswerC(e.target.value)}
            ></input>
          ) : (
            <div className="flex justify-between w-full p-[10px] border-gray-400 border">
              {question.answers[2]?.content}
            </div>
          )}
        </div>
        <div className="flex gap-1">
          <div className="flex w-[10%]">
            <p className="m-auto text-[24px]">D.</p>
          </div>
          {mode === "edit" ? (
            <input
              className="flex justify-between w-full p-[10px] border-[2px] border-gray-400 rounded-md"
              value={answerD}
              onChange={(e) => setAnswerD(e.target.value)}
            ></input>
          ) : (
            <div className="flex justify-between w-full p-[10px] border-gray-400 border">
              {question.answers[3]?.content}
            </div>
          )}
        </div>
        <div className="flex gap-1">
          <div className="flex w-[30%]">
            <p className="m-auto text-[24px]">ANSWER.</p>
          </div>
          {mode === "edit" ? (
            <input
              className="flex justify-between w-full p-[10px] border-[2px] border-gray-400 rounded-md"
              value={correct}
              onChange={(e) => setCorrect(e.target.value)}
            ></input>
          ) : (
            <div className="flex justify-between w-full p-[10px] border-gray-400 border">
              {question.correct}
            </div>
          )}
        </div>
        {mode === "edit" ? (
          <div className="flex justify-between gap-4">
            <motion.div
              onClick={handleDelete}
              className="w-1/2 bg-black text-white p-[10px] flex cursor-pointer"
              whileHover={{
                color: "black",
                backgroundColor: "#fff",
                transition: { duration: 0.5 },
              }}
            >
              <p className="m-auto"> DELETE </p>
            </motion.div>
            <motion.div
              onClick={handleClick}
              className="w-1/2 bg-black text-white p-[10px] flex cursor-pointer"
              whileHover={{
                color: "black",
                backgroundColor: "#fff",
                transition: { duration: 0.5 },
              }}
            >
              <p className="m-auto"> SUBMIT </p>
            </motion.div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PopUp;
