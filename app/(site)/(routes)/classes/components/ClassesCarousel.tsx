"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Slider from "react-slick";

const ClassesCarousel = () => {
  const router = useRouter();

  return (
    <div className="sm:mt-[180px] md:mt-[150px] lg:mt-[300px] xl:mt-[380px] mt-[100px] transition-all">
      <Slider
        arrows
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
        <div className="bg-[url('/images/classes.png')] bg-cover w-full h-[300px] sm:h-[500px]">
          <div className="flex flex-col gap-y-8 items-center justify-center h-full text-white backdrop-brightness-75 uppercase text-3xl font-semibold">
            <h1>Fitness circuit</h1>
            <Button
              onClick={() => router.push("/classes/circuit")}
              className="bg-red-600 hover:bg-red-600/90 text-white text-lg"
            >
              explore
            </Button>
          </div>
        </div>

        <div className="bg-[url('/images/spin.png')] bg-bottom bg-cover  h-[300px] sm:h-[500px]">
          <div className="flex flex-col gap-y-8 items-center justify-center h-full text-white backdrop-brightness-75 uppercase text-3xl font-semibold">
            <h1>spin max</h1>
            <Button
              onClick={() => router.push("/classes/spin")}
              className="bg-red-600 hover:bg-red-600/90 text-white text-lg"
            >
              explore
            </Button>
          </div>
        </div>
        <div className="bg-[url('/images/yoga.png')] bg-cover bg-bottom h-[300px] sm:h-[500px]">
          <div className="flex flex-col gap-y-8 items-center justify-center h-full text-white backdrop-brightness-75 uppercase text-3xl font-semibold">
            <h1>yoga focus</h1>
            <Button
              onClick={() => router.push("/classes/yoga")}
              className="bg-red-600 hover:bg-red-600/90 text-white text-lg"
            >
              explore
            </Button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ClassesCarousel;
