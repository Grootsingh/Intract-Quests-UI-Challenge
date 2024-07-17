import Timeout from "../Timeout";
import ExclusiveCommunite from "../ExclusiveCommunite";
import RewardInfo from "../RewardInfo";

function RewardUnlock() {
  return (
    <section className="min-h-[46rem]">
      <div className="mx-auto mt-[13.5rem] lg:mt-[5.5rem] xl-1260:mt-0  w-fit flex flex-col gap-0 md:flex-row md:gap-16 xl-1200:translate-x-[13rem]">
        <div className="max-w-[400px] md:w-[320px]">
          <Timeout />
          <ExclusiveCommunite />
        </div>
        <div className="relative md:w-[312px] max-w-[400px] h-fit -mt-7 md:mt-0">
          <RewardInfo />
          <div className="hidden md:block absolute -z-[1] -translate-x-1/2 -bottom-[10.75rem] border-r w-[20rem] h-[10rem] border-b border-custom-translucent-white-2 rounded-md"></div>
        </div>
      </div>
    </section>
  );
}

export default RewardUnlock;
