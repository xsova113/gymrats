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
          Our mission is to provide you with a fitness sanctuary where you can
          thrive physically, mentally, and emotionally. From personalized
          training programs to invigorating group classes, we offer a diverse
          range of options to cater to your unique needs and preferences.
        </p>
      </div>
      <div className="relative w-full aspect-video flex-1">
        <Image src={"/images/ourmission.png"} alt={"image"} fill />
      </div>
    </div>
  );
};

export default OurMission;
