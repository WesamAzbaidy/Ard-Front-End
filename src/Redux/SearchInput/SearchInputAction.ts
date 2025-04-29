import {
  UPDATE_SEARCH_INPUT,
  CLEAR_SEARCH_INPUT,
  SearchInputActionTypes,
} from "./SearchInputTypes";

export const clearSearchInput = (): SearchInputActionTypes => ({
  type: CLEAR_SEARCH_INPUT,
});

export const updateSearchInput = (input: string): SearchInputActionTypes => ({
  type: UPDATE_SEARCH_INPUT,
  payload: input,
});
