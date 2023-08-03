import Heading from "@/components/Heading";
import React from "react";
import PtBios from "./components/PtBios";
import BookAssessment from "./components/BookAssessment";

const PersonalTrainingPage = () => {
  return (
    <section className="max-sm:pt-20">
      <Heading
        title={"Personal Training"}
        description={
          "Looking to take your fitness to the next level? check out our personal trainers and book a free fitness assessment."
        }
        video="/images/ptvid.mp4"
      />
      <BookAssessment />
      <PtBios />
    </section>
  );
};

export default PersonalTrainingPage;
