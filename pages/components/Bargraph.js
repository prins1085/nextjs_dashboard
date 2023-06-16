import { ResponsiveBar } from "@nivo/bar";
import React from "react";

const Bargraph = ({ data }) => {
  return (
      <div className="h-[400px] bg-[#1F2A40] mt-5">
        <ResponsiveBar
          data={data}
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: "white",
                },
              },
              legend: {
                text: {
                  fill: "white",
                },
              },
              ticks: {
                text: {
                  fill: "white",
                },
              },
            },
            legends: {
              text: {
                fill: "white",
              },
            },
          }}
          keys={["cases","population","recovered"]}
          indexBy="state"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          defs={[
           
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#eed312",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "tests",
              },
              id: "lines",
            },
          ]}
         
         
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "country",
            legendPosition: "middle",
            legendOffset: 32,
           
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
  );
};

export default Bargraph;


