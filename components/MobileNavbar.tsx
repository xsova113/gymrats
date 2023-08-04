"use client";

import { classesRoutes, navItem, servicesItems } from "@/app/(site)/constants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)}>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <div className="mt-20 flex flex-col gap-y-6">
            {navItem.map((item) => (
              <div key={item.href}>
                {item.label === "services" || item.label === "classes" ? (
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-none">
                      <AccordionTrigger
                        className={cn(
                          "hover:border-none hover:no-underline capitalize hover:bg-stone-100 rounded-full px-4 py-2 hover:text-stone-900",
                          pathname.includes(item.label) &&
                            "bg-stone-100 text-stone-900"
                        )}
                      >
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className="border mt-2 rounded-lg p-2 pb-0">
                        <nav className="flex flex-col gap-y-2">
                          {item.label === "classes" &&
                            classesRoutes.map((item) => (
                              <Link
                                key={item.href}
                                href={"/" + item.href}
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-neutral-800 capitalize w-full p-2 rounded-full transition"
                              >
                                {item.label}
                              </Link>
                            ))}
                          {item.label === "services" &&
                            servicesItems.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-neutral-800 capitalize w-full rounded-full p-2 transition"
                              >
                                {item.label}
                              </Link>
                            ))}
                        </nav>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "capitalize py-2 rounded-full flex px-3 hover:text-black hover:bg-neutral-100 transition",
                      pathname === item.href && "text-black bg-neutral-100"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <Button
            onClick={() => {
              router.push("/services/membership");
              setIsOpen(false);
            }}
            className="mt-20 bg-red-600 hover:bg-red-600/90 text-white text-lg uppercase"
          >
            Join Now
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
