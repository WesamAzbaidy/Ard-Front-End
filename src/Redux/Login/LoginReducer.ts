import { LoginActionTypes } from "./LoginTypes";

interface LoginState {
  userToken: string;
  isLogged: boolean;
  isError: boolean;
  loading: boolean;
}

const initialState: LoginState = {
  userToken: "",
  isLogged: false,
  isError: false,
  loading: false,
};

export default function loginReducer(
  state = initialState,
  action: LoginActionTypes
): LoginState {
  switch (action.type) {
    case "SET_LOGIN_REQ":
      return { ...state, loading: true, isError: false };
    case "SET_LOGIN_SUCCESS":
      return {
        ...state,
        userToken: action.payload.userToken,
        isLogged: true,
        loading: false,
        isError: false,
      };
    case "SET_LOGIN_ERR":
      return { ...state, isLogged: false, loading: false, isError: true };
    case "LOGOUT_USER":
      return { ...initialState };
    default:
      return state;
  }
}
