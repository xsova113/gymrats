import Heading from "@/components/Heading";
import React from "react";
import ClassesCarousel from "./components/ClassesCarousel";
import ClassesSchedule from "./components/ClassesSchedule";
import JoinMembership from "./components/JoinMembership";
import { events } from "./constants";

const ClassesPage = () => {
  return (
    <section className="md:px-10 px-8">
      <Heading
        title="fitness classes"
        description="Meet new friends, share energy and motivate each others!"
        video="/images/fitnessclass.mp4"
      />
      <ClassesCarousel />
      <ClassesSchedule events={events} title={"All Classes Schedule"} />
      <JoinMembership />
    </section>
  );
};

export default ClassesPage;
