import React from "react";
import { Spotlight } from "../../ui/Spotlight";
import { useGetHeader } from "../../hooks/headerHook/useGetHeader";
import HeaderSkeleton from "./HeaderSkeleton";
function Header() {
  const { data, isLoading, isError, error } = useGetHeader();
  if (isLoading) return <HeaderSkeleton />;
  if (isError)
    return (
      <div className="text-red-500 text-2xl text-center py-5">
        Error: {error.message}
      </div>
    );
  return (
    <div
      style={{ background: "url(./assets/lighter.svg)" }}
      className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-[000319/0.80] antialiased bg-grid-white/[0.02] relative overflow-hidden"
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <Spotlight
        className="-top-40 left-0 md:-left-44 md:-top-10"
        fill="white"
      />

      {data.map((item) => (
        <div className="p-4 max-w-7xl flex justify-center items-center flex-col  mx-auto relative z-10  w-full pt-20 md:pt-0 font-inter">
          <h3 className="text-sm md:text-base font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            {item.top_title}
          </h3>
          <h1 className="text-sm md:text-7xl text-center font-semibold text-white w-[80%]">
            {item.middle_title.split("User Experience").map((part, index) => (
              <div key={index}>
                {part}
                {index <
                  item.middle_title.split("User Experience").length - 1 && (
                  <span className="text-[#CBACF9]">User Experience</span>
                )}
              </div>
            ))}
          </h1>
          <p className="mt-4 font-semibold text-base text-neutral-300 max-w-lg text-center mx-auto">
            {item.bottom_title}
          </p>
        </div>
      ))}
    </div>
  );
}
export default Header;
