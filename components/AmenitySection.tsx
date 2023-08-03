"use client";

import Image from "next/image";
import Container from "./Container";
import { Parallax } from "react-scroll-parallax";
import AmenityCard from "./AmenityCard";
import { Bike, Dumbbell, HeartPulse, RollerCoaster, Users } from "lucide-react";

const cardsInfo = [
  {
    title: "cardio zone",
    description:
      "In tempor sunt sunt eiusmod anim Lorem sunt eiusmod eiusmod sint id ea. Aute deserunt exercitation ipsum cillum exercitation.",
    icon: HeartPulse,
  },
  {
    title: "weights zone",
    description:
      "Ullamco ea sint dolor laborum laboris dolor. Aliqua elit proident dolor mollit duis et esse in duis labore quis in.",
    icon: Dumbbell,
  },
  {
    title: "cycling zone",
    description:
      "Sit aliquip aliqua deserunt enim qui consectetur laboris. Sunt qui ex non est pariatur velit cillum reprehenderit aliquip mollit adipisicing laboris duis dolore.",
    icon: Bike,
  },
  {
    title: "class studio",
    description:
      "Non eu et mollit aliqua quis consequat et velit sunt laborum in labore. Nisi amet aliquip mollit magna.",
    icon: Users,
  },
];

const AmenitySection = () => {
  return (
    <section className="max-sm:bg-neutral-900">
      <Parallax
        scale={[1, 1.5]}
        speed={-25}
        opacity={[0, 1]}
        className="absolute w-full h-[600px] -z-10 hidden sm:block "
      >
        <Image
          src={"/images/amenities.png"}
          alt={"bg-image"}
          fill
          className="object-cover"
          priority
        />
      </Parallax>
      <Container className="flex justify-center py-20">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold capitalize transition-all mb-10 lg:mb-20">
            our amenities
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {cardsInfo.map((item) => (
              <AmenityCard
                title={item.title}
                description={item.description}
                key={item.title}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AmenitySection;
