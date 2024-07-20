import React from "react";
import Icon from "../Icon";
import { FooterData } from "@/data";

function Footer() {
  return (
    <>
      <footer className=" bg-custom-black-1000 border-custom-translucent-white-12 border-t">
        <div className="max-w-[1284px] p-12 mx-auto">
          <div className="flex justify-center md-700:justify-between flex-wrap md-700:flex-nowrap gap-10 relative mx-auto">
            <div className="w-[300px]">
              <p className="text-[1.75rem] text-white text-center xsm-470:text-start">
                intract.
              </p>
              <p className="text-custom-gray-700">
                We are your personal guide for exploring web3 projects & earning
                100x rewards
              </p>
            </div>
            <div className="flex gap-10 justify-center md-700:justify-normal flex-wrap w-fit">
              {FooterData.map(({ heading, link }) => {
                return (
                  <div
                    key={heading}
                    className="flex flex-col w-[160px] items-center xsm-470:items-start xsm-470:ml-auto"
                  >
                    <p className="text-white">{heading}</p>
                    {link.map((eachLink) => (
                      <p
                        key={eachLink}
                        className="text-custom-gray-700 hover:text-white"
                      >
                        {eachLink}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
          <SubFooter1 />
          <SubFooter2 />
        </div>
      </footer>
    </>
  );
}

export default Footer;

function SubFooter1() {
  return (
    <footer className="mt-[40px] pt-[40px] bg-custom-black-1000 border-custom-translucent-white-12 border-t">
      <p className="text-custom-gray-700">
        <span className="text-custom-translucent-white-8">Disclaimer:</span>{" "}
        Crypto Products, Virtual Digital Assets, and NFTs are unregulated and
        can be highly risky. There may be no regulatory recourse for any loss
        from such transactions. We advise the viewer to proceed with caution.
        Nothing in this website or any communication published by us amounts to,
        is intended to be, or should be construed as investment or purchase
        advice of any kind or financial advice or promotion under any applicable
        laws. Any decision made based on the content provided on this website or
        any communication published by us shall not be attributable to us.
      </p>
    </footer>
  );
}

function SubFooter2() {
  return (
    <footer className="mt-[40px] pt-[40px] bg-custom-black-1000 border-custom-translucent-white-12 border-t">
      <div className="flex justify-between items-center gap-2">
        <p className="text-white">
          CREATED BY{" "}
          <span className="underline underline-offset-2 whitespace-nowrap">
            RAJAT SINGH
          </span>
        </p>
        <div className="flex gap-2 flex-wrap">
          <Icon
            size={20}
            strokeWidth={1.4}
            id={"facebook"}
            className="rounded-lg ml-auto flex items-center text-blue-500 justify-center bg-custom-black-850 w-[40px] h-[40px] "
          />
          <Icon
            size={20}
            strokeWidth={1.4}
            id={"linkedin"}
            className="rounded-lg ml-auto flex items-center text-blue-600 justify-center bg-custom-black-850 w-[40px] h-[40px]"
          />
          <Icon
            size={20}
            strokeWidth={1.4}
            id={"twitter"}
            className="rounded-lg ml-auto flex items-center text-sky-500 justify-center bg-custom-black-850 w-[40px] h-[40px]"
          />
          <Icon
            size={20}
            strokeWidth={1.4}
            id={"youtube"}
            className="rounded-lg ml-auto flex items-center text-red-500 justify-center bg-custom-black-850 w-[40px] h-[40px]"
          />
        </div>
      </div>
    </footer>
  );
}
