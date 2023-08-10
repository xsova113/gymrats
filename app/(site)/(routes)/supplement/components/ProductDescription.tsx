"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useCart } from "@/hooks/use-cart";
import { formatter } from "@/lib/utils";
import { Product } from "@/type";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

interface ProductDescriptionProps {
  product: Product;
}

const ProductDescription = ({ product }: ProductDescriptionProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const { addItem } = useCart();
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const removeCartItems = () => {
    if (cartItems.length === 0) return;

    const index = cartItems.findIndex((item) => item.id === product.id);

    const newItems = [...cartItems];

    if (index >= 0) {
      newItems.splice(index, 1);
    } else {
      toast({ title: "Can't remove item", variant: "destructive" });
    }

    setCartItems(newItems);
  };

  const addCartItems = () => {
    setCartItems([...cartItems, product]);
  };

  const addToCart = () => {
    addItem(cartItems);
    toast({ title: "Items added to cart successfully", variant: "success" });
  };

  if (!isMounted) return null;

  return (
    <div className="flex flex-col gap-6 max-lg:self-center">
      <h1 className="text-4xl font-bold">{product.name}</h1>
      <p className="text-neutral-400">{product.description}</p>
      <div className="flex flex-col gap-2 text-neutral-100">
        <span>Category: {product.category.name}</span>
        <span>Flavor: {product.flavor.name}</span>
        <span>Amount: {product.size.name}g</span>
      </div>
      <span className="text-xl text-neutral-100 font-semibold">
        Price: {formatter.format(Number(product.price))}
      </span>
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <div className="flex items-center gap-4 max-lg:w-full justify-between bg-neutral-800 rounded-md p-2">
          <Button
            size={"icon"}
            disabled={cartItems.length === 0}
            className="h-5 w-5 hover:bg-neutral-700 bg-transparent text-neutral-200"
            onClick={removeCartItems}
          >
            <Minus />
          </Button>
          <span>{cartItems.length}</span>
          <Button
            size={"icon"}
            className="h-5 w-5 hover:bg-neutral-700 bg-transparent text-neutral-200"
            onClick={addCartItems}
          >
            <Plus />
          </Button>
        </div>

        <Button
          disabled={cartItems.length === 0}
          onClick={addToCart}
          className="bg-red-600 hover:bg-red-600/80 text-white uppercase font-semibold w-full"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDescription;
