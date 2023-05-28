/** @format */

import axios from "../axios";

const getAdmin = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "GET",
        url: "/admins",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export default getAdmin;
