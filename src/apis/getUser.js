/** @format */

import axios from "../axios";

const getUser = async () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: "/users",
      });
      resolve(response);
    } catch {
      reject("ERROR");
    }
  });

export default getUser;
