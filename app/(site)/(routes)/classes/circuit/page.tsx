import Heading from "@/components/Heading";
import React from "react";
import ClassesSchedule from "../components/ClassesSchedule";
import { fitnessCircuit } from "../constants";
import JoinMembership from "../components/JoinMembership";

const CircuitPage = () => {
  return (
    <section>
      <Heading
        title={"Fitness Circuit"}
        description={
          "High intensity fitness circuit class for people who's looking to sweat it out and shred down body fat! This high-energy workout is designed to give you a total body challenge while keeping things fun and engaging."
        }
        video="/images/fitcircuit.mp4"
      />
      <div className="flex flex-col gap-y-10 md:px-20 sm:px-8 px-4 bg-neutral-950 md:mt-64 mt-28">
        <ClassesSchedule
          events={fitnessCircuit}
          title={"Fitness Circuit Schedule"}
        />
      </div>
      <JoinMembership className="px-10" />
    </section>
  );
};

export default CircuitPage;
