import Heading from "@/components/Heading";
import HowWeStarted from "./components/HowWeStarted";
import OurMission from "./components/OurMission";
import Gallery from "./components/Gallery";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutPage = () => {
  return (
    <section>
      <Heading
        title={"About Us"}
        description={
          "Culpa pariatur qui velit qui amet nisi aliquip sunt consectetur eu anim sint. Cillum aute anim est proident eu sunt tempor ut cupidatat enim enim ut irure est. Incididunt sunt aliquip occaecat aliquip commodo dolor."
        }
        image="/images/aboutimg.png"
      />
      <HowWeStarted />
      <OurMission />
      <Gallery />
      <div className="flex flex-col gap-y-8 text-center mt-14">
        <h1 className="uppercase md:text-4xl text-3xl font-bold">
          Ready to join?
        </h1>
        <p>
          Contact us to get your&nbsp;
          <span className="text-red-600">3 days free trial</span> today!
        </p>
        <Link href={"/contact"}>
          <Button className="uppercase font-semibold bg-red-600 hover:bg-red-600/80 text-neutral-100">
            Contact us
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default AboutPage;
