import React from "react";
import { call, fb, insta, map, sms, twitter, yt } from "../assets/icons";

export const Contact = () => {
  return (
    <>
    <section
      id="contact"
      className="w-full bg-slate-200 flex flex-col lg:flex-row gap-10 lg:gap-20 h-fit p-4 lg:p-20 justify-center items-center"
    >
      <div className="flex justify-center items-start w-full lg:w-3/4 flex-col lg:flex-row bg-white rounded-lg px-8 py-12 gap-10 z-20">
        <div className="flex flex-col justify-center items-start gap-4 w-full">
          <h1 className="text-custom-color font-bold text-[35px]">
            Contact Info
          </h1>
          <div
            id="phone"
            className="flex justify-center items-center gap-4 text-lg font-semibold text-gray-600"
          >
            <span className="bg-pink-200 p-3 rounded-full">
              <img src={call} alt="call icon" width={22} height={22} />
            </span>
            +123 456 7890
          </div>
          <div
            id="phone"
            className="flex justify-center items-center gap-4 text-lg font-semibold text-gray-600"
          >
            <span className="bg-pink-200 p-3 rounded-full">
              <img src={sms} alt="mail icon" width={22} height={22} />
            </span>
            info@example.com
          </div>
          <div
            id="phone"
            className="flex justify-center items-center gap-4 text-lg font-semibold text-gray-600"
          >
            <span className="bg-pink-200 p-3 rounded-full">
              <img src={map} alt="address icon" width={22} height={22} />
            </span>
            123 Main St, Anytown, AT 12345
          </div>
          <div
            id="logos"
            className="flex justify-center items-center gap-4 mt-10"
          >
            <span className="bg-pink-200 p-3 rounded-full cursor-pointer hover:bg-pink-300">
              <img src={fb} alt="facebook icon" width={25} height={25} />
            </span>
            <span className="bg-pink-200 p-3 rounded-full cursor-pointer hover:bg-pink-300">
              <img src={insta} alt="Instagram icon" width={25} height={25} />
            </span>
            <span className="bg-pink-200 p-3 rounded-full cursor-pointer hover:bg-pink-300">
              <img src={twitter} alt="Twitter icon" width={25} height={25} />
            </span>
            <span className="bg-pink-200 p-3 rounded-full cursor-pointer hover:bg-pink-300">
              <img src={yt} alt="YouTube icon" width={25} height={25} />
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-full">
          <input
            type="text"
            placeholder="Enter your name"
            className="px-4 py-4 w-full border-2 border-pink-200 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-pink-400"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-4 w-full border-2 border-pink-200 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-pink-400"
          />
          <textarea
            className="px-4 py-4 w-full border-2 border-pink-200 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-pink-400"
            id="..."
            cols="30"
            rows="5"
            placeholder="Enter your message"
          ></textarea>
          <button className="bg-custom-color text-white px-4 py-3 w-full rounded-lg hover:bg-black cursor-pointer">
            SUBMIT
          </button>
        </div>
      </div>
    </section>
    </>
  );
};
