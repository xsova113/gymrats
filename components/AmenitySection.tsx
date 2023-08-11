"use client";

import Image from "next/image";
import Container from "./Container";
import { Parallax } from "react-scroll-parallax";
import AmenityCard from "./AmenityCard";
import { Bike, Dumbbell, HeartPulse, RollerCoaster, Users } from "lucide-react";
import { motion } from "framer-motion";

const cardsInfo = [
  {
    title: "cardio zone",
    description:
      "Step into our Cardio Oasis, a vibrant and invigorating space dedicated to elevating your cardiovascular health and well-being. Our cardio zone is a haven where you can push your limits.",
    icon: HeartPulse,
  },
  {
    title: "weights zone",
    description:
      "Welcome to weights zone, where the clang of iron and the scent of determination fill the air. This is your sanctuary for building raw strength, sculpting muscle, and unleashing your true potential. ",
    icon: Dumbbell,
  },
  {
    title: "cycling zone",
    description:
      "Welcome to the Cycling zone, where the thrill of the open road meets the comfort of an indoor environment. Whether you're an avid cyclist or a beginner looking to embark on a new fitness journey.",
    icon: Bike,
  },
  {
    title: "class studio",
    description:
      "Welcome to Class Studio, the vibrant heart of our community where individuals come together to experience the power of group fitness. In this dynamic and inspiring space, you'll find a diverse range of classes designed to challenge your limits.",
    icon: Users,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const AmenitySection = () => {
  return (
    <section className="max-sm:bg-neutral-900">
      <Parallax
        scale={[1, 1.5]}
        speed={-25}
        opacity={[0, 1]}
        className="absolute w-full h-[600px] -z-10 hidden sm:block "
      >
        <Image
          src={"/images/amenities.png"}
          alt={"bg-image"}
          fill
          className="object-cover"
          priority
        />
      </Parallax>
      <Container className="flex justify-center py-20">
        <div className="flex flex-col items-center">
          <motion.h1
            initial="hidden"
            whileInView={"visible"}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold capitalize mb-10 lg:mb-20"
          >
            our amenities
          </motion.h1>
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
          >
            {cardsInfo.map((item) => (
              <AmenityCard
                title={item.title}
                description={item.description}
                key={item.title}
                icon={item.icon}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AmenitySection;
