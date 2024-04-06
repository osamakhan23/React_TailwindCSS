import React from "react";
import { tick } from "../assets/icons";
import { pricing } from '../exports'
import { PriceGrid } from '../components/PriceGrid'

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="w-full bg-slate-200 flex flex-col justify-center items-start h-fit px-7 py-14 lg:px-20 gap-5"
    >
      <h1 className="text-custom-color font-bold text-6xl">
        Choose Your Path to Digital Success.
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 justify-between items-start w-full mt-5">
        <p className="text-slate-950 text-2xl">
          Explore our range of plans designed to fit every need and budget.
          Whether you're starting out or scaling up, we have the perfect plan
          for you.
        </p>
        <div className="w-full lg:w-2/4">
          <ul className="flex flex-col justify-center items-start gap-4">
            <li className="flex justify-center items-center gap-4 text-2xl text-gray-800">
              <span className="bg-pink-200 p-1 rounded-full fill-white">
                <img src={tick} alt="tick" width={30} height={30} />
              </span>
              Unlimited Pages
            </li>
            <li className="flex justify-center items-center gap-4 text-2xl text-gray-800">
              <span className="bg-pink-200 p-1 rounded-full fill-white">
                <img src={tick} alt="tick" width={30} height={30} />
              </span>
              Unlimited Pages
            </li>
            <li className="flex justify-center items-center gap-4 text-2xl text-gray-800">
              <span className="bg-pink-200 p-1 rounded-full fill-white">
                <img src={tick} alt="tick" width={30} height={30} />
              </span>
              Unlimited Pages
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-2/4">
          <ul className="flex flex-col justify-center items-start gap-4">
            <li className="flex justify-center items-center gap-4 text-2xl text-gray-800">
              <span className="bg-pink-200 p-1 rounded-full fill-white">
                <img src={tick} alt="tick" width={30} height={30} />
              </span>
              Unlimited Pages
            </li>
            <li className="flex justify-center items-center gap-4 text-2xl text-gray-800">
              <span className="bg-pink-200 p-1 rounded-full fill-white">
                <img src={tick} alt="tick" width={30} height={30} />
              </span>
              Unlimited Pages
            </li>
            <li className="flex justify-center items-center gap-4 text-2xl text-gray-800">
              <span className="bg-pink-200 p-1 rounded-full fill-white">
                <img src={tick} alt="tick" width={30} height={30} />
              </span>
              Unlimited Pages
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-around items-center flex-wrap gap-10 mt-20">
        {pricing.map((price) => (
          <div className="w-96" key={price.plan}>
            <PriceGrid {...price} />
          </div>
        ))}
      </div>
    </section>
  );
};
