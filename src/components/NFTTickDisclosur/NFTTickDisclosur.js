import Image from "next/image";
import Icon from "../Icon";

function NFTTickDisclosur({ tickdata }) {
  const { img, height, width, alt, title, descriptionPart1, descriptionPart2 } =
    tickdata;
  return (
    <>
      <div className="mx-auto w-fit flex flex-col items-start gap-4">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 rounded-full flex items-center justify-center border border-custom-translucent-white-2 bg-custom-translucent-white-05 text-custom-gray-50">
            <Icon id="check" size={28} />
          </div>
          <div className="relative rounded-3xl w-fit p-[6px] border border-custom-translucent-white-2 bg-custom-black-800 ">
            <div className="rounded-[20px] w-[147px] h-[165px] overflow-hidden">
              <Image
                src={img}
                height={height}
                width={width}
                alt={alt}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="absolute -bottom-9 -right-5 h-12 w-12 rounded-full flex items-center justify-center border border-custom-translucent-white-2 bg-custom-black-800 text-custom-gray-50 mb-4">
              <Icon id="lock" size={22} />
            </div>
          </div>
        </div>
        <div>
          <p className="text-custom-translucent-white-6 text-xl mb-1">
            {title}
          </p>
          <p className="text-custom-translucent-white-2 mb-3">
            {descriptionPart1}
            <br /> {descriptionPart2}
          </p>
          <button className="bg-custom-translucent-white-05 pointer-events-none border border-custom-translucent-white-05 rounded-lg w-[160px] py-[10px] text-custom-translucent-white-4">
            Clam
          </button>
        </div>
      </div>
    </>
  );
}

export default NFTTickDisclosur;
