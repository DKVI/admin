/** @format */
import * as apis from "../apis";
export const GET_QUESTIONS = async (dispatch) => {
  try {
    const response = await apis.getQuestions({
      method: "GET",
      url: "/questions",
    });
    if (response.status === 201) {
      dispatch({
        type: "GET_QUESTIONS",
        payload: response.data.question,
      });
    } else {
      dispatch({
        type: "GET_QUESTIONS",
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: "GET_QUESTIONS",
      payload: ["error"],
    });
  }
};

export const GET_USERS = async (dispatch) => {
  try {
    const response = await apis.getUser({
      method: "GET",
      url: "/users",
    });
    if (response.status === 201) {
      dispatch({
        type: "GET_USERS",
        payload: response.data.users,
      });
    } else {
      dispatch({
        type: "GET_USERS",
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: "GET_USERS",
      payload: ["error"],
    });
  }
};
