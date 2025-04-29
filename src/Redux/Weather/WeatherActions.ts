import { Dispatch } from "redux";
import { API_KEY } from "../../config/APIKEYS/APIKEY";
import { CURRENT_URL } from "../../config/URLs/URLS";
import ApiComponent from "../../component/API/ApiComponent";
import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  WeatherActionTypes,
} from "./WeatherTypes";
import { RootState } from "..";

export const fetchWeatherRequest = (): WeatherActionTypes => ({
  type: FETCH_WEATHER_REQUEST,
});

export const fetchWeatherSuccess = (data: any): WeatherActionTypes => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: { data },
});

export const fetchWeatherFailure = (message: string): WeatherActionTypes => ({
  type: FETCH_WEATHER_FAILURE,
  payload: { message },
});

type LocationType = string | { latitude: number; longitude: number };

export const fetchWeather = (location: LocationType) => {
  return async (
    dispatch: Dispatch<WeatherActionTypes>,
    getState: () => RootState
  ) => {
    let queryParam = "";

    if (typeof location === "string") {
      queryParam = location;
    } else if (
      typeof location === "object" &&
      location.latitude !== undefined &&
      location.longitude !== undefined
    ) {
      queryParam = `${location.latitude},${location.longitude}`;
    } else {
      dispatch(fetchWeatherFailure("Invalid location format"));
      return;
    }

    const token = getState().Login.userToken;

    try {
      await ApiComponent({
        dispatch,
        method: "GET",
        url: `${CURRENT_URL}`,
        params: {
          q: queryParam,
          key: API_KEY,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
        onRequest: fetchWeatherRequest,
        onSuccess: (data: any) => {
          if (data) {
            return fetchWeatherSuccess(data);
          } else {
            return fetchWeatherFailure("No data received");
          }
        },
        onError: (error: any) => {
          if (error.code === "ERR_NETWORK") {
            return fetchWeatherFailure("Network error");
          } else {
            return fetchWeatherFailure(
              error?.response?.data?.message || "An error occurred"
            );
          }
        },
      });
    } catch (error: any) {
      dispatch(fetchWeatherFailure("Unexpected error: " + error.message));
    }
  };
};
