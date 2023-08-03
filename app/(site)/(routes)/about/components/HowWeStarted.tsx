import Image from "next/image";

const HowWeStarted = () => {
  return (
    <div className="flex flex-col md:flex-row mt-[180px] md:mt-[250px] items-center bg-neutral-950 px-10 max-md:pt-10">
      <div className="flex flex-col flex-1 gap-8 max-md:mb-4">
        <h1 className="md:text-3xl text-2xl uppercase font-semibold text-red-600">
          Who we are
        </h1>
        <p className="w-4/5 text-neutral-300">
          Qui ullamco et officia enim fugiat ut duis deserunt dolore cillum.
          Ullamco culpa quis dolor ea elit exercitation in ipsum mollit. Cillum
          in non ea duis enim fugiat Lorem ex est ullamco officia laboris esse.
          Laboris qui magna ea deserunt proident nisi veniam aute ad.
        </p>
      </div>
      <div className="relative w-full aspect-video flex-1">
        <Image src={"/images/whoweare.png"} alt={"image"} fill />
      </div>
    </div>
  );
};

export default HowWeStarted;
