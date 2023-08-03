"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { images } from "../constants";
import { cn } from "@/lib/utils";

const Gallery = () => {
  return (
    <div className="md:mx-10 mx-8 text-center py-24">
      <h2 className="md:text-4xl text-3xl uppercase mb-6 text-neutral-100 font-semibold">
        Gallery
      </h2>

      <Tabs
        defaultValue="/images/gymgallery/2.png"
        className="md:space-y-24 md:mt-28"
      >
        <TabsList className="flex gap-x-4 bg-transparent">
          {images.map((item) => (
            <TabsTrigger
              key={item}
              value={item}
              className="w-full relative aspect-square md:mb-10"
            >
              <Image
                src={item}
                alt={"image"}
                fill
                className={cn("rounded-md object-cover")}
                loading="lazy"
              />
            </TabsTrigger>
          ))}
        </TabsList>
        {images.map((item) => (
          <TabsContent
            key={item}
            value={item}
            className="w-full relative aspect-video"
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
      </Tabs>
    </div>
  );
};

export default Gallery;
