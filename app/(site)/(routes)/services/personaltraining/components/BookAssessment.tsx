import Image from "next/image";
import Link from "next/link";
import React from "react";

const bookAssessment = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-x-14 gap-y-10 bg-neutral-950 h-full py-20 px-10 md:mt-[250px] mt-[150px]">
      <div className="flex-1">
        <h1 className="uppercase md:text-2xl text-xl font-semibold">
          Book a free session
        </h1>
        <div className="flex mt-8 mb-10 w-4/5 text-white/80">
          Consequat minim nisi fugiat ullamco culpa ullamco deserunt
          exercitation anim amet officia sunt quis sit. Ad incididunt tempor
          laboris dolore ad. Do in aliquip nulla aliquip deserunt et amet. Enim
          dolor ut in occaecat minim officia. Lorem minim sunt esse ullamco ex
          laboris qui qui duis.
        </div>
        <Link
          href={"/contact"}
          className="bg-red-600 rounded-lg hover:bg-red-600/80 transition text-white hover:text-white/90 text-lg px-6 py-4"
        >
          Book Session
        </Link>
      </div>
      <div className="flex-1 relative w-full aspect-video bg-black">
        <div className="bg-gradient-to-r from-white/0 to-neutral-950 absolute z-10 w-1/3 right-0 aspect-[9/16]" />
        <Image
          src={"/images/ptimage.png"}
          alt={"image"}
          fill
          className="object-cover object-right opacity-70"
        />
        <div className="bg-gradient-to-l from-white/0 to-neutral-950 absolute z-10 w-1/3 aspect-[9/16]" />
      </div>
    </div>
  );
};

export default bookAssessment;
