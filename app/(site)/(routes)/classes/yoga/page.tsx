import Heading from "@/components/Heading";
import React from "react";
import ClassesSchedule from "../components/ClassesSchedule";
import JoinMembership from "../components/JoinMembership";
import { yoga } from "../constants";

const YogaPage = () => {
  return (
    <section>
      <Heading
        title={"Yoga Focus"}
        description={
          "Join our invigorating yoga class to find balance and serenity through a harmonious blend of poses, breathing techniques, and meditation. Suitable for all levels, our experienced instructors will guide you on a journey of physical and mental well-being."
        }
        video="/images/yogavid.mp4"
      />
      <div className="flex flex-col gap-y-10 md:px-20 sm:px-8 px-4 bg-neutral-950 md:mt-64 mt-28">
        <ClassesSchedule events={yoga} title={"Yoga Schedule"} />
      </div>
      <JoinMembership className="px-10" />
    </section>
  );
};

export default YogaPage;
