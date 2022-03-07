import { memo } from "react";

interface SelectWeatherInfoProp {
  changeType: (arg0: string) => void;
}

const SelectWeatherInfo = memo<SelectWeatherInfoProp>(({ changeType }) => {
  //map кнопок и передача в родительский компонент типа графика, который нужно показывать

  const weatherButtonsConfig = [
    { name: "Температура", style: "temp", type: "temp" },
    { name: "Давление", style: "clouds", type: "pressure" },
    { name: "Влажность", style: "hum", type: "humidity" },
  ];

  return (
    <>
      <div className="selectWeatherInfo-wrapper">
        {weatherButtonsConfig.map((e) => (
          <div
            key={e.type}
            className={`selectWeatherInfo-block selectWeatherInfo-block-${e.style}`}
            onClick={() => changeType(e.type)}
          >
            {e.name}
          </div>
        ))}
      </div>
    </>
  );
});

export default SelectWeatherInfo;
