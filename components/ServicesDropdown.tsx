"use client";

import { servicesItems } from "@/app/(site)/constants";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const ServicesDropdown = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu className="max-md:min-w-full">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "text-base font-normal capitalize bg-transparent",
              pathname.includes("/services") && "bg-neutral-800"
            )}
          >
            Services
          </NavigationMenuTrigger>

          <NavigationMenuContent className={"p-2 flex flex-col min-w-[200px]"}>
            {servicesItems.map((item) => (
              <NavigationMenuLink
                key={item.label}
                href={item.href}
                className="p-2 rounded-md text-sm flex items-center hover:bg-stone-900 gap-x-2 w-full capitalize transition"
              >
                <item.icon size={17} />
                {item.label}
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ServicesDropdown;
