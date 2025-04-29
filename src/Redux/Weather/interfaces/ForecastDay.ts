import Condition from "./Condition";

interface ForecastDay {
  date: string;
  condition: Condition;
  avgtemp_c: number;
  avgtemp_f: number;
}

export default ForecastDay;
