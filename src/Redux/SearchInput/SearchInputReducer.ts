import {
  SearchInputActionTypes,
  UPDATE_SEARCH_INPUT,
  CLEAR_SEARCH_INPUT,
} from "./SearchInputTypes";

const initialState: string = "";

const searchInputReducer = (
  state = initialState,
  action: SearchInputActionTypes
): string => {
  switch (action.type) {
    case UPDATE_SEARCH_INPUT:
      return action.payload;
    case CLEAR_SEARCH_INPUT:
      return "";
    default:
      return state;
  }
};

export default searchInputReducer;
