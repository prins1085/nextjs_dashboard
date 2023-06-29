import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import profilPic from "../../public/profile.jpeg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <div className="fixed left-0 h-full w-64 text-white px-7 py-3 overflow-y-auto lg:block hidden bg-[#1F2A40]">
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
      </div> */}

      <div>
        <div className="flex md:hidden px-5 py-3 text-xl border-b-2 justify-between">
          <button
            className="block md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="fi fi-br-menu-burger"></i>
          </button>
          <h1 className="block md:hidden text-white text-2xl font-semibold">
            NEXT JS
          </h1>
        </div>
        <div
          className={`${
            isOpen ? "" : "hidden "
          }fixed left-0 h-full w-64 text-white px-7 py-3 overflow-y-auto lg:block bg-[#1F2A40] z-10`}
        >
          <h1 className="text-2xl mb-7 text-center border-b-2 pb-2 hidden md:block">
            NEXT JS
          </h1>
          <div className="flex flex-col justify-center items-center mb-10 space-y-2">
            <div className="rounded-[50%] overflow-hidden w-[100px] h-[100px]">
              <Image
                src={profilPic}
                width={200}
                alt="picture of the author"
                priority
              />
            </div>
            <h1 className="font-bold text-[#e0e0e0] uppercase text-xl">
              Prins
            </h1>
          </div>
          <div className="space-y-8">
            <div className="space-x-6 hover:text-[#5BC9B4]">
              <i className="fa fa-home" aria-hidden="true"></i>
              <Link
                href="/"
                className="pb-5"
                onClick={() => setIsOpen(!isOpen)}
              >
                DashBoard
              </Link>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-gray-500 font-semibold py-1 text-sm">Pages</p>
              <div className="space-x-6 hover:text-[#5BC9B4]">
                <i className="fa fa-flag" aria-hidden="true"></i>
                <Link href="/CountryInfo" onClick={() => setIsOpen(!isOpen)}>
                  Country Information
                </Link>
              </div>
              <div className="space-x-5 hover:text-[#5BC9B4]">
                <i className="fa fa-bar-chart" aria-hidden="true"></i>
                <Link href="/Barchart" onClick={() => setIsOpen(!isOpen)}>
                  Bar Chart
                </Link>
              </div>
              <div className="space-x-6 hover:text-[#5BC9B4]">
                <i className="fa fa-calendar" aria-hidden="true"></i>
                <Link href="/Calendar" onClick={() => setIsOpen(!isOpen)}>
                  Calendar
                </Link>
              </div>
              <div className="space-x-6 hover:text-[#5BC9B4]">
                <i className="fa fa-arrows" aria-hidden="true"></i>
                <Link href="/dnd" onClick={() => setIsOpen(!isOpen)}>
                  React Beautiful DND
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
