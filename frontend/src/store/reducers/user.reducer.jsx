import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LIST_USER_SUCCESS,
  LIST_USER_FAILED,
  USER_SUCCESS,
  USER_FAILED,
} from "../constants/user.const";

const initialState = {
  user:
    JSON.parse(localStorage.getItem("jwtToken")) ||
    JSON.parse(localStorage.getItem("userLogin"))
      ? JSON.parse(localStorage.getItem("jwtToken")) ||
        JSON.parse(localStorage.getItem("userLogin"))
      : {},
  listUser: [],
  users: {},
  errors: {},
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS: {
      return { ...state, user: payload };
    }
    case LOGIN_FAILED: {
      return { ...state, errors: payload };
    }
    case LIST_USER_SUCCESS: {
      return { ...state, listUser: payload };
    }
    case LIST_USER_FAILED: {
      return { ...state, errors: payload };
    }
    case USER_SUCCESS: {
      return { ...state, users: payload };
    }
    case USER_FAILED: {
      return { ...state, errors: payload };
    }
    default:
      return state;
  }
};

export default userReducer;
