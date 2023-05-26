/** @format */

import axios from "../axios";

const postDetailQuestion = (id, formData) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "patch",
        url: "/questions/" + id,
        params: {
          id,
        },
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ ...formData }),
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export default postDetailQuestion;
