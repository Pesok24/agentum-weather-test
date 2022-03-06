import { memo, useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { setWeatherValue } from "../features/weather/weatherSlice";
import currentWeatherFetch from "../fetch/currentWeatherFetch";
import CurrentTemp from "./CurrentTemp";
import Grafic from "./Grafic";
import SelectWeatherInfo from "./SelectWeatherInfo";
const Main =  memo(() => {
  const dispatch = useAppDispatch();
  
  const [loading, setLoading] = useState(true)
  const [grafType, setGrafType] = useState('temp')

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setWeatherValue( await currentWeatherFetch()));
      setLoading(false)
    }
    fetchData()
  }, [dispatch]);

  const changeGrafType = useCallback((type) => {
    setGrafType(type)    
  },[])

  if (loading) return <div className="lds-dual-ring"></div>

  return (
    <>
      <div className="main-base-wrapper">
        <CurrentTemp />
        <SelectWeatherInfo changeType={changeGrafType}/>
        <Grafic type={grafType}/>
      </div>
    </>
  );
});

export default Main;
