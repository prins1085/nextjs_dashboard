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
        {/* <div className="flex flex-wrap justify-between space-y-2 sm:space-y-0 text-center">
          <div className="flex justify-around bg-[#1F2A40] px-5 py-4 w-full sm:w-1/2 md:w-1/4 lg:w-1/5 rounded-md">
            <div className="text-3xl my-auto ">
              <i className="fi fi-sr-users-alt"></i>
            </div>
            <div>
              <p className="font-semibold text-lg">{data.cases}</p>
              <span className="text-[#5BC9B4]">Total Cases</span>
            </div>
          </div>
          <div className="flex justify-around bg-[#1F2A40] px-5 py-4  w-full sm:w-1/2 md:w-1/4 lg:w-1/5 rounded-md">
            <div className="text-3xl my-auto ">
              <i className="fi fi-sr-user-add"></i>
            </div>
            <div>
              <p className="font-semibold text-lg">{data.todayCases}</p>
              <span className="text-[#5BC9B4]">Today Cases</span>
            </div>
          </div>
          <div className="flex justify-around bg-[#1F2A40] px-5 py-4  w-full sm:w-1/2 md:w-1/4 lg:w-1/5 rounded-md">
            <div className="text-3xl my-auto ">
              <i className="fi fi-sr-cross-circle"></i>
            </div>
            <div>
              <p className="font-semibold text-lg">{data.todayDeaths}</p>
              <span className="text-[#5BC9B4]">Today Death</span>{" "}
            </div>
          </div>
          <div className="flex justify-around bg-[#1F2A40] px-5 py-4  w-full sm:w-1/2 md:w-1/4 lg:w-1/5 rounded-md">
            <div className="text-3xl my-auto ">
              <i className="fi fi-ss-following"></i>
            </div>
            <div>
              <p className="font-semibold text-lg">{data.todayRecovered}</p>
              <span className="text-[#5BC9B4]">Today Recover</span>{" "}
            </div>
          </div>
        </div> */}

        {/* using grid start */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 text-center">
          <div className="flex flex-col sm:flex-row justify-around bg-[#1F2A40] px-5 py-4 rounded-md">
            <div className="text-3xl my-auto ">
              <i className="fi fi-sr-users-alt"></i>
            </div>
            <div>
              <p className="font-semibold text-lg overflow-hidden">{data.cases}</p>
              <span className="text-[#5BC9B4]">Total Cases</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-around bg-[#1F2A40] px-5 py-4 rounded-md">
            <div className="text-3xl my-auto ">
            <i className="fi fi-sr-user-add"></i>
            </div>
            <div>
              <p className="font-semibold text-lg">{data.todayCases}</p>
              <span className="text-[#5BC9B4]">Today Cases</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-around bg-[#1F2A40] px-5 py-4 rounded-md">
            <div className="text-3xl my-auto ">
            <i className="fi fi-sr-cross-circle"></i>
            </div>
            <div>
              <p className="font-semibold text-lg">{data.todayDeaths}</p>
              <span className="text-[#5BC9B4]">Today Death</span>{" "}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-around bg-[#1F2A40] px-5 py-4 rounded-md">
            <div className="text-3xl my-auto ">
            <i className="fi fi-ss-following"></i>
            </div>
            <div>
              <p className="font-semibold text-lg">{data.todayRecovered}</p>
              <span className="text-[#5BC9B4]">Today Recover</span>{" "}
            </div>
          </div>
        </div>
        {/* using grid stop */}
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
