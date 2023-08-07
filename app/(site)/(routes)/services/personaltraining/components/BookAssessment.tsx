import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BookAssessmentProps {
  title: string;
  description: string;
  linkLabel: string;
  image: string;
}

const BookAssessment = ({
  description,
  image,
  linkLabel,
  title,
}: BookAssessmentProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-y-10 bg-neutral-950 h-full py-20 px-10 md:mt-[250px] mt-[150px]">
      <div className="flex-1">
        <h1 className="uppercase md:text-2xl text-xl font-semibold">{title}</h1>
        <div className="flex mt-8 mb-10 w-4/5 text-white/80">{description}</div>
        <Link
          href={"/contact"}
          className="bg-red-600 uppercase rounded-lg hover:bg-red-600/80 transition text-white hover:text-white/90 text-lg px-6 py-4"
        >
          {linkLabel}
        </Link>
      </div>
      <div className="flex-1 relative w-full aspect-video bg-black">
        <div className="bg-gradient-to-r from-white/0 to-neutral-950 absolute z-10 w-1/3 right-0 aspect-[9/16]" />
        <Image
          src={image}
          alt={"image"}
          fill
          className="object-cover object-right opacity-70"
        />
        <div className="bg-gradient-to-l from-white/0 to-neutral-950 absolute z-10 w-1/3 aspect-[9/16]" />
      </div>
    </div>
  );
};

export default BookAssessment;
