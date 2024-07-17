import Image from "next/image";
import Icon from "../Icon";
import { CryptoCreatorsData } from "@/data";

function CryptoCreators() {
  return (
    <section className="border-custom-translucent-white-12 border-t mt-32 md:mt-0">
      <div className="max-w-[1284px] relative mx-auto px-4 pt-7 pb-12 mt-7">
        <p className="text-2xl text-white text-center">
          Top Crypto Creators and Projects to Follow
        </p>
        <p className="text-custom-translucent-white-4 text-center mt-2">
          Answers to your crypto doubts, straight from the experts
        </p>

        <div className="flex justify-center mt-10 flex-wrap gap-4">
          {CryptoCreatorsData.map(({ img, description, height, width }) => (
            <div
              key={description}
              className="group w-[400px] sm:w-[283px] h-[420px] overflow-hidden rounded-2xl border border-custom-translucent-white-2 relative"
            >
              <Image
                src={img}
                alt={description}
                height={height}
                width={width}
                className="w-full h-full object-cover"
              />

              <Image
                src={img}
                alt={description}
                height={height}
                width={width}
                className="w-full h-[100px] blur-[15px] scale-[3] absolute -bottom-[60px]"
              />
              <div className="absolute top-4 right-4 backdrop-blur-[20px] rounded-full w-[40px] h-[40px] flex items-center justify-center border border-custom-translucent-white-2 bg-custom-translucent-black-4">
                <Icon id="youtube" size={22} className="text-custom-gray-60" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="hidden backdrop-blur-[20px] rounded-full w-[60px] h-[60px] group-hover:flex items-center justify-center border border-custom-translucent-white-2 bg-custom-translucent-black-4">
                  <Icon
                    id="play"
                    size={25}
                    className="text-custom-gray-60 pt-[1px] pl-1"
                  />
                </div>
              </div>

              <div className="absolute bottom-4 w-full">
                <p className="text-2xl px-4  text-custom-gray-60 mix-blend-plus-lighter line-clamp-2 overflow-hidden">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CryptoCreators;
