"use client";
import React from "react";
import Icon from "../Icon";
import Image from "next/image";

const time = {
  days: "00",
  hrs: "00",
  mins: "00",
  secs: "00",
};

export const dynamic = "force-dynamic";

function Timeout() {
  const [getTime, setTime] = React.useState(time);

  React.useEffect(() => {
    const currentTime = new Date();
    const targetTime = new Date(currentTime.getTime() + 5 * 60 * 60 * 1000);
    const tick = setInterval(() => {
      const differenceInTime = targetTime.getTime() - new Date().getTime();
      let days = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
      let hrs = Math.floor(
        (differenceInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let mins = Math.floor(
        (differenceInTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      let secs = Math.floor((differenceInTime % (1000 * 60)) / 1000);
      if (differenceInTime < 0) {
        clearInterval(tick);
        setTime(time);
      }

      days = days < 10 ? `${0}${days}` : days;
      hrs = hrs < 10 ? `${0}${hrs}` : hrs;
      mins = mins < 10 ? `${0}${mins}` : mins;
      secs = secs < 10 ? `${0}${secs}` : secs;

      setTime({ days, hrs, mins, secs });
    }, 1000);

    return () => clearInterval(tick);
  }, []);

  return (
    <div className="w-full flex flex-col gap-3 rounded-xl p-3 border border-custom-translucent-white-05 bg-custom-translucent-white-05 backdrop-blur-[30px]">
      <div className="flex gap-1 items-center">
        <div className="flex items-center justify-center bg-orange-500/20 w-5 h-5 rounded-full">
          <Icon id="clock" size={14} className="text-orange-500" />
        </div>
        <p className="text-custom-translucent-white-4">Reward unlocks in</p>
      </div>
      <div className="dash-gradient h-[1px]"></div>
      <div className="relative h-[84px] flex justify-center items-center gap-5 border border-custom-translucent-white-1 bg-custom-translucent-black-2 rounded-lg shadow-custom-inset">
        <div className="absolute inset-0">
          <Image
            src="/dot-dot.png"
            alt="dotted background"
            height={252}
            width={864}
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" z-[2] flex flex-col w-10 gap-7 pt-2 items-center">
          <p className="text-[32px] leading-[0] text-custom-translucent-white-6">
            {getTime.days}
          </p>
          <p className="text-custom-translucent-white-2 leading-[0] text-center">
            Days
          </p>
        </div>
        <div className="z-[2] flex flex-col w-10 gap-7 pt-2 items-center">
          <p className="text-[32px] leading-[0] text-custom-translucent-white-6">
            {getTime.hrs}
          </p>
          <p className="text-custom-translucent-white-2 leading-[0] text-center">
            Hrs
          </p>
        </div>
        <div className="z-[2] flex flex-col w-10 gap-7 pt-2 items-center">
          <p className="text-[32px] leading-[0] text-custom-translucent-white-6">
            {getTime.mins}
          </p>
          <p className="text-custom-translucent-white-2 leading-[0] text-center">
            Mins
          </p>
        </div>
        <div className="z-[2] flex flex-col w-10 gap-7 pt-2 items-center">
          <p className="text-[32px] leading-[0] text-custom-translucent-white-6">
            {getTime.secs}
          </p>
          <p className="text-custom-translucent-white-2 leading-[0] text-center">
            Sec
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timeout;
