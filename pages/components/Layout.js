import React from "react";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <div className="flex flex-col lg:flex-row">
    <div className="w-full lg:w-2/12">
      <Sidebar />
    </div>
    <div className="w-full lg:w-10/12 text-white">
      <main className="p-12">{props.children}</main>
    </div>
  </div>
  
  );
};

export default Layout;
