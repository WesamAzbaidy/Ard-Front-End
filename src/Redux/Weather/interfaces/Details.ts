import Condition from "./Condition";

interface Details {
  temp_c: number;
  temp_f: number;
  condition: Condition;
  wind_kph: number;
  humidity: number;
  uv: number;
  feelslike_c: number;
  pressure_mb: number;
}

export default Details;
