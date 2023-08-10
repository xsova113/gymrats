"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import Slider from "react-slick";

const Heading = () => {
  return (
    <Parallax>
      <Slider
        arrows={false}
        dots
        appendDots={(dots) => (
          <div>
            <ul style={{ WebkitTextFillColor: "white" }}>{dots}</ul>
          </div>
        )}
        infinite
        autoplay
        autoplaySpeed={3000}
        slidesToScroll={1}
        slidesToShow={1}
      >
        <div className="bg-[url('/images/supplement1.png')] bg-cover w-full h-[300px] sm:h-[500px]">
          <div className="flex flex-col gap-y-8 items-center backdrop-brightness-75 justify-center h-full">
            <h1 className="text-white uppercase text-3xl font-semibold">
              Supplements
            </h1>
            <p className="w-1/2">
              Discover a wide range of <span className="text-red-600 font-semibold">high-quality</span> supplements
              designed to support your health and wellness journey. From
              vitamins and minerals to specialized blends, our supplements are
              crafted with care to help you achieve your goals and live your
              best life. Explore our selection and enhance your well-being
              today!
            </p>
          </div>
        </div>

        <div className="bg-[url('/images/whey.png')] bg-bottom bg-cover  h-[300px] sm:h-[500px]">
          <div className="flex flex-col gap-y-8 items-center justify-center h-full text-white backdrop-brightness-75 uppercase text-3xl font-semibold">
            <h1>Whey Protein</h1>
            <Button className="bg-red-600 hover:bg-red-600/90 text-white text-lg">
              explore
            </Button>
          </div>
        </div>
        <div className="bg-[url('/images/preworkout.png')] bg-cover bg-bottom h-[300px] sm:h-[500px]">
          <div className="flex flex-col gap-y-8 items-center justify-center h-full text-white backdrop-brightness-75 uppercase text-3xl font-semibold">
            <h1>Pre-workout</h1>
            <Button className="bg-red-600 hover:bg-red-600/90 text-white text-lg">
              explore
            </Button>
          </div>
        </div>
      </Slider>
    </Parallax>
  );
};

export default Heading;
