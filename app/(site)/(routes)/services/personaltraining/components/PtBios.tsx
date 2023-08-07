"use client";

import Container from "@/components/Container";
import { ptCards } from "../constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import { useEffect, useState } from "react";

const PtBios = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Parallax
        speed={-25}
        scale={[1, 1.5]}
        className="w-full h-[700px] absolute -z-10 max-md:hidden"
      >
        <Image src={"/images/ptbio.png"} alt={"image"} fill />
      </Parallax>
      <Container className="flex flex-col">
        <h1 className="md:text-2xl text-xl font-semibold mb-10 uppercase self-center">
          Our Personal Trainers
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ptCards.map((item) => (
            <Card
              key={item.name}
              className="flex flex-col justify-between bg-neutral-950/60"
            >
              <CardHeader className="p-0">
                <CardTitle className="flex flex-col gap-4">
                  <div className="relative aspect-[16/14]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <span className="px-6">{item.name}</span>
                </CardTitle>
                <CardDescription className="flex flex-col pt-4 pb-8 px-6">
                  <span className="text-red-600">{item.title}</span>
                  <span className="flex pt-2 p-0">
                    {item.qualifications.map((item) => (
                      <span key={item}>{item}&nbsp;</span>
                    ))}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>{item.bio}</CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
};

export default PtBios;
