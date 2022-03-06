import { memo } from "react";
import { RandomObject } from "../@types/common";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectCity, setCurrentCity } from "../features/weather/weatherSlice";

interface citiesConfigType {
  [key: string]: RandomObject;
}

const ChooseCity = memo(() => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector(selectCity);

  const citiesConfig: citiesConfigType = {
    moscow: {
      name: "Москва",
      value: "moscow",
      lat: "55.751244",
      lon: "37.618423",
    },
    stPetersburg: {
      name: "Санкт-Петербург",
      value: "stPetersburg",
      lat: "59.937500",
      lon: "30.308611",
    },
    kazan: {
      name: "Казань",
      value: "kazan",
      lat: "55.796391",
      lon: "49.108891",
    },
  };

  const handleSelect = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCurrentCity(citiesConfig[ev.target.value]));
  };

  return (
    <>
      <div className="chooseCity-wrapper">
        <label htmlFor="chooseCity-cities">Выбрать город:</label>
        <select
          id="chooseCity-cities"
          className="chooseCity-cities"
          name="cities"
          onChange={handleSelect}
          value={value}
        >
          {Object.keys(citiesConfig).map((e) => (
            <option key={e} value={e}>
              {citiesConfig[e].name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
});

export default ChooseCity;
