import Condition from "./Condition";

interface Hourly {
  condition: Condition;
  temp_c: number;
  temp_f: number;
  time: string;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  wind: string;
}

export default Hourly;
