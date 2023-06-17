import Head from "next/head";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <div className="fixed left-0 h-full w-64 text-white px-7 py-3 overflow-y-auto lg:block hidden bg-[#1F2A40]">
        <h1 className="text-2xl mb-16 text-center border-b-2 pb-2">NEXT JS</h1>
        <div className="space-y-8">
          <div className="space-x-6">
            <i class="fa fa-home" aria-hidden="true"></i>
            <Link href="/" className="pb-5">
              DashBoard
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-gray-500 font-semibold py-1 text-sm">Pages</p>
            <div className="space-x-6">
            <i class="fa fa-flag" aria-hidden="true"></i>
            <Link href="/CountryInfo">Country Information</Link>
            </div>
            <div className="space-x-6">
            <i class="fa fa-bar-chart" aria-hidden="true"></i>
            <Link href="/Barchart">Bar Chart</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
