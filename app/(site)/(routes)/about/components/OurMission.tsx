import { Goal } from "lucide-react";
import Image from "next/image";

const OurMission = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center bg-neutral-950 px-10 max-md:py-20">
      <div className="flex flex-col flex-1 gap-8 md:items-end max-md:mb-4">
        <h1 className="md:text-3xl text-2xl uppercase font-semibold text-red-600">
          Our Mission
        </h1>
        <p className="w-4/5 text-neutral-300">
          Adipisicing consectetur est do aute ad exercitation sunt id culpa
          Lorem commodo. Ea nulla irure exercitation exercitation ad. Excepteur
          incididunt ullamco fugiat dolor culpa cupidatat reprehenderit eu
          consectetur. Exercitation in qui nulla exercitation ad minim ipsum et
          laboris cupidatat dolor.
        </p>
      </div>
      <div className="relative w-full aspect-video flex-1">
        <Image src={"/images/ourmission.png"} alt={"image"} fill />
      </div>
    </div>
  );
};

export default OurMission;
