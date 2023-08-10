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
import { cn, formatter } from "@/lib/utils";
import { Minus, Plus, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useToast } from "./ui/use-toast";

const Cart = () => {
  const { items, removeAllItems, addItem, removeItem } = useCart();
  const [groupedItems, setGroupedItems] = useState<any>({});
  const [totalPrice, setTotalPrice] = useState(0);
  const searchParams = useSearchParams();
  const { toast } = useToast();

  useEffect(() => {
    const total = items.reduce((acc, item) => {
      const totalPrice = Number(item?.price) + acc;
      return totalPrice;
    }, 0);
    setTotalPrice(total);
  }, [items]);

  const onCheckout = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/gymratsCheckout`,
        { groupedItems, totalPrice }
      );

      window.location = response.data.url;
    } catch (error: any) {
      toast({ title: error.message, variant: "destructive" });
    }
  };

  // Group items by ID
  useMemo(() => {
    const groupedDate = items.reduce((results: any, item): any => {
      (results[item.id] = results[item.id] || []).push(item);

      return results;
    }, {});

    setGroupedItems(groupedDate);
  }, [items]);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast({ title: "Payment completed", variant: "success" });
      removeAllItems();
    }

    if (searchParams.get("cancelled")) {
      toast({ title: "Something went wrong", variant: "destructive" });
    }
  }, [searchParams, removeAllItems, toast]);

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
              className={cn("ml-auto", items.length === 0 && "hidden")}
              onClick={removeAllItems}
            >
              Remove All
            </Button>
            {Object.entries(groupedItems).map(([key, items]: any) => (
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
                  <span>Price: {formatter.format(Number(items[0].price))}</span>
                </div>
                <div className="flex items-center self-end gap-4 justify-between bg-neutral-800 rounded-md p-2 ml-auto">
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
              {items.length === 0 ? (
                <span>Cart empty</span>
              ) : (
                <div>
                  <span className="text-neutral-100 font-semibold">
                    Total Amount
                  </span>
                  : {formatter.format(totalPrice)}
                </div>
              )}
            </div>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter className="mt-12">
          <Button
            disabled={items.length === 0}
            onClick={onCheckout}
            className="w-full font-semibold uppercase bg-red-600 text-white hover:bg-red-600/80"
          >
            Checkout
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
