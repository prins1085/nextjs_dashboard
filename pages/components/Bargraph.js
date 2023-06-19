import { ResponsiveBar } from "@nivo/bar";
import React from "react";

const Bargraph = ({ data }) => {
  return (
    <div className="h-[400px] bg-[#1F2A40] mt-4 rounded-md">
      <p className="px-2 text-xl font-semibold">Covid-19 Data</p>
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
        keys={["cases", "population", "recovered"]}
        indexBy="state"
        margin={{ top: 50, right: 130, bottom: 80, left: 80 }}
        padding={0.3}
        axisBottom={{
          legend: "COUNTRY",
          legendPosition: "middle",
          legendOffset: 40,
        }}
        labelSkipHeight={12}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 120,
            itemsSpacing: 3,
            itemWidth: 100,
            itemHeight: 20,
            itemOpacity: 0.85,
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
