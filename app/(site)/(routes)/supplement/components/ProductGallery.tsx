"use client";

import { Product } from "@/type";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProductGalleryProps {
  product: Product;
}

const ProductGallery = ({ product }: ProductGalleryProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Tabs defaultValue={product.images[0].id} className="w-[400px]">
      {product.images.map((image) => (
        <TabsContent value={image.id} key={image.id}>
          <div className="relative aspect-square">
            <Image
              src={image.url}
              alt={"image"}
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </TabsContent>
      ))}

      <TabsList className="mt-8 gap-4 bg-transparent">
        {product.images.map((image) => (
          <TabsTrigger
            key={image.id}
            value={image.id}
            className="relative aspect-square w-16 ring-neutral-600"
          >
            <Image src={image.url} alt={"image"} fill className="rounded-md" />
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
};

export default ProductGallery;
