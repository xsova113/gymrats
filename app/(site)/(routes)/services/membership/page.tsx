import Heading from "@/components/Heading";
import PriceCard from "./components/PriceCard";

const MembershipPage = () => {
  return (
    <section className="flex flex-col max-sm:pt-20">
      <Heading
        title={"Join membership"}
        description={
          "Nisi officia Lorem cupidatat adipisicing consectetur cillum esse sint elit excepteur nulla excepteur laboris ad."
        }
        video="/images/membership.mp4"
      />
      <PriceCard />
    </section>
  );
};

export default MembershipPage;
