export const SET_LOGIN_REQ = "SET_LOGIN_REQ";
export const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS";
export const SET_LOGIN_ERR = "SET_LOGIN_ERR";
export const LOGOUT_USER = "LOGOUT_USER";

interface SetLoginReqAction {
  type: typeof SET_LOGIN_REQ;
}

interface SetLoginSuccessAction {
  type: typeof SET_LOGIN_SUCCESS;
  payload: {
    userToken: string;
    user: any;
  };
}

interface SetLoginErrAction {
  type: typeof SET_LOGIN_ERR;
}

interface LogoutUserAction {
  type: typeof LOGOUT_USER;
}

export type LoginActionTypes =
  | SetLoginReqAction
  | SetLoginSuccessAction
  | SetLoginErrAction
  | LogoutUserAction;
