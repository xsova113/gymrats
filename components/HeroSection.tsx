"use client";

import Container from "@/components/Container";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { type } from "os";
import { Parallax } from "react-scroll-parallax";

const HeroSection = () => {
  return (
    <section>
      <Parallax
        speed={-80}
        opacity={[2, -0.8]}
        className="absolute inset-0 w-full h-[800px] -z-10"
      >
        <Image
          src={"/images/gymratgirl.png"}
          alt={"bg-image"}
          fill
          className="object-cover sm:block hidden"
          priority
        />
        <Image
          src={"/images/gymgirl2.png"}
          alt={"bg-image"}
          fill
          className="object-cover block sm:hidden object-bottom"
          priority
        />
      </Parallax>

      <Container>
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } },
          }}
          className="h-[550px] flex flex-col justify-end"
        >
          <motion.h1
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="lg:text-6xl md:text-5xl text-4xl w-2/3 font-extrabold tracking-wider leading-tight uppercase"
          >
            <span className="text-red-600">
              prepare
              <br /> to change
            </span>
            &nbsp;
            <br />
            for the better
          </motion.h1>
          <motion.div
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-10"
          >
            <Link
              href={"/services/membership"}
              className="capitalize bg-white text-muted w-fit md:text-xl text-lg px-8 py-3 rounded-lg border-none hover:opacity-90 transition hover:scale-105"
            >
              try for free today
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;
