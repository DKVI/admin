/** @format */

import axios from "../axios";

const getQuestions = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "GET",
        url: "/questions",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export default getQuestions;
