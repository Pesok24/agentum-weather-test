import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchCount } from '../counter/counterAPI';

export interface WeatherState {
  data: {}
}

const initialState: WeatherState = {
  data: {}
};


export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherValue: (state, action: PayloadAction<Object>) => {
      state.data = action.payload
    },
  },
});

export const { setWeatherValue } = weatherSlice.actions;

export const selectWeather = (state: RootState) => state.weather.data;

export default weatherSlice.reducer;
