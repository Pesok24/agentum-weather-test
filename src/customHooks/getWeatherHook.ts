import { useCallback, useMemo } from "react";
import { WeatherHook } from "../@types/common";
import { useAppSelector } from "../app/hooks";
import { timeConverter } from "../features/timeConvert";
import { selectWeather } from "../features/weather/weatherSlice";


export const useWeather = () => {
  const weather: WeatherHook = useAppSelector(selectWeather);
  const { daily, current } = weather ?? {};

  const tempGraf = useCallback(() => {
    let result: any = [
      { id: "Температура", color: "hsl(80, 70%, 50%)", data: [] },
    ];

    daily?.forEach((e) => {
      const time = timeConverter(e.dt);
      result[0].data.push({ x: time, y: Math.round(e.temp.day) });
    });

    return result;
  }, [daily]);

  const humidityGraf = useCallback(() => {
    let result: any = [
      { id: "Влажность", color: "hsl(261, 70%, 50%)", data: [] },
    ];

    daily?.forEach((e) => {
      const time = timeConverter(e.dt);
      result[0].data.push({ x: time, y: e.humidity + "%" });
    });
    return result;
  }, [daily]);

  const pressureGraf = useCallback(() => {
    let result: any = [
      { id: "Давление", color: "hsl(35, 70%, 50%)", data: [] },
    ];

    daily?.forEach((e) => {
      const time = timeConverter(e.dt);
      result[0].data.push({ x: time, y: e.pressure });
    });
    return result;
  }, [daily]);


  return useMemo(
    () => ({
      current,
      daily,
      tempGraf,
      humidityGraf,
      pressureGraf,
    }),
    [current, daily, tempGraf, humidityGraf, pressureGraf]
  );
};
