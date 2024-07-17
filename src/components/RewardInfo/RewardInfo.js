import Icon from "../Icon";

function RewardInfo() {
  return (
    <div className="translate-y-12 h-fit rounded-[6px] border border-custom-translucent-white-2 bg-custom-black-800">
      <div className="flex items-center gap-1 px-4 py-3 text-custom-translucent-white-4 border-b border-custom-translucent-white-05">
        <p className="md:text-sm">Reward info</p>
        <Icon id="info" size={16} />
      </div>
      <div className="p-4 flex flex-col text-lg md:text-base gap-4">
        <p className="text-custom-gray-100">
          Free access to paid KOL (crypto earning) communities!
        </p>
        <p className="text-custom-gray-700">
          Win access to exclusive earning communities of some of the the
          greatest earners in crypto for a month, every 24 hours. Get access to
          unmatched insights, a close-knit community of the best airdrop
          earners, and more.
        </p>
        <p className="text-custom-gray-700">
          To win: make sure you've connected your Twitter and Discord accounts -
          and follow our criteria!
        </p>
      </div>
    </div>
  );
}

export default RewardInfo;
