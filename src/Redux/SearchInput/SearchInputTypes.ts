export const UPDATE_SEARCH_INPUT = "UPDATE_SEARCH_INPUT";
export const CLEAR_SEARCH_INPUT = "CLEAR_SEARCH_INPUT";

interface UpdateSearchInputAction {
  type: typeof UPDATE_SEARCH_INPUT;
  payload: string;
}

interface ClearSearchInputAction {
  type: typeof CLEAR_SEARCH_INPUT;
}

export type SearchInputActionTypes =
  | UpdateSearchInputAction
  | ClearSearchInputAction;
