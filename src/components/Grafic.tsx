import { ResponsiveLine } from "@nivo/line";
import { memo } from "react";
import { GrafType } from "../@types/common";
import { useWeather } from "../customHooks/getWeatherHook";

interface GraficProp {
  type: string
}


const Grafic = memo<GraficProp>(({ type }) => {

 const { tempGraf, humidityGraf, pressureGraf } = useWeather()

 const grafConfig: GrafType = {
   temp: {
     name: 'Температура',
     graf: tempGraf
   },
   humidity: {
    name: 'Влажность',
    graf: humidityGraf
   },
   pressure: {
    name: 'Давление',
    graf: pressureGraf
   }
 }

 const lineName = grafConfig[type]
 const { name, graf } = lineName
 
 const theme = {
    axis: {
      ticks: {
        line: {
          stroke: "green"
        },
        text: {
          fill: "white"
        }
      },
      legend: {
        text: {
          fill: 'white'
        }
      }
    },
  }

 return (
    //@ts-ignore
    <ResponsiveLine
    data={graf()}
    theme={theme}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
        orient: 'bottom',
        itemTextColor: 'white',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Дата',
        legendOffset: 36,
        legendPosition: 'middle'
    }}
    axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: name,
        legendOffset: -40,
        legendPosition: 'middle'
    }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={false}
    legends={[
        {
            anchor: 'bottom-right',
            itemTextColor: 'white',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemBackground: 'rgba(0, 0, 0, .03)',
                        itemOpacity: 1
                    }
                }
            ]
        }
    ]}
/>
  );
});

export default Grafic;
