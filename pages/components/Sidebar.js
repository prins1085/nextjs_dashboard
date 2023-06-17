import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed left-0 h-full w-64 text-white px-12 py-3 overflow-y-auto lg:block hidden bg-[#1F2A40]">
      <h1 className="text-2xl mb-16 text-center">ADMINIS</h1>
      <div className="flex flex-col">
        <Link href="/" className="pb-5">
          DashBoard
        </Link>
      </div>
      <p className="text-gray-500 font-semibold py-1 text-sm">Pages</p>
      <div className="flex flex-col space-y-3">
        <Link href="/"></Link>
        <Link href="/CountryInfo">Country Information</Link>
        <Link href="/Barchart">Bar Chart</Link>
      </div>
    </div>
  );
};

export default Sidebar;
