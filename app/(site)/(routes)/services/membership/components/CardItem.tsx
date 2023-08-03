"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { formatter } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface CartItemProps {
  title: string;
  description: string;
  price: number;
  type: "month" | "year";
  lists: string[];
}

const CardItem = ({
  title,
  description,
  price,
  lists,
  type,
}: CartItemProps) => {
  const router = useRouter();
  return (
    <Card className="min-h-full flex flex-col flex-1">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <h3 className="py-2">
          <span className="text-red-600 text-lg font-bold">
            {formatter.format(price)}
          </span>{" "}
          / {type}
        </h3>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="mb-auto">
        <ul className="space-y-4">
          {lists.map((list) => (
            <li className="flex items-center gap-x-2" key={list}>
              <Check size={20} color="red" />
              {list}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="text-xl w-full bg-red-600 text-white hover:bg-red-600/90">
          Sign up today
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardItem;
