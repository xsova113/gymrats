import Heading from "@/components/Heading";
import React from "react";
import BookAssessment from "../personaltraining/components/BookAssessment";
import WhatYouGet from "./components/WhatYouGet";

const NutritionPage = () => {
  return (
    <section className="max-sm:pt-20">
      <Heading
        title={"nutrition consultation"}
        description={
          "Unlock a healthier you with a customized nutrition consultation. Our expert dietitian will design a personalized plan to fuel your goals and boost your well-being."
        }
        image="/images/nutrition1.png"
      />
      <BookAssessment
        title={"Book free nutrition consultation"}
        description={
          "Embark on a journey to better health and vitality through our comprehensive nutrition consultation. In this insightful session, our skilled dietitian will delve into your unique needs, preferences, and objectives. By analyzing your current dietary patterns and lifestyle, we will craft a targeted nutrition roadmap tailored exclusively for you. "
        }
        linkLabel={"Book Consultation"}
        image={"/images/nutrition-consultation.png"}
      />
      <WhatYouGet />
    </section>
  );
};

export default NutritionPage;
