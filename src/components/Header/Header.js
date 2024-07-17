import Navigation from "./Navigation";
import Icon from "../Icon";
import Image from "next/image";

function Header() {
  return (
    <>
      <header className="sticky top-0 backdrop-blur-[5px] bg-custom-translucent-black z-30 border-custom-translucent-white-12 border-b h-16">
        <div className="max-w-[1284px] h-full m-auto flex items-center px-4">
          <Image
            src="/logo.svg"
            height={20}
            width={97}
            className="w-[70px] xsm:w-[97px] mr-10"
            alt="logo"
          />
          <div className="flex gap-2 min-w-0 xsm:flex-1 ml-auto xsm:ml-0 items-center h-full">
            <div className="hidden lg:flex ml-auto gap-8 items-center pr-6 h-full">
              <Navigation />
            </div>
            <SearchBox />
            <button className="text-orange-400 shrink-0 rounded-full border-2 border-orange-400 w-[42px] h-[42px] grid place-content-center">
              <Icon id="tv" size="16" />
            </button>
            <button className="text-sm px-3 py-1 sm:px-6 sm:py-2 sm:rounded-md bg-white hover:bg-gray-200 rounded-sm whitespace-nowrap font-semibold text-custom-black-1000">
              Sign In
            </button>
            <Icon id="menu" className={"sm:hidden"} />
          </div>
        </div>
      </header>
      <SubHeader />
    </>
  );
}

export default Header;

function SearchBox() {
  return (
    <>
      <div className="group h-[42.5px] focus-within:ring-1 ring-white  min-w-[110px] ml-auto lg:ml-0 max-w-[340px] lg:max-w-none flex-1 hidden rounded-full xsm:flex justify-between items-center px-4 bg-custom-translucent-white-07 border border-custom-translucent-white-05 overflow-hidden">
        <Icon
          id="search"
          className={"text-custom-gray-55 group-focus-within:text-white"}
          size={20}
          strokeWidth={2.5}
        />
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="search"
          className="bg-transparent min-w-0  flex-1 ml-3 outline-none font-semibold text-sm placeholder:text-custom-gray-55"
          placeholder="Search for ecosystems, trending quests etc.."
        />
      </div>
    </>
  );
}

function SubHeader() {
  return (
    <header className="hidden xsm:block lg:hidden border-custom-translucent-white-12 border-b h-16">
      <div className="max-w-[1284px] h-full m-auto flex items-center px-4">
        <div className="flex  gap-8 items-center mx-auto h-full">
          <Navigation />
        </div>
      </div>
    </header>
  );
}
