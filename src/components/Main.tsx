import { memo, useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectCity, setWeatherValue } from "../features/weather/weatherSlice";
import currentWeatherFetch from "../fetch/currentWeatherFetch";
import ChooseCity from "./ChooseCity";
import CurrentTemp from "./CurrentTemp";
import Grafic from "./Grafic";
import SelectWeatherInfo from "./SelectWeatherInfo";
const Main =  memo(() => {
  const dispatch = useAppDispatch();
  
  const [loading, setLoading] = useState(true)
  const [grafType, setGrafType] = useState('temp')
  const { lat, lon } = useAppSelector(selectCity)


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      dispatch(setWeatherValue( await currentWeatherFetch(lat, lon)));
      setLoading(false)
    }
    fetchData()
  }, [dispatch, lat, lon]);

  const changeGrafType = useCallback((type) => {
    setGrafType(type)    
  },[])

  if (loading) return <div className="lds-dual-ring"></div>

  return (
    <>
      <div className="main-base-wrapper">
        <ChooseCity />
        <CurrentTemp />
        <SelectWeatherInfo changeType={changeGrafType}/>
        <Grafic type={grafType}/>
      </div>
    </>
  );
});

export default Main;
