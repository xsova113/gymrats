"use client";

import Image from "next/image";
import Container from "./Container";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const JoinSection = () => {
  const router = useRouter();

  return (
    <Container className="flex flex-col md:flex-row items-center gap-x-4 md:gap-x-8 md:pt-20 pt-10 lg:mt-20 bg-neutral-950">
      <div className="flex-1 flex flex-col mx-auto">
        <h1 className="uppercase font-bold text-3xl sm:text-4xl md:5xl transition-all">
          it&apos;s never too late to start
        </h1>
        <span className="text-red-600 mt-6">
          starting at&nbsp;
          <span className="text-3xl lg:text-5xl font-bold">$12</span> /mo
        </span>
        <Separator className="mt-2" />
        <p className="mt-8 leading-loose">
          Unlock the door to a healthier, happier you with our Monthly Gym
          Membership. Designed to provide you with unlimited access to our
          state-of-the-art facilities, expert guidance, and a vibrant community,
          this membership is your key to achieving your fitness goals and
          embracing a holistic approach to well-being.
        </p>
        <Button
          onClick={() => router.push("/services/membership")}
          className="w-fit mt-10 px-8 py-6 hover:bg-red-600/90 bg-red-600 text-neutral-100 text-xl font-semibold"
        >
          Start Today
        </Button>
      </div>
      <div className="flex-1 relative w-full aspect-square">
        <div className="bg-gradient-to-l from-white/0 to-neutral-950 w-1/2 aspect-[1/2] left-0 absolute z-50" />
        <Image
          src={"/images/joinsection.png"}
          alt={"image"}
          fill
          className="object-cover"
        />
        <div className="bg-gradient-to-r from-white/0 to-neutral-950 w-1/2 aspect-[1/2] right-0 absolute" />
      </div>
    </Container>
  );
};

export default JoinSection;
