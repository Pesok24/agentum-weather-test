import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RandomObject } from "../../@types/common";
import { RootState } from "../../app/store";

export interface WeatherState {
  data: {};
  currentCity: RandomObject;
}

const initialState: WeatherState = {
  data: {},
  currentCity: { name: "Москва", value: "moscow", lat: "55.751244", lon: "37.618423", }, // начальный стэйт редакса и дефолтный город
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherValue: (state, action: PayloadAction<Object>) => {
      state.data = action.payload; // экшон изменения погоды
    },
    setCurrentCity: (state, action: PayloadAction<Object>) => {
      state.currentCity = action.payload; // экшон изменения города
    },
  },
});

export const { setWeatherValue, setCurrentCity } = weatherSlice.actions;

export const selectWeather = (state: RootState) => state.weather.data;
export const selectCity = (state: RootState) => state.weather.currentCity;


export default weatherSlice.reducer;
