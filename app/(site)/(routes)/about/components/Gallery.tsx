"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { images } from "../constants";

const Gallery = () => {
  return (
    <div className="md:mx-10 mx-8 text-center md:py-32">
      <h2 className="md:text-4xl text-3xl uppercase text-neutral-100 font-semibold">
        Gallery
      </h2>

      <Tabs
        defaultValue="/images/gymgallery/2.png"
        className="md:space-y-24 md:mt-24 mt-4"
      >
        <TabsList className="flex gap-x-4 bg-transparent">
          {images.map((item) => (
            <TabsTrigger
              key={item}
              value={item}
              className="md:w-[150px] w-[65px] relative aspect-square"
            >
              <Image
                src={item}
                alt={"image"}
                fill
                className="rounded-md object-cover"
                loading="lazy"
              />
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="relative">
          {images.map((item) => (
            <TabsContent
              key={item}
              value={item}
              className="md:w-3/4 mx-auto relative aspect-video mt-6"
            >
              <Image
                src={item}
                alt={"image"}
                fill
                className="rounded-xl"
                priority
              />
            </TabsContent>
          ))}
          <div className="max-md:hidden border rounded-tr-3xl rounded-bl-3xl w-full h-[95%] aspect-square absolute top-1/4 -z-10" />
        </div>
      </Tabs>
    </div>
  );
};

export default Gallery;
