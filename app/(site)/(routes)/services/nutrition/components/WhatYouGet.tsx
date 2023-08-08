"use client";

import Container from "@/components/Container";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { nutrition } from "../constants";

const WhatYouGet = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div>
      <Parallax
        scale={[1, 1.5]}
        speed={-25}
        opacity={[-0.2, 0.8]}
        className="absolute w-full h-[600px] -z-10"
      >
        <Image src={"/images/dietplan.png"} alt={"diet plan"} fill className="hidden md:block" />
        <Image src={"/images/dietplanvert1.png"} alt={"diet plan"} fill className="md:hidden block" />
      </Parallax>
      <Container className="flex flex-col items-center">
        <h1 className="uppercase font-bold text-3xl mb-10">What you get</h1>
        <Accordion
          defaultValue="item-0"
          type="single"
          collapsible
          className="w-[90%] sm:w-2/3 lg:1/2 max-w-xl"
        >
          {nutrition.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-none text-neutral-200"
            >
              <AccordionTrigger className="text-lg">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>{item.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </div>
  );
};

export default WhatYouGet;
