import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatter } from "@/lib/utils";
import { Product } from "@/type";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ supplements }: { supplements: Product[] }) => {
  return (
    <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 sm:gap-6 gap-4">
      {supplements.map((item) => (
        <Card key={item.id}>
          <CardContent className="cursor-pointer p-0">
          <Link href={`/supplement/${item.id}`}>
            <div className="relative aspect-square">
              <Image
                src={item.images[0].url}
                alt={"image"}
                fill
                className="rounded-t-lg"
              />
            </div>
            </Link>
          </CardContent>
          <CardHeader>
            <CardTitle className="mb-2">{item.name}</CardTitle>
            <CardDescription>
              {formatter.format(Number(item.price))}
            </CardDescription>
          </CardHeader>
          <Link href={`/supplement/${item.id}`}>
            <CardFooter>
              <Button className="bg-red-600 hover:bg-red-600/80 text-white">
                Buy Now
              </Button>
            </CardFooter>
          </Link>
        </Card>
      ))}
    </article>
  );
};

export default ProductCard;
