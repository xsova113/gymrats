import Image from "next/image";

const HowWeStarted = () => {
  return (
    <div className="flex flex-col md:flex-row mt-[180px] md:mt-[250px] items-center bg-neutral-950 px-10 max-md:pt-10">
      <div className="flex flex-col flex-1 gap-8 max-md:mb-4">
        <h1 className="md:text-3xl text-2xl uppercase font-semibold text-red-600">
          Who we are
        </h1>
        <p className="w-4/5 text-neutral-300">
          Founded with a vision to redefine fitness, we believe that true health
          encompasses not only physical strength, but also mental clarity and
          emotional balance. Our dedicated team of certified trainers and
          wellness experts is committed to guiding you through this holistic
          approach, helping you achieve a harmonious blend of vitality,
          resilience, and confidence.
        </p>
      </div>
      <div className="relative w-full aspect-video flex-1">
        <Image src={"/images/whoweare.png"} alt={"image"} fill />
      </div>
    </div>
  );
};

export default HowWeStarted;
