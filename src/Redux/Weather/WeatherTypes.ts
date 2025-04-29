export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";

interface FetchWeatherRequestAction {
  type: typeof FETCH_WEATHER_REQUEST;
}

interface FetchWeatherSuccessAction {
  type: typeof FETCH_WEATHER_SUCCESS;
  payload: {
    data: any;
  };
}

interface FetchWeatherFailureAction {
  type: typeof FETCH_WEATHER_FAILURE;
  payload: {
    message: string;
  };
}

export type WeatherActionTypes =
  | FetchWeatherRequestAction
  | FetchWeatherSuccessAction
  | FetchWeatherFailureAction;
