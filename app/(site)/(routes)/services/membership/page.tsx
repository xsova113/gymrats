import Heading from "@/components/Heading";
import PriceCard from "./components/PriceCard";

const MembershipPage = () => {
  return (
    <section className="flex flex-col max-sm:pt-20">
      <Heading
        title={"Join membership"}
        description={
          "Unlock a world of fitness, wellness, and community by becoming a member of our GYMRATS family."
        }
        video="/images/membership.mp4"
      />
      <PriceCard />
    </section>
  );
};

export default MembershipPage;
