import Heading from "@/components/Heading";
import React from "react";
import ClassesSchedule from "../components/ClassesSchedule";
import { spin } from "../constants";
import JoinMembership from "../components/JoinMembership";

const SpinPage = () => {
  return (
    <section>
      <Heading
        title={"Spin Max"}
        description={
          "This is an indoor cycling class where we ride to the rhythm and pedal our way to an amazing workout! This indoor cycling experience is all about energizing music, motivational coaching, and a lot of fun on the bike."
        }
        video="/images/spinvid.mp4"
      />
      <div className="flex flex-col gap-y-10 md:px-20 sm:px-8 px-4 bg-neutral-950 md:mt-64 mt-28">
        <ClassesSchedule events={spin} title={"Spin Schedule"} />
      </div>
      <JoinMembership className="px-10" />
    </section>
  );
};

export default SpinPage;
