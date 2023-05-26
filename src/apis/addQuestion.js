/** @format */

import axios from "../axios";
const addQuestion = (formData) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/questions",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: formData,
      });
      resolve(response);
    } catch {
      reject("ERROR");
    }
  });

export default addQuestion;
