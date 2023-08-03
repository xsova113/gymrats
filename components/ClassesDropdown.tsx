"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Bike, Dumbbell, Group, StretchHorizontal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ClassesDropdown = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu className="max-md:min-w-full">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "text-base font-normal capitalize bg-transparent",
              pathname.includes("/classes") && "bg-neutral-800"
            )}
          >
            <Link href={"/classes"}>Classes</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent className={"p-2 flex flex-col min-w-[200px]"}>
            <NavigationMenuLink
              href={"/classes/circuit"}
              className="p-2 rounded-md text-sm flex items-center hover:bg-stone-900 gap-x-2 w-full capitalize transition"
            >
              <Dumbbell size={17} />
              Fitness Circuit
            </NavigationMenuLink>
            <NavigationMenuLink
              href={"/classes/spin"}
              className="p-2 rounded-md text-sm flex items-center hover:bg-stone-900 gap-x-2 w-full capitalize transition"
            >
              <Bike size={17} />
              Spin Max
            </NavigationMenuLink>
            <NavigationMenuLink
              href={"/classes/yoga"}
              className="p-2 rounded-md text-sm flex items-center hover:bg-stone-900 gap-x-2 w-full capitalize transition"
            >
              <StretchHorizontal size={17} />
              Yoga Focus
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ClassesDropdown;
