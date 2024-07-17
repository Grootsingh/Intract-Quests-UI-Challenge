import React from "react";
import { CryptoDictionarySVG } from "@/svgassets";
import Icon from "../Icon";

function CryptoDictionary() {
  return (
    <section className="border-custom-translucent-white-12 border-t">
      <div className="max-w-[1284px] relative mx-auto px-4 pt-7 pb-12 mt-7">
        <p className="text-2xl text-white text-center">Crypto Dictionary</p>
        <p className="text-custom-translucent-white-4 text-center mt-2">
          Your one-stop to catch up on all crypto terms
        </p>

        <div className="mt-10 flex-wrap gap-4">
          <div className="w-full overflow-hidden rounded-2xl border border-custom-translucent-white-2 relative">
            <CryptoDictionarySVG className="w-full h-full object-cover" />
            <CryptoDictionarySVG className="w-full h-[100px] blur-[15px] scale-[3] absolute -bottom-[100px]" />
            <div className="absolute w-full bottom-0 h-[100px] p-6 flex justify-between items-center">
              <div>
                <p className="text-2xl text-custom-gray-60 mix-blend-plus-lighter">
                  Web3 + Degen Glossary
                </p>
                <p className="text-custom-translucent-white-4 mix-blend-plus-lighter">
                  Web3 + Degen Glossary
                </p>
              </div>
              <div className="backdrop-blur-[20px] rounded-full w-[64px] h-[64px] flex items-center justify-center border border-custom-translucent-white-2 bg-custom-translucent-black-4">
                <Icon
                  id="bookmark"
                  size={20}
                  className="text-custom-gray-60 pt-[3px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CryptoDictionary;
