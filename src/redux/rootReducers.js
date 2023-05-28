/** @format */

const initState = {
  users: [],
  questions: [],
  admins: {},
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    case "GET_QUESTIONS":
      return { ...state, questions: action.payload };
    case "GET_ADMIN":
      return { ...state, admins: { ...action.payload } };
    default:
      return state;
  }
};

export default reducer;
