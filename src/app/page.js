import BasicOfCrypto from "@/components/BasicOfCrypto";
import CryptoCreators from "@/components/CryptoCreators";
import CryptoDictionary from "@/components/CryptoDictionary";
import FloatingTab from "@/components/FloatingTab";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroToAirdrops from "@/components/IntroToAirdrops";
import RewardUnlock from "@/components/RewardUnlock";

// use Image over img and also provide height and width

export default function Home() {
  return (
    <>
      <div className="relative">
        <Header />
        <HeroSection />
        <article className="max-w-[1284px] relative mx-auto px-4 xsm:px-0 mt-28 xsm-500:mt-20 md:mt-8 lg:-mt-[70px] xl:-mt-[176px]">
          <BasicOfCrypto />
          <IntroToAirdrops />
          <RewardUnlock />
        </article>
        <CryptoCreators />
        <CryptoDictionary />
        <FloatingTab />
        <Footer />
      </div>
    </>
  );
}
