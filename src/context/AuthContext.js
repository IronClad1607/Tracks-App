import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { AsyncStorage } from "react-native";
import {navigate} from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signup":
      return {
        token: action.payload,
        errorMessage: "",
      };
    case "add_error":
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", {
      email,
      password,
    });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({
      type: "signup",
      payload: response.data.token,
    });
    navigate('List');
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with Sign up!",
    });
  }
};

const signin = (dispatch) => {
  return ({ email, password }) => {};
};

const signout = () => {
  return () => {};
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);
