import WeatherState from "./interfaces/WeatherState";
import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  WeatherActionTypes,
} from "./WeatherTypes";

const initialState: WeatherState = {
  loading: false,
  weather: null,
  details: null,
  forecast: null,
  astro: null,
  hour: null,
  error: null,
};

const weatherReducer = (
  state = initialState,
  action: WeatherActionTypes
): WeatherState => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_WEATHER_SUCCESS:
      const weatherData = action.payload.data.data;
      return {
        ...state,
        loading: false,
        weather: weatherData.weather,
        details: weatherData.details,
        forecast: weatherData.forecast,
        astro: weatherData.astro,
        hour: weatherData.hour,
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
        weather: null,
        details: null,
        forecast: null,
        astro: null,
        hour: null,
      };
    default:
      return state;
  }
};

export default weatherReducer;
