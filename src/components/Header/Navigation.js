"use client";
import React from "react";
import { HeaderNavigationData } from "@/data";

function Navigation() {
  const [isClicked, setClicked] = React.useState(HeaderNavigationData[2]);
  return (
    <>
      {HeaderNavigationData.map((nav) => (
        <div
          key={nav}
          className="h-full flex flex-col justify-center items-center"
        >
          {nav === isClicked ? <div className="h-1 mb-auto"></div> : undefined}
          <button
            onClick={() => setClicked(nav)}
            className={`whitespace-nowrap ${
              isClicked === nav ? "text-white" : "text-custom-gray-100"
            }`}
          >
            {nav}
            {nav === "Academy" ? (
              <div className="inline-block bg-custom-purple-600 px-2 leading-[0px] ml-2 py-[3px] rounded-lg">
                <span className="text-xs font-medium">New</span>
              </div>
            ) : undefined}
          </button>
          {nav === isClicked ? (
            <div className="h-1 rounded-full bg-white w-[115%] mt-auto"></div>
          ) : undefined}
        </div>
      ))}
    </>
  );
}

export default Navigation;
