/** @format */

import axios from "../axios";

const deleteQuestion = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `/questions/${id}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export default deleteQuestion;
