import axios from "axios";
import { Dispatch } from "redux";
import {
  LoginActionTypes,
  SET_LOGIN_REQ,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERR,
} from "./LoginTypes";
import { LOGIN_URL } from "../../config/URLs/URLS";

export const LOGOUT_USER = "LOGOUT_USER";

export const logoutUser = (): LoginActionTypes => ({
  type: LOGOUT_USER,
});

export const setLoginReq = (): LoginActionTypes => ({ type: SET_LOGIN_REQ });
export const setLoginSuccess = (
  userToken: string,
  user: any
): LoginActionTypes => ({
  type: SET_LOGIN_SUCCESS,
  payload: { userToken, user },
});
export const setLoginErr = (): LoginActionTypes => ({ type: SET_LOGIN_ERR });

export const userLogin =
  (email: string, password: string, setErrorMessage: (msg: string) => void) =>
  async (dispatch: Dispatch<LoginActionTypes>) => {
    dispatch(setLoginReq());
    try {
      const response = await axios.post(`${LOGIN_URL}`, {
        email,
        password,
      });

      const token = response.data.data.access_token;
      const user = response.data.data.user;

      if (token && user) {
        dispatch(setLoginSuccess(token, user));
      } else {
        dispatch(setLoginErr());
        setErrorMessage("Email or password is incorrect");
      }
    } catch (error: any) {
      dispatch(setLoginErr());
      setErrorMessage("Email or password is incorrect");
    }
  };
