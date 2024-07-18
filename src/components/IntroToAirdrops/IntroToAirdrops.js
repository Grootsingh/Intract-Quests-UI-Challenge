import { NFTLine4, NFTLine5 } from "@/svgassets";
import NFTTickDisclosur from "../NFTTickDisclosur";
import { EarnerTickData } from "@/data";
import CryptoMenu from "../CryptoMenu";
import { IntroductionToAirdropsData } from "@/data";
function IntroToAirdrops() {
  return (
    <section
      id="intro to airdrops"
      className="relative min-h-[53rem] overflow-x-clip"
    >
      <div className="xsm:w-fit mx-auto relative z-10 md-960:translate-x-28">
        <div className="bg-custom-black-1000 absolute -z-10 -top-12 h-full w-[610px] right-0 md-960:hidden "></div>
        <CryptoMenu MenuData={IntroductionToAirdropsData} />
        <div className="w-fit hidden md-960:block md-960:absolute md-960:-translate-x-[17.5rem] md-960:translate-y-[7rem] md-960:top-0">
          <NFTLine4 />
        </div>
      </div>
      <div className="w-fit block mx-auto mt-[3.5rem] md-960:mt-0 md-960:mx-0 -translate-y-1 translate-x-1 md-960:absolute z-10 top-0 md-960:translate-y-[25.75rem] md-960:translate-x-[4.25rem]">
        <div className="bg-custom-black-1000 md-960:block  hidden md-960:absolute -z-10 top-0 h-full w-[150px] right-[12rem]"></div>
        <NFTTickDisclosur tickdata={EarnerTickData} />
        <div className="w-fit absolute -translate-x-[17.5rem] -translate-y-64 md-960:-translate-x-[17.5rem] z-10 md-960:translate-y-[7rem] md-960:top-0">
          <NFTLine5 />
        </div>
      </div>
    </section>
  );
}

export default IntroToAirdrops;
