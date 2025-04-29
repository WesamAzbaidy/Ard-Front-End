import ModeState from "./ModeState";
import { SET_MODE, ModeActionTypes } from "./ModeTypes";

const initialState: ModeState = {
  mode: "light",
};

const ModeReducer = (
  state = initialState,
  action: ModeActionTypes
): ModeState => {
  switch (action.type) {
    case SET_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};

export default ModeReducer;
