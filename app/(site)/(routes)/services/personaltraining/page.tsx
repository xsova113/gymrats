import Heading from "@/components/Heading";
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
      <div className="relative max-sm:bottom-28">
        <BookAssessment
          title={"Book a free session"}
          description={
            "Ready to kickstart your fitness journey with expert guidance? Don't miss your chance to claim a complimentary personal training session. Our certified trainers are here to tailor a workout plan just for you, helping you reach your goals faster and more effectively."
          }
          linkLabel={"Book Session"}
          image={"/images/ptimage.png"}
        />
        <div className="relative max-sm:bottom-14">
          <PtBios />
        </div>
      </div>
    </section>
  );
};

export default PersonalTrainingPage;
