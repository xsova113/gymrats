import React from "react";
import Container from "./Container";
import { Target } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section>
      <Container className="flex mt-20 bg-red-600 py-24">
        <div className="flex flex-col text-center w-full relative">
          <Target size={300} className="absolute top-0 text-black/10" />
          <h1 className="uppercase lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold z-10">
            true gymrats know our mission
          </h1>
          <p className="md:w-1/2 w-2/3 self-center my-10 text-stone-200">
          At Gymrats, our mission is to empower individuals on their journey to holistic well-being, fostering a community of health, vitality, and personal growth. We are committed to providing a sanctuary where every step taken, every goal achieved, and every challenge overcome leads to a more enriched and fulfilling life.
          </p>

          <Link
            className="capitalize w-fit z-10 text-lg px-6 py-3 rounded-lg transition self-center bg-stone-900 hover:bg-stone-900/80 text-stone-200"
            href={"/about"}
          >
            learn more
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
