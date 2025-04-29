import { SET_MODE, ModeActionTypes } from "./ModeTypes";

export const setModeAction = (mode: "light" | "dark"): ModeActionTypes => {
  return {
    type: SET_MODE,
    payload: mode,
  };
};
