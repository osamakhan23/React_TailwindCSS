import React from "react";
import { clients } from "../exports";
import { ClientGrid } from "../components/ClientGrid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <section
      id="testimonials"
      className="w-full flex flex-col gap-5 h-fit p-7 lg:p-20"
    >
      <p className="text-center text-xl">Testimonials</p>
      <h1 className="text-custom-color font-bold text-6xl text-center leading-[68px]">
        What Clients Say
      </h1>
      <p className="text-slate-950 text-2xl text-center">
        Our clients' success stories speak volumes about our dedication and
        expertise.
        <br /> Discover how we’ve crafted a unique digital experience for
        businesses across various industries, elevating their online presence
        and driving growth.
      </p>
      <div className="mt-5 w-full">
        <Slider {...settings}>
          {clients.map((client) => (
            <div key={client.name}>
              <ClientGrid {...client} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};