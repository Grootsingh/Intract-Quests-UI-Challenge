import Image from "next/image";
import Icon from "../Icon";

function ExclusiveCommunite() {
  return (
    <div className="w-full flex flex-col gap-3 rounded-xl border border-custom-translucent-white-1 bg-custom-black-800 mt-4 p-3">
      <Image
        src="/ExclusiveCommunity.gif"
        alt="join our community"
        height={600}
        width={600}
        className="w-full"
      />
      <div className="flex items-center justify-between">
        <p className="text-custom-translucent-white-4">Exclusive Community</p>
        <div className="flex items-center gap-1">
          <Icon id="twitter" size={16} className="text-blue-600" />
          <p>Earndrop</p>
        </div>
      </div>
      <div className="dash-gradient h-[1px]"></div>
      <div className="flex justify-between items-center">
        <p className="text-custom-translucent-white-4 text-sm">
          Complete all Essential quests
        </p>
        <div className="rounded-full flex items-center justify-center h-4 w-4 text-custom-gray-50 border border-custom-translucent-white-1 bg-custom-translucent-white-05 backdrop-blur-[10px] ">
          <Icon id="check" size={12} />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-custom-translucent-white-4 text-sm">
          Complete at least 1 Alpha Hub quest today
        </p>
        <div className="rounded-full flex items-center justify-center h-4 w-4 text-custom-gray-50 border border-custom-translucent-white-1 bg-custom-translucent-white-05 backdrop-blur-[10px] ">
          <Icon id="check" size={12} />
        </div>
      </div>
      <button className="border border-custom-translucent-white-07 bg-custom-translucent-white-07 text-custom-translucent-white-6 rounded-lg py-[10px] w-full">
        Claim
      </button>
    </div>
  );
}

export default ExclusiveCommunite;
