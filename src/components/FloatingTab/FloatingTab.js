"use client";
import React from "react";

function FloatingTab() {
  const [isActive, setActive] = React.useState("Essentials");
  return (
    <div className="pb-12 xsm-400:z-20 xsm-400:sticky xsm-400:bottom-0">
      <div className="rounded-full border flex items-center justify-between w-fit mx-auto border-custom-translucent-white-07 bg-custom-translucent-white-05 shadow-lg backdrop-blur-[10px]">
        <button
          onClick={() => {
            setActive("Essentials");
          }}
          className={`${
            isActive === "Essentials"
              ? "bg-custom-translucent-white-15 mix-blend-plus-lighter text-white shadow-custom-inset2"
              : "text-custom-gray-55 hover:bg-custom-translucent-white-12 hover:text-custom-gray-60"
          } rounded-full px-10 h-[36px] flex items-center justify-center `}
        >
          Essentials
        </button>
        <button
          onClick={() => setActive("Alpha Hub")}
          className={`${
            isActive === "Alpha Hub"
              ? "bg-custom-translucent-white-15 mix-blend-plus-lighter text-white shadow-custom-inset2"
              : "text-custom-gray-55 hover:bg-custom-translucent-white-12 hover:text-custom-gray-60"
          } rounded-full px-10 h-[36px] flex items-center justify-center `}
        >
          Alpha Hub
        </button>
      </div>
    </div>
  );
}

export default FloatingTab;
