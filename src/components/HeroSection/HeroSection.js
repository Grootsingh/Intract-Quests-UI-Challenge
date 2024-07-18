import Image from "next/image";
import Icon from "../Icon";

function HeroSection() {
  return (
    <main className="relative">
      <Image
        src="/hero-bg.png"
        alt="background-image"
        height={681}
        width={1440}
        className="select-none w-full"
      />
      <div className="absolute px-4 inset-0 mt-20 xsm-500:mt-0 xsm:mt-12 md:mt-0 lg:-mt-[5.75rem] flex flex-col items-center justify-center text-center">
        <Image
          src="/hero-animated-logo.gif"
          height={100}
          width={235}
          alt="intract academy"
          unoptimized={true}
          className="mix-blend-screen w-[188px] xsm:w-[235px]"
        />
        <p className="xsm:text-xl xsm:mt-2 sm:mt-[22px] leading-6 font-medium text-custom-gray-100">
          Intract users
          <span className="text-custom-gray-800 font-medium">
            {" "}
            have together made more than{" "}
          </span>
          $100 million
          <span className="text-custom-gray-800 font-medium">
            {" "}
            in web3.
            <br />
            Join them and{" "}
          </span>
          learn how to earn crypto!
        </p>
        <button
          className="xsm:px-[57px] px-8 py-2 mt-4 xsm:mt-4 sm:mt-12 xsm:py-[10px] flex items-center mix-blend-screen
         gap-1 text-sm text-custom-gray-100 rounded-md bg-custom-purple-600"
        >
          <span>Get Started</span>
          <Icon id="arrowRight" size={18} />
        </button>
      </div>
    </main>
  );
}

export default HeroSection;
