import Image from "next/image";
import { Inter } from "next/font/google";
import { ResponsiveBar } from "@nivo/bar";
import Bargraph from "./components/Bargraph";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data, firstFive }) {
  return (
    <>
      <div className="container">
        <h1 className="text-center text-3xl font-bold">DASHBOARD</h1>
        <p className="text-center mb-4 text-[#5BC9B4]">
          Welcome to your dashboard
        </p>
        <div className="flex flex-wrap justify-between space-y-2 sm:space-y-0 text-center">
          <div className="bg-[#1F2A40] px-5 py-4 w-full sm:w-1/2 md:w-1/4 lg:w-1/5 rounded-md">
            <p className="font-semibold text-lg">{data.cases}</p>
            <span className="text-[#5BC9B4]">Total Cases</span>
          </div>
          <div className="bg-[#1F2A40] px-5 py-4  w-full sm:w-1/2 md:w-1/4 lg:w-1/5 rounded-md">
            <p className="font-semibold text-lg">{data.todayCases}</p>
            <span className="text-[#5BC9B4]">Today Cases</span>
          </div>
          <div className="bg-[#1F2A40] px-5 py-4  w-full sm:w-1/2 md:w-1/4 lg:w-1/5 rounded-md">
            <p className="font-semibold text-lg">{data.todayDeaths}</p>
            <span className="text-[#5BC9B4]">Today Death</span>
          </div>
          <div className="bg-[#1F2A40] px-5 py-4  w-full sm:w-1/2 md:w-1/4 lg:w-1/5 rounded-md">
            <p className="font-semibold text-lg">{data.todayRecovered}</p>
            <span className="text-[#5BC9B4]">Today Recover</span>
          </div>
        </div>

        <Bargraph data={firstFive} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://disease.sh/v3/covid-19/all");
  const data = await res.json();

  const Barres = await fetch("https://disease.sh/v3/covid-19/states");
  const BarData = await Barres.json();

  const firstFive = BarData.slice(0, 8);

  return {
    props: {
      data,
      firstFive,
    },
  };
}
