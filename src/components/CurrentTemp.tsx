import { memo, useCallback } from "react";
import { useWeather } from "../customHooks/getWeatherHook";
import { ReactComponent as RainThunder } from "../assets/icons/RainThunder.svg";
import { ReactComponent as PartlyCloudy } from "../assets/icons/PartlyCloudy.svg";
import { ReactComponent as Rainy } from "../assets/icons/Rainy.svg";
import { ReactComponent as Snowy } from "../assets/icons/Snowy.svg";
import { ReactComponent as Sunny } from "../assets/icons/Sunny.svg";

const CurrentTemp = memo(() => {
  const { current } = useWeather();

  const findCurrentWeatherIcon = useCallback(() => {
    if (current?.weather[0].id === 800) return <Sunny />;
    const iconId = current?.weather[0].id.toString().slice(0, 1);
    switch (iconId) {
      case "2":
        return <RainThunder />;

      case "5" || "3":
        return <Rainy />;

      case "6":
        return <Snowy />;

      case "8":
        return <PartlyCloudy />;

      default:
        return <PartlyCloudy />;
    }
  }, [current?.weather]);

  return (
    <>
      <div className="currentTemp-wrapper">
        <div className="currentTemp-cityName">Москва</div>
        <div className="currentTemp-temp">{Math.round(current?.temp)}℃</div>
        <div className="currentTemp-icon-wrapper">
          {findCurrentWeatherIcon()}
        </div>
        <div className="currentTemp-feelsLike">
          Ощущается как: {Math.round(current?.feels_like)}℃
        </div>
        <div className="currentTemp-humidity">
          Влажность: {current?.humidity}%
        </div>
      </div>
    </>
  );
});

export default CurrentTemp;
