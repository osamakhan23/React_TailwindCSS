import React, { useEffect, useState } from "react";
import { menu, close } from "../assets/icons";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [iconToggle, setIconToggle] = useState(false);
  const [menuClass, setMenuClass] = useState("");

  const toggleMenu = () => {
    setToggle(!toggle);
  };
  const toggleIcon = () => {
    setIconToggle(!iconToggle);
  };

  useEffect(() => {
    setMenuClass(
      toggle
        ? "transition-opacity ease-in-out dureation-300 transform translate-y-0 opacity-100"
        : "transition-opacity ease-in-out duration-300 transform -translate-y-full opacity-0"
    );
  }, [toggle]);
  return (
    <section className="w-full bg-black text-white flex justify-between items-center px-8 py-6 lg:px-16 sticky top-0 z-40">
      <h1 className="text-custom-color text-3xl font-bold">
        Stratosphere Hosts
      </h1>
      <div className="hidden lg:flex justify-end items-center gap-2">
        <ul className="flex justify-center items-center gap-3">
          <li className="text-lg text-white cursor-pointer rounded-sm px-5 py-2 hover:bg-custom-color hover:text-white active:text-white">
            <a href="/">Home</a>
          </li>
          <li className="text-lg text-white cursor-pointer rounded-sm px-5 py-2 hover:bg-custom-color hover:text-white active:text-white">
            <a href="#services">Services</a>
          </li>
          <li className="text-lg text-white cursor-pointer rounded-sm px-5 py-2 hover:bg-custom-color hover:text-white active:text-white">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="text-lg text-white cursor-pointer rounded-sm px-5 py-2 hover:bg-custom-color hover:text-white active:text-white">
            <a href="#pricing">Pricing</a>
          </li>
          <li className="text-lg text-white cursor-pointer rounded-sm px-5 py-2 hover:bg-custom-color hover:text-white active:text-white">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex lg:hidden flex-col">
        {iconToggle ? (
          <img
            src={close}
            alt="close icon"
            width={40}
            height={40}
            onClick={() => {
              toggleMenu();
              toggleIcon();
            }}
          />
        ) : (
          <img
            src={menu}
            alt="menu icon"
            width={40}
            height={40}
            onClick={() => {
              toggleMenu();
              toggleIcon();
            }}
          />
        )}

        {toggle && (
          <div
            id="mob-menu"
            className={`bg-pink-100 text-white py-4 absolute top-20 right-0 w-full ${menuClass}`}
          >
            <ul className="flex flex-col justify-center items-center gap-2">
              <li className="text-xl text-white font-semibold hover:bg-custom-color hover:text-white w-full py-3 text-center cursor-pointer">
                <a href="/">Home</a>
              </li>
              <li className="text-xl text-white font-semibold hover:bg-custom-color hover:text-white w-full py-3 text-center cursor-pointer">
                <a href="#services">Services</a>
              </li>
              <li className="text-xl text-white font-semibold hover:bg-custom-color hover:text-white w-full py-3 text-center cursor-pointer">
                <a href="#testimonials">Testimonials</a>
              </li>
              <li className="text-xl text-white font-semibold hover:bg-custom-color hover:text-white w-full py-3 text-center cursor-pointer">
                <a href="#pricing">Pricing</a>
              </li>
              <li className="text-xl text-white font-semibold hover:bg-custom-color hover:text-white w-full py-3 text-center cursor-pointer">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};
