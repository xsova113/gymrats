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
import { User } from "lucide-react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

const PtBios = () => {
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
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-300">
                    <User />
                  </div>
                  {item.name}
                </CardTitle>
                <CardDescription className="pt-2">
                  <span className="text-red-600">{item.title}</span>
                  <br />
                  {item.qualifications.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
};

export default PtBios;
