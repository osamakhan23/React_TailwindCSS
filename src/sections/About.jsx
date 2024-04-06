import React from "react";
import { AboutGrid } from "../components/AboutGrid";
import { aboutgrids } from "../exports";

export const About = () => {
  return (
    <section
      id="services"
      className="w-full bg-slate-200 flex flex-col lg:flex-row gap-10 lg:gap-20 h-fit px-7 py-4 lg:px-16 lg:py-12"
    >
      <div className="flex justify-center items-start flex-col gap-8 lg:w-1/2">
        <h1 className="text-custom-color font-bold text-6xl">
          Unleash the Power of Superior Web Hosting.
        </h1>
        <p className="text-slate-05 text-2xl">
          Discover a hosting solution that combines performance, reliability,
          and the ultimate peace of mind. Join us, and ensure your website's
          journey is first-class.
        </p>
        <div className="flex justify-center items-center gap-7">
          <button className="bg-custom-color text-white px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer">
            Read More
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center w-full lg:w-1/2 flex-wrap">
        {aboutgrids.map(
          (
            grid,
            index // index is used as key if label is not unique
          ) => (
            <div key={index} className="w-full lg:w-1/2">
              <AboutGrid {...grid} />
            </div>
          )
        )}
      </div>
    </section>
  );
};
