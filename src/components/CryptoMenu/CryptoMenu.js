"use client";
import TaskCard from "../TaskCard";
import Icon from "../Icon";
import React from "react";
import Image from "next/image";

function CryptoMenu({ MenuData }) {
  const [isOpen, setOpen] = React.useState(true);
  const { img, height, width, alt, quests, title, description, units, task } =
    MenuData;
  return (
    <>
      <div
        onClick={() => {
          setOpen((curr) => !curr);
        }}
        className={`${
          isOpen ? "rounded-tl-3xl rounded-tr-3xl" : "rounded-3xl"
        } flex items-center flex-wrap pt-[3.5rem] xsm-400:pt-6 xsm-400:flex-nowrap justify-center xsm-400:justify-normal gap-6 max-w-[520px] p-6  border border-custom-translucent-white-05 bg-custom-translucent-white-05 hover:bg-custom-translucent-white-12`}
      >
        <div className="block xsm-400:hidden ml-auto absolute right-[20px] top-[10px]">
          {isOpen ? (
            <button>
              <Icon
                id="chevronUp"
                side={20}
                strokeWidth={3}
                color={"#fff3"}
                className={"p-2"}
              />
            </button>
          ) : (
            <button>
              <Icon
                id="chevronUp"
                side={20}
                strokeWidth={3}
                color={"#fff3"}
                className={"p-2 rotate-180"}
              />
            </button>
          )}
        </div>

        <div className=" h-[180px]  xsm-400:basis-[160px] xsm-400:shrink-0 relative p-2 rounded-2xl border border-custom-translucent-white-2">
          <Image
            src={img}
            height={height}
            width={width}
            className="rounded-xl object-cover w-full h-full"
            alt={alt}
          />
          <div className="absolute bottom-5 left-0 right-0 flex justify-center">
            <div className="py-2 w-24 flex items-center justify-center rounded-full border border-custom-translucent-white-2 backdrop-blur-[10px] bg-custom-translucent-black-4">
              <p className="text-sm text-white">{quests}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="hidden xsm-400:block self-end">
            {isOpen ? (
              <button>
                <Icon
                  id="chevronUp"
                  side={20}
                  strokeWidth={3}
                  color={"#fff3"}
                  className={"p-2"}
                />
              </button>
            ) : (
              <button>
                <Icon
                  id="chevronUp"
                  side={20}
                  strokeWidth={3}
                  color={"#fff3"}
                  className={"p-2 rotate-180"}
                />
              </button>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-2xl leading-6">{title}</p>
            <p className="text-custom-translucent-white-4">{description}</p>
            <div className="dash-gradient h-[1px]"></div>
            <div className="flex boder-[0.5px] border-custom-translucent-white-05 w-fit rounded-full bg-custom-translucent-white-07 items-center gap-1 py-2 px-3">
              <Icon id="coin" size={18} className="text-yellow-400" />
              <p className="text-sm leading-[0px]">{units}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } max-w-[520px] h-[350px]  rounded-bl-3xl rounded-br-3xl overflow-y-scroll p-6 bg-custom-black-900`}
      >
        <TaskCard TaskData={task} />
      </div>
    </>
  );
}

export default CryptoMenu;
