import React from "react";
import { fb, insta, twitter, yt } from "../assets/icons";

export const Footer = () => {
  return (
    <section className="w-full bg-black text-white flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-4 px-10 py-14 lg:px-20 lg:py-28">
      <div className="flex flex-col justify-start gap-2 w-full lg:w-(40%)">
        <h1 className="text-custom-color font-bold text-4xl">Stratosphere Hosts</h1>
        <p className="text-lg text-slate-200">
        Join our community – Stay ahead in the digital cosmos. Follow us on social media for the latest trends, tips, and talks from the forefront of web hosting technology.
        </p>
        <div className="flex gap-4 mt-7" id="logos">
        <span className="bg-pink-200 p-2 rounded-full cursor-pointer hover:bg-pink-300">
          <img src={fb} alt="fb icon" width={20} height={20} />
        </span>
        <span className="bg-pink-200 p-2 rounded-full cursor-pointer hover:bg-pink-300">
          <img src={insta} alt="fb icon" width={20} height={20} />
        </span>
        <span className="bg-pink-200 p-2 rounded-full cursor-pointer hover:bg-pink-300">
          <img src={twitter} alt="fb icon" width={20} height={20} />
        </span>
        <span className="bg-pink-200 p-2 rounded-full cursor-pointer hover:bg-pink-300">
          <img src={yt} alt="fb icon" width={20} height={20} />
        </span>
      </div>
      </div>
      <div>
        <ul className="flex flex-col justify-center items-start lg:items-center w-full lg:w-[20%]">
          <h1 className="text-xl font-semibold">PAGES</h1>
          <li className="text-slate-300 cursor-pointer hover:text-pink-300">
            Home
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-pink-300">
            Services
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-pink-300">
            Testimonials
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-pink-300">
            Pricing
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-pink-300">
            Contact
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col justify-center items-start lg:items-center w-full lg:w-[20%]">
          <h1 className="text-xl font-semibold">PAGES</h1>
          <li className="text-slate-300 cursor-pointer hover:text-pink-300">
            Home
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-pink-300">
            Services
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-pink-300">
            Testimonials
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-pink-300">
            Pricing
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-pink-300">
            Contact
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col justify-center items-start lg:items-center w-full lg:w-[20%]">
          <h1 className="text-xl font-semibold">PAGES</h1>
          <li className="text-slate-300 cursor-pointer hover:text-pink-300">
            Home
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-pink-300">
            Services
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-pink-300">
            Testimonials
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-pink-300">
            Pricing
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-pink-300">
            Contact
          </li>
        </ul>
      </div>
    </section>
  );
};
