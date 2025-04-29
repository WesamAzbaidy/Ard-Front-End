import Astro from "./Astro";
import Details from "./Details";
import ForecastDay from "./ForecastDay";
import Hourly from "./Hourly";
import Weather from "./Weather";

interface WeatherState {
  loading: boolean;
  weather: Weather | null;
  details: Details | null;
  forecast: ForecastDay[] | null;
  astro: Astro | null;
  hour: Hourly[] | null;
  error: string | null;
}

export default WeatherState;
