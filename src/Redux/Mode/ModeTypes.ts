export const SET_MODE = "SET_MODE";

export interface SetModeAction {
  type: typeof SET_MODE;
  payload: "light" | "dark";
}

export type ModeActionTypes = SetModeAction;
