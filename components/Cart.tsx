"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/hooks/use-cart";
import { formatter } from "@/lib/utils";
import { Minus, Plus, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useToast } from "./ui/use-toast";

const Cart = () => {
  const { items, removeAllItems, addItem, removeItem } = useCart();
  const [groupedItem, setGroupedItem] = useState<any>({});
  const [totalCost, setTotalCost] = useState(0);
  const searchParams = useSearchParams();
  const { toast } = useToast();

  useEffect(() => {
    const total = items.reduce((acc, item) => {
      const totalPrice = Number(item?.price) + acc;
      return totalPrice;
    }, 0);
    setTotalCost(total);
  }, [items]);

  const onCheckout = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        { groupedItem, totalCost }
      );

      window.location = response.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  // Group items by ID
  useMemo(() => {
    const groupedDate = items.reduce((results: any, item): any => {
      (results[item.id] = results[item.id] || []).push(item);

      return results;
    }, {});

    setGroupedItem(groupedDate);
  }, [items]);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast({ title: "Payment completed", variant: "success" });
      removeAllItems();
    }

    if (searchParams.get("cancelled")) {
      toast({ title: "Something went wrong", variant: "destructive" });
    }
  }, [searchParams, removeAllItems]);

  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative">
          <ShoppingCartIcon />
          <div className="rounded-full w-full bg-red-600 absolute -top-2 -right-2 aspect-square text-xs flex items-center justify-center">
            {items.length}
          </div>
        </div>
      </SheetTrigger>
      <SheetContent className="overflow-scroll">
        <SheetHeader>
          <SheetTitle>
            Shopping <span className="text-red-600">Cart</span>
          </SheetTitle>
          <SheetDescription className="space-y-8 flex flex-col">
            <Button
              variant={"link"}
              className="ml-auto"
              onClick={removeAllItems}
            >
              Remove All
            </Button>
            {Object.entries(groupedItem).map(([key, items]: any) => (
              <div key={key} className="flex items-center gap-2">
                <div className="relative w-1/3 aspect-square">
                  <Image
                    src={
                      items[0].images
                        ? items[0].images[0].url
                        : "/images/gymgirl2.png"
                    }
                    alt={items[0].name}
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span>{items[0].name}</span>
                  <span>{items[0].flavor?.name}</span>
                  <span>{formatter.format(Number(items[0].price))}</span>
                </div>
                <div className="flex items-center gap-4 justify-between bg-neutral-800 rounded-md p-2 ml-auto">
                  <Button
                    size={"icon"}
                    className="h-5 w-5 hover:bg-neutral-700 bg-transparent text-neutral-200"
                    onClick={() => removeItem(items[0].id)}
                  >
                    <Minus />
                  </Button>
                  <span>{items.length}</span>
                  <Button
                    size={"icon"}
                    className="h-5 w-5 hover:bg-neutral-700 bg-transparent text-neutral-200"
                    onClick={() => addItem([items[0]])}
                  >
                    <Plus />
                  </Button>
                </div>
              </div>
            ))}

            <div className="text-lg">
              <span className="text-neutral-100 font-semibold">
                Total Amount
              </span>
              : {formatter.format(totalCost)}
            </div>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter className="mt-20">
          <Button
            onClick={onCheckout}
            className="w-full font-semibold uppercase"
          >
            Checkout
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
