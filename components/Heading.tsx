"use client";

import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

interface HeadingProps {
  title: string;
  description: string;
  image?: string;
  video?: string;
}

const Heading = ({ title, image, description, video }: HeadingProps) => {
  return (
    <div>
      <Parallax
        speed={-30}
        opacity={[1.5, -0.5]}
        className="absolute inset-0 w-full -z-10 max-sm:mt-24"
      >
        {video && (
          <video
            src={video}
            about="fitness_class"
            autoPlay
            loop
            className="scale-105"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={"image"}
            fill
            className="object-cover object-bottom"
            priority
          />
        )}
      </Parallax>
      <div className="flex flex-col gap-y-8 items-center pt-10 sm:pt-20 md:pt-52">
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold uppercase">
          {title}
        </h1>
        <p className="text-stone-200 md:text-xl sm:text-lg text-base w-2/3 capitalize text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Heading;
