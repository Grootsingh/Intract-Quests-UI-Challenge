import { NFTLine1, NFTLine2, NFTLine3, NFTLine4, NFTLine5 } from "@/svgassets";
import CryptoMenu from "../CryptoMenu";
import { BasicOfCryptoData } from "@/data";
import { LearnerTickData } from "@/data";
import NFTTickDisclosur from "../NFTTickDisclosur";
function BasicOfCrypto() {
  return (
    <>
      <section
        id="basic of crypto"
        className="relative min-h-[43rem] overflow-x-hidden sm:overflow-visible"
      >
        <div className="hidden md:block -translate-x-12 translate-y-[120px] w-fit">
          <NFTLine1 />
        </div>
        <div className="xsm:w-fit relative z-10 xsm:mx-auto md:w-fit md:mx-0 md:translate-x-[4.75rem]">
          <CryptoMenu MenuData={BasicOfCryptoData} />
        </div>
        <div className="w-fit mx-auto mt-[6.5rem] md-960:mx-0 md-960:-mt-4 md-960:absolute md-960:top-64 md-960:right-12">
          <div className="w-fit absolute -translate-x-[45rem] -translate-y-6 md-960:top-[0.5rem] ">
            <NFTLine2 />
          </div>
          <div className="block -translate-y-12">
            <NFTTickDisclosur tickdata={LearnerTickData} />
          </div>
          <div className="w-fit absolute -translate-x-56 -translate-y-64 md-960:-translate-x-56 md-960:translate-y-36 md-960:top-0">
            <NFTLine3 />
          </div>
        </div>
      </section>
    </>
  );
}

export default BasicOfCrypto;
